import os
import pydantic
from pymongo import MongoClient
from bson import ObjectId

from internal.models import Gallery

pydantic.json.ENCODERS_BY_TYPE[ObjectId] = str

MONGODB_USER = os.getenv("MONGODB_USER")
MONGODB_PASSWORD = os.getenv("MONGODB_PASSWORD")
MONGODB_URL = os.getenv("MONGODB_URL")
MONGODB_CONNECTION = f"mongodb+srv://{MONGODB_USER}:{MONGODB_PASSWORD}@{MONGODB_URL}/?retryWrites=true&w=majority&ssl" \
                     f"=true"
MONGODB_DATABASE = os.getenv("MONGODB_DATABASE")
MONGODB_GALLERIES_COLLECTION = os.getenv("MONGODB_GALLERIES_COLLECTION")
MONGODB_POSTS_COLLECTION = os.getenv("MONGODB_POSTS_COLLECTION")

client = MongoClient(MONGODB_CONNECTION)
db = client[MONGODB_DATABASE]


class MongoDatabase:
    def __init__(self):
        self.galleries_collection = db[MONGODB_GALLERIES_COLLECTION]
        self.posts_collection = db[MONGODB_POSTS_COLLECTION]

    def get_all_galleries(self):
        return list(self.galleries_collection.find({}))

    def get_gallery(self, _id: str):
        return self.galleries_collection.find_one({"_id": ObjectId(_id)})

    def add_gallery(self, gallery: Gallery):
        _id = self.galleries_collection.insert_one(gallery.dict()).inserted_id
        return self.get_gallery(_id)

    def update_gallery(self, _id: str, gallery: Gallery):
        self.galleries_collection.update_one({"_id": ObjectId(_id)}, { "$set": gallery.dict()})
        return self.get_gallery(_id)

    def delete_gallery(self, _id: str):
        self.galleries_collection.delete_one({"_id": ObjectId(_id)})

    def add_image(self, _id: str, url: str, image_key: str):
        self.galleries_collection.find_one_and_update({'_id': ObjectId(_id)}, {
            '$push': {
                'images': {
                    "url": url,
                    "key": image_key
                }
            }})
        return self.get_gallery(_id)

    def delete_image(self, _id: str, image_key: str):
        self.galleries_collection.find_one_and_update({'_id': ObjectId(_id)}, {
            '$pull': {
                'images': {
                    "key": image_key
                }
            }})
        return self.get_gallery(_id)
