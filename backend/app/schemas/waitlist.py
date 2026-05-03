from pydantic import BaseModel, EmailStr


class WaitlistCreate(BaseModel):
    email: EmailStr


class WaitlistResponse(BaseModel):
    id: int
    email: str

    class Config:
        from_attributes = True
