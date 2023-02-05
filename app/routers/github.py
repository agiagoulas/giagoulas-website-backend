from fastapi import APIRouter

from internal.services.trigger_frontend_build import trigger_frontend_build

router = APIRouter(
    prefix="/api/github",
    tags=["github"]
)


@router.post("/triggerFrontendBuild")
async def build_frontend():
    trigger_frontend_build()
