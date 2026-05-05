from fastapi import Header, HTTPException
from app.config import settings


async def verify_admin_token(x_admin_token: str = Header(...)):
    if x_admin_token != settings.ADMIN_TOKEN:
        raise HTTPException(status_code=403, detail="Forbidden")
