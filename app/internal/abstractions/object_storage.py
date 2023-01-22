from typing import BinaryIO


class ObjectStore:
    def __init__(self):
        pass

    def upload_image(self, file: BinaryIO, filename: str):
        pass

    def delete_image(self, image_key: str):
        pass
