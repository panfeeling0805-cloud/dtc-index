from typing import List
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.waitlist import Waitlist
from app.schemas.waitlist import WaitlistCreate, WaitlistResponse

router = APIRouter()


@router.post("", response_model=WaitlistResponse, status_code=201)
def join_waitlist(data: WaitlistCreate, db: Session = Depends(get_db)):
    existing = db.query(Waitlist).filter(Waitlist.email == data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    entry = Waitlist(email=data.email)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


@router.get("", response_model=List[WaitlistResponse])
def list_waitlist(db: Session = Depends(get_db)):
    return db.query(Waitlist).all()
