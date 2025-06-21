from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os

load_dotenv()
def get_model():
    model = ChatGoogleGenerativeAI(
                model = "gemma-3n-e4b-it",
                google_api_key = os.getenv("GOOGLE_API_KEY"),
                temperature = 0.1)

    return model