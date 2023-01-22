from lagom import Container
from lagom.integrations.fast_api import FastApiIntegration

from app.internal.abstractions.database import Database
from app.internal.abstractions.object_storage import ObjectStore
from app.internal.repositories.mongo_database import MongoDatabase
from app.internal.repositories.s3_bucket import S3Bucket

container = Container()
container[Database] = MongoDatabase
container[ObjectStore] = S3Bucket

deps = FastApiIntegration(container)
