from pydantic import BaseModel
from typing import Optional, List


class Image(BaseModel):
    url: str
    key: str


class Gallery(BaseModel):
    title: str
    description: str
    images: Optional[List[Image]]
