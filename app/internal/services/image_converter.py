from PIL import Image
from io import BytesIO


def convert_to_webp(file, filename):
    image = Image.open(file)
    image = image.convert("RGB")
    webp_picture = BytesIO()
    image.save(webp_picture, format="webp")
    webp_picture.seek(0)
    webp_picture_filename = filename.split(".")[0] + ".webp"
    return webp_picture, webp_picture_filename
