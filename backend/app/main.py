from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import waitlist, contact
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Sapientia API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://panfeeling.pro", "https://www.panfeeling.pro"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(waitlist.router, prefix="/api/waitlist", tags=["Waitlist"])
app.include_router(contact.router,  prefix="/api/contact",  tags=["Contact"])


@app.get("/")
def root():
    return {"status": "ok", "service": "Sapientia API"}
