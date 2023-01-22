from fastapi import APIRouter

router = APIRouter(
    prefix="/api/posts",
    tags=["posts"]
)


@router.get("/")
@router.get("")
async def get_posts():
    pass
