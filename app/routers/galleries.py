from fastapi import APIRouter, UploadFile

from config import deps
from internal.models.gallery import Gallery
from internal.abstractions.database import Database
from internal.abstractions.object_storage import ObjectStore
from internal.services.image_converter import convert_to_webp

router = APIRouter(
    prefix="/api/galleries",
    tags=["galleries"]
)


@router.get("/")
@router.get("")
async def get_galleries(
        db: Database = deps.depends(Database)):
    return db.get_all_galleries()


@router.post("/", status_code=201)
@router.post("", status_code=201)
async def add_gallery(
        gallery: Gallery,
        db: Database = deps.depends(Database)):
    return db.add_gallery(gallery=gallery)


@router.get("/{_id}")
async def get_gallery(
        _id: str,
        db: Database = deps.depends(Database)):
    return db.get_gallery(_id=_id)


@router.put("/{_id}")
async def update_gallery(
        _id: str,
        gallery: Gallery,
        db: Database = deps.depends(Database)):
    return db.update_gallery(_id=_id, gallery=gallery)


@router.delete("/{_id}")
async def delete_gallery(
        _id: str,
        object_store: ObjectStore = deps.depends(ObjectStore),
        db: Database = deps.depends(Database)):
    gallery = db.get_gallery(_id=_id)
    if "images" in gallery:
        for images in gallery["images"]:
            object_store.delete_image(images["key"])
    return db.delete_gallery(_id=_id)


@router.post("/addImageToGallery/")
async def add_image_to_gallery(
        _id: str,
        files: list[UploadFile],
        object_store: ObjectStore = deps.depends(ObjectStore),
        db: Database = deps.depends(Database)):
    for file in files:
        webp_picture, webp_picture_filename = convert_to_webp(file.file, file.filename)
        url, image_key = object_store.upload_image(file=webp_picture, filename=webp_picture_filename)
        db.add_image(_id=_id, url=url, image_key=image_key)
    return db.get_gallery(_id=_id)


@router.delete("/deleteImageFromGallery/")
async def delete_image_from_gallery(
        _id: str,
        image_key: str,
        object_store: ObjectStore = deps.depends(ObjectStore),
        db: Database = deps.depends(Database)):
    object_store.delete_image(image_key=image_key)
    return db.delete_image(_id=_id, image_key=image_key)
