from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os

load_dotenv()

model = ChatGoogleGenerativeAI(
            model = "gemma-3n-e4b-it",
            google_api_key = os.getenv("GOOGLE_API_KEY"),
            temperature = 0.1)

response = model.invoke("What is the capital of France?")
print(response.content)