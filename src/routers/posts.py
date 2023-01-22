from fastapi import APIRouter

router = APIRouter(
    prefix="/api/posts",
    tags=["posts"]
)


@router.get("/")
async def get_posts():
    pass
