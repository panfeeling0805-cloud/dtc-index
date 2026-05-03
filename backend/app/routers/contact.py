from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate

router = APIRouter()


@router.post("", status_code=201)
def send_message(data: ContactCreate, db: Session = Depends(get_db)):
    msg = ContactMessage(name=data.name, email=data.email, message=data.message)
    db.add(msg)
    db.commit()
    return {"success": True, "message": "Message received"}
