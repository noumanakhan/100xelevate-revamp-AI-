# 🌐 Production Deployment Guide (Vercel + Render + Supabase pgvector)

Complete step-by-step guide to deploy your **Next.js Frontend on Vercel**, **FastAPI Backend on Render**, and **Vector Database on Supabase (`pgvector`)**.

---

## 🗄️ Step 1: Set Up Supabase Vector Database (`pgvector`)

1. Go to [Supabase Console](https://supabase.com) and create a free project (e.g. `elevate-vector-db`).
2. Once created, open the **SQL Editor** tab in Supabase and run:
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```
3. Go to **Project Settings** → **Database** → **Connection String** (URI mode).
4. Copy your PostgreSQL Connection String, replacing `[YOUR-PASSWORD]` with your database password:
   ```env
   postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   ```
5. On your local machine, update `backend/.env` with this connection string:
   ```env
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   GEMINI_API_KEY=your_gemini_api_key
   ```
6. Run the document ingestion script to populate Supabase with your website's knowledge base embeddings:
   ```powershell
   .\backend\venv\Scripts\python.exe -m backend.rag.ingest
   ```

---

## 🐍 Step 2: Deploy FastAPI Backend on Render

1. Push your repository to GitHub.
2. Log into [Render Dashboard](https://dashboard.render.com/) and click **New** → **Web Service**.
3. Connect your GitHub repository.
4. Configure the Web Service settings:
   - **Name**: `elevate-fastapi-backend`
   - **Region**: Select your closest region
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Scroll to **Environment Variables** and add:

| Key | Value Example |
| :--- | :--- |
| `GEMINI_API_KEY` | `AIzaSy...` (Your Google Gemini API Key) |
| `DATABASE_URL` | `postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres` |
| `FRONTEND_URL` | `https://your-app.vercel.app` (or `https://100xelevate.com`) |

6. Click **Create Web Service**. Render will build and deploy your backend.
7. Copy your live Render URL (e.g., `https://elevate-fastapi-backend.onrender.com`).

---

## ⚡ Step 3: Deploy Next.js Frontend on Vercel

1. Log into [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
2. Import your GitHub repository.
3. In the framework preset, select **Next.js**.
4. Set **Root Directory** to `100xelevate`.
5. Expand **Environment Variables** and add:

| Key | Value Example |
| :--- | :--- |
| `NEXT_PUBLIC_API_BASE_URL` | `https://elevate-fastapi-backend.onrender.com/api/v1` |

6. Click **Deploy**. Vercel will build your frontend.

---

## 🔒 Step 4: Verify CORS & Test Live Application

1. Open your deployed Vercel site (e.g. `https://your-app.vercel.app`).
2. Click the floating **Support Chat** widget in the bottom-right corner.
3. Send a query (e.g. *"What services do you offer?"*).
4. The frontend will securely cross-origin request your Render FastAPI backend, query your Supabase `pgvector` database, and return live Gemini AI answers!
