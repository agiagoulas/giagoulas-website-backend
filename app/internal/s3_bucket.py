import os
import boto3
from uuid import uuid4
from typing import BinaryIO

AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_S3_REGION = os.getenv("AWS_S3_REGION")
AWS_IMAGE_BUCKET_NAME = os.getenv("AWS_IMAGE_BUCKET")

s3 = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_S3_REGION)


class S3Bucket:
    def __init__(self):
        self.client = s3

    def upload_image(self, file: BinaryIO, filename: str):
        image_key = f"{uuid4()}-{filename}"
        self.client.upload_fileobj(file, AWS_IMAGE_BUCKET_NAME, image_key)
        return f"https://{AWS_IMAGE_BUCKET_NAME}.s3.{AWS_S3_REGION}.amazonaws.com/{image_key}", image_key

    def delete_image(self, image_key: str):
        self.client.delete_object(Bucket=AWS_IMAGE_BUCKET_NAME, Key=image_key)
