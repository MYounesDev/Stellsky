from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os
from search_mongodb import search_mongodb

load_dotenv()

def get_model():
    model = ChatGoogleGenerativeAI(
                model = "gemma-3n-e4b-it",
                google_api_key = os.getenv("GOOGLE_API_KEY"),
                temperature = 0.1,
                tools=[search_mongodb],
                tool_choice="auto")

    return model