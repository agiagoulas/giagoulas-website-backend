import uvicorn
import os
from fastapi import FastAPI
from dotenv import load_dotenv
from mangum import Mangum

load_dotenv()

from routers.galleries import router as galleries_router
from routers.posts import router as posts_router
from routers.github import router as github_router

app = FastAPI(title="Giagoulas Website Backend")

app.include_router(galleries_router)
app.include_router(posts_router)
app.include_router(github_router)

handler = Mangum(app=app, lifespan="off")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
