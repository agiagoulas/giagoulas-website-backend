from pydantic import BaseModel


class Gallery(BaseModel):
    title: str
    description: str
