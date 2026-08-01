from typing import List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

try:
    from backend.rag.rag_chain import query_rag_support
except ImportError:
    from rag.rag_chain import query_rag_support

router = APIRouter(prefix="/api/v1", tags=["AI Support Chatbot"])

class ChatMessage(BaseModel):
    role: str # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    message: str
    chat_history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    answer: str
    sources: List[str]

@router.post("/chat", response_model=ChatResponse)
def handle_chat(request: ChatRequest):
    if not request.message or not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    
    result = query_rag_support(request.message.strip())
    return ChatResponse(
        answer=result["answer"],
        sources=result.get("sources", [])
    )
