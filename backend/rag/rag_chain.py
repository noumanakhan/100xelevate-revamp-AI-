import os
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

try:
    from backend.config import settings
except ImportError:
    from config import settings

def is_valid_api_key(key: str) -> bool:
    if not key or key.strip() in ["", "your_gemini_api_key_here", "your_actual_gemini_api_key_here"]:
        return False
    return True

def get_vector_store():
    if not is_valid_api_key(settings.GEMINI_API_KEY):
        return None

    embeddings = GoogleGenerativeAIEmbeddings(
        model=settings.EMBEDDING_MODEL,
        google_api_key=settings.GEMINI_API_KEY
    )

    # Try PGVector first (Supabase)
    try:
        from langchain_postgres.vectorstores import PGVector
        vector_store = PGVector(
            connection=settings.DATABASE_URL,
            collection_name=settings.PG_COLLECTION_NAME,
            embeddings=embeddings,
        )
        return vector_store
    except Exception as pg_err:
        # Fallback to local FAISS
        faiss_index_path = os.path.join(os.path.dirname(__file__), "..", "vectorstore", "faiss_index")
        if os.path.exists(faiss_index_path):
            from langchain_community.vectorstores import FAISS
            return FAISS.load_local(
                faiss_index_path,
                embeddings,
                allow_dangerous_deserialization=True
            )
        return None

def format_docs(docs):
    parts = []
    for doc in docs:
        source = doc.metadata.get('source', 'Knowledge Base')
        section = doc.metadata.get('section_title', '')
        header = f"[Source: {source}" + (f" | Section: {section}]" if section else "]")
        parts.append(f"{header}\n{doc.page_content}")
    return "\n\n".join(parts)

def query_rag_support(question: str) -> dict:
    if not is_valid_api_key(settings.GEMINI_API_KEY):
        return {
            "answer": "👋 Hello! I am the 100xElevate AI Customer Support Assistant. To start asking questions, please configure your GEMINI_API_KEY in environment settings.",
            "sources": []
        }

    # Model candidates list for rate limit fallback
    candidate_models = [settings.MODEL_NAME, "gemini-1.5-flash"]

    system_prompt = """You are the official 100xElevate Customer Support AI Assistant.
Your job is to assist clients, visitors, and partners by answering questions about 100xElevate services, policies, technical capabilities (SEO, GEO, Next.js, FastAPI), and pricing.

Use the following context from our internal knowledge base to answer the question accurately and professionally.
If you don't know the answer or if it's outside the provided context, politely inform the user and suggest contacting support@100xelevate.com.

Context:
{context}

Question: {question}

Answer:"""

    prompt = ChatPromptTemplate.from_template(system_prompt)

    try:
        vector_store = get_vector_store()
        if vector_store:
            retriever = vector_store.as_retriever(search_kwargs={"k": 4})
            retrieved_docs = retriever.invoke(question)
            context_text = format_docs(retrieved_docs)
            sources = list(set(doc.metadata.get("source", "Knowledge Base") for doc in retrieved_docs))
        else:
            context_text = "100xElevate is a digital agency providing GEO, Programmatic SEO, and Web Engineering services."
            sources = []
    except Exception:
        context_text = "100xElevate is a digital agency providing GEO, Programmatic SEO, and Web Engineering services."
        sources = []

    last_error = None
    for model_name in candidate_models:
        try:
            llm = ChatGoogleGenerativeAI(
                model=model_name,
                google_api_key=settings.GEMINI_API_KEY,
                temperature=0.3
            )

            chain = (
                {"context": lambda x: context_text, "question": RunnablePassthrough()}
                | prompt
                | llm
                | StrOutputParser()
            )

            answer = chain.invoke(question)
            return {
                "answer": answer,
                "sources": sources
            }
        except Exception as e:
            last_error = e
            err_str = str(e).lower()
            if "resource_exhausted" in err_str or "429" in err_str:
                continue
            else:
                break

    if last_error:
        err_msg = str(last_error)
        if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
            return {
                "answer": "⏳ Google Gemini API rate limit reached (429 Rate Limit). Please wait a few seconds before trying again.",
                "sources": []
            }
        return {
            "answer": f"API Error: {err_msg}. Please check your environment variables.",
            "sources": []
        }

    return {
        "answer": "An unexpected error occurred while generating a response.",
        "sources": []
    }
