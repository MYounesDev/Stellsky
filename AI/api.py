from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Any
import logging
import motor.motor_asyncio
import os
from dotenv import load_dotenv
from pydantic import BaseModel


load_dotenv()

# Logger config
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# MongoDB setup
MONGO_URI = os.getenv("MONGO_URI")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client["hach-pera-db"]  # Mongo'daki veritabanı adı

# FastAPI setup
app = FastAPI(
    title="Hach-Pera AI API",
    description="AI-powered analysis API",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Prod ortamında güvenli liste kullan
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/")
async def root():
    return {"status": "ok", "message": "AI API is running"}

# DB test
@app.get("/test-db-connection")
async def test_db_connection():
    try:
        await client.admin.command('ping')
        collections = await db.list_collection_names()
        return {"status": "success", "collections": collections}
    except Exception as e:
        logger.error(f"DB error: {e}")
        raise HTTPException(status_code=500, detail="DB connection failed")

# Request modeli
class AnalyzeRequest(BaseModel):
    user_id: str
    prompt: str

# Kullanıcının profilini analiz eden AI endpointi
@app.post("/analyze-profile")
async def analyze_profile(request: AnalyzeRequest):
    try:
        user_data = await db["users"].find_one({"_id": request.user_id})
        if not user_data:
            raise HTTPException(status_code=404, detail="User not found")

        # Kullanıcı bilgilerini modele yollamak için hazırlıyoruz
        full_prompt = f"Prompt:\n{request.prompt}\n\nUser Info:\n{user_data}"
        #result = await call_llm(full_prompt)

        #return {"analysis": result}
    except Exception as e:
        logger.error(f"Error analyzing profile: {e}")
        raise HTTPException(status_code=500, detail="Analysis failed")
