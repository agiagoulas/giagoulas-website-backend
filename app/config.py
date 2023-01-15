from lagom import Container
from lagom.integrations.fast_api import FastApiIntegration

from internal.abstractions.database import Database
from internal.abstractions.object_storage import ObjectStore
from internal.mongo_database import MongoDatabase
from internal.s3_bucket import S3Bucket

container = Container()
container[Database] = MongoDatabase
container[ObjectStore] = S3Bucket

deps = FastApiIntegration(container)
