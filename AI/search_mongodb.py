import os
from dotenv import load_dotenv
from langchain_core.tools import tool
import motor.motor_asyncio
import asyncio

load_dotenv()

@tool
def search_mongodb(query: str) -> str:
    """MongoDB query to search in the database."""

    async def fetch_results(mongo_query: dict):
        MONGO_URI = os.getenv("MONGO_URI")
        client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
        db = client["hach-pera-db"]
        collection = db["users"]

        cursor = collection.find(mongo_query)
        results = await cursor.to_list(length=100) 
        return results

    try:
        mongo_query = eval(query)  
        results = asyncio.run(fetch_results(mongo_query))
        return str(results)

    except Exception as e:
        return f"Error: {e}"
