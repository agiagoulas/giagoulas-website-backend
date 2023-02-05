from pydantic import BaseModel, Field
from datetime import datetime


class Gallery(BaseModel):
    title: str
    description: str
    updated_on: datetime = Field(default_factory=datetime.utcnow)
