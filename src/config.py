from lagom import Container
from lagom.integrations.fast_api import FastApiIntegration

from src.internal.abstractions.database import Database
from src.internal.abstractions.object_storage import ObjectStore
from src.internal.repositories.mongo_database import MongoDatabase
from src.internal.repositories.s3_bucket import S3Bucket

container = Container()
container[Database] = MongoDatabase
container[ObjectStore] = S3Bucket

deps = FastApiIntegration(container)
