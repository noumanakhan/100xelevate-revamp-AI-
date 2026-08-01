import json
import os
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

router = APIRouter(prefix="/api/v1", tags=["Posts & Content"])

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "posts.json")

def load_posts():
    if not os.path.exists(DATA_PATH):
        return []
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

@router.get("/posts")
def get_posts(
    page: int = Query(1, ge=1),
    per_page: int = Query(10, ge=1, le=100),
    search: Optional[str] = None
):
    posts = load_posts()
    if search:
        search_lower = search.lower()
        posts = [
            p for p in posts 
            if search_lower in p.get("title", {}).get("rendered", "").lower() 
            or search_lower in p.get("content", {}).get("rendered", "").lower()
        ]
    
    total = len(posts)
    start = (page - 1) * per_page
    end = start + per_page
    paginated_posts = posts[start:end]
    total_pages = (total + per_page - 1) // per_page if per_page > 0 else 0

    return {
        "posts": paginated_posts,
        "total": total,
        "totalPages": total_pages
    }

@router.get("/posts/slugs")
def get_all_post_slugs():
    posts = load_posts()
    return [p.get("slug") for p in posts if "slug" in p]

@router.get("/posts/{slug}")
def get_post_by_slug(slug: str):
    posts = load_posts()
    post = next((p for p in posts if p.get("slug") == slug), None)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.get("/categories")
def get_categories():
    return [
        {"id": 1, "name": "Generative Engine Optimization", "slug": "geo", "count": 1, "description": "AI Search Optimization"},
        {"id": 2, "name": "Web Engineering", "slug": "web-engineering", "count": 1, "description": "Next.js and FastAPI engineering"}
    ]
