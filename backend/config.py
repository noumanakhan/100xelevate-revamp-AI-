import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    GEMINI_API_KEY: str = ""
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/elevate_db"
    FRONTEND_URL: str = "http://localhost:3000"
    MODEL_NAME: str = "gemini-3.6-flash"
    EMBEDDING_MODEL: str = "models/gemini-embedding-001"
    PG_COLLECTION_NAME: str = "elevate_knowledge_base"

    model_config = SettingsConfigDict(
        env_file=os.path.join(os.path.dirname(__file__), ".env"),
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()
