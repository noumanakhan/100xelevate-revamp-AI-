import os
import glob
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings

try:
    from backend.config import settings
except ImportError:
    from config import settings

def load_knowledge_base():
    kb_dir = os.path.join(os.path.dirname(__file__), "..", "data", "knowledge_base")
    md_files = glob.glob(os.path.join(kb_dir, "*.md"))
    
    documents = []
    for filepath in md_files:
        loader = TextLoader(filepath, encoding="utf-8")
        docs = loader.load()
        for doc in docs:
            doc.metadata["source"] = os.path.basename(filepath)
        documents.extend(docs)
    return documents

def ingest_documents():
    print("[Ingest] Loading knowledge base documents...")
    docs = load_knowledge_base()
    print(f"[Ingest] Loaded {len(docs)} document files.")

    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=600,
        chunk_overlap=100,
        separators=["\n\n", "\n", " ", ""]
    )
    chunks = text_splitter.split_documents(docs)
    print(f"[Ingest] Created {len(chunks)} text chunks.")

    if not settings.GEMINI_API_KEY or settings.GEMINI_API_KEY in ["your_gemini_api_key_here", "your_actual_gemini_api_key_here"]:
        print("[Warning] GEMINI_API_KEY is not set in environment. Ingestion skipped.")
        return False

    embeddings = GoogleGenerativeAIEmbeddings(
        model=settings.EMBEDDING_MODEL,
        google_api_key=settings.GEMINI_API_KEY
    )

    # Ingesting into PostgreSQL (Supabase pgvector) or FAISS fallback
    try:
        from langchain_postgres.vectorstores import PGVector
        print(f"[Ingest] Indexing into PostgreSQL pgvector (Supabase)...")
        vector_store = PGVector.from_documents(
            documents=chunks,
            embedding=embeddings,
            connection=settings.DATABASE_URL,
            collection_name=settings.PG_COLLECTION_NAME,
            use_jsonb=True
        )
        print("[Ingest] Successfully ingested into Supabase pgvector!")
        return True
    except Exception as e:
        print(f"[Notice] PostgreSQL pgvector connection notice: {e}")
        print("[Ingest] Falling back to local FAISS vector store...")
        try:
            from langchain_community.vectorstores import FAISS
            faiss_dir = os.path.join(os.path.dirname(__file__), "..", "vectorstore")
            os.makedirs(faiss_dir, exist_ok=True)
            vector_store = FAISS.from_documents(chunks, embeddings)
            vector_store.save_local(os.path.join(faiss_dir, "faiss_index"))
            print("[Ingest] Saved local FAISS vector store fallback!")
            return True
        except Exception as faiss_err:
            print(f"[Error] Ingestion error: {faiss_err}")
            return False

if __name__ == "__main__":
    ingest_documents()
