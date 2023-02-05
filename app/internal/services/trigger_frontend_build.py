import os
import requests
import json
from fastapi import HTTPException

GITHUB_API_URL = os.getenv("GITHUB_API_URL")
GITHUB_ACCESS_TOKEN = os.getenv("GITHUB_ACCESS_TOKEN")
GITHUB_EVENT_TYPE = os.getenv("GITHUB_EVENT_TYPE")


def trigger_frontend_build():
    payload = json.dumps({
        "event_type": GITHUB_EVENT_TYPE
    })
    headers = {
        'Accept': 'application/vnd.github+json',
        'Authorization': f'Bearer {GITHUB_ACCESS_TOKEN}',
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", GITHUB_API_URL, headers=headers, data=payload)
    if response.status_code != 204:
        raise HTTPException(status_code=500, detail="Could not trigger frontend build.")
