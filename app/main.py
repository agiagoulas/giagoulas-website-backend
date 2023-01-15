import uvicorn
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

from routers.galleries import router as galleries_router
from routers.posts import router as posts_router

app = FastAPI()

app.include_router(galleries_router)
app.include_router(posts_router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
