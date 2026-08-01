import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from backend.config import settings
    from backend.routers import chat, posts
except ImportError:
    from config import settings
    from routers import chat, posts

app = FastAPI(
    title="100xElevate Backend API",
    description="FastAPI REST Backend with LangChain + Google Gemini RAG Customer Support Chatbot",
    version="1.0.0"
)

# Production CORS Middleware Configuration
origins = [
    settings.FRONTEND_URL.rstrip("/"),
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "https://100xelevate.com",
    "https://www.100xelevate.com"
]

# De-duplicate origins maintaining clean list
origins = list(dict.fromkeys([o for o in origins if o]))

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"https://.*\.vercel\.app",  # Allows all Vercel production & preview deployments
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)
app.include_router(posts.router)

@app.get("/api/v1/health", tags=["System"])
def health_check():
    return {
        "status": "online",
        "service": "100xElevate FastAPI Backend",
        "version": "1.0.0",
        "llm_provider": "Google Gemini API",
        "vector_store": "pgvector (Supabase)"
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app" if os.path.exists("main.py") else "backend.main:app", host="0.0.0.0", port=port, reload=True)
