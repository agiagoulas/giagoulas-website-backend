from internal.models.gallery import Gallery


class Database:
    def __init__(self):
        pass

    def get_all_galleries(self):
        pass

    def get_gallery(self, _id: str):
        pass

    def add_gallery(self, gallery: Gallery):
        pass

    def update_gallery(self, _id: str, gallery: Gallery):
        pass

    def delete_gallery(self, _id: str):
        pass

    def add_image(self, _id: str, url: str, image_key: str):
        pass

    def delete_image(self, _id: str, image_key: str):
        pass

    def set_cover_image(self, _id: str, image_url: str, image_key: str):
        pass
