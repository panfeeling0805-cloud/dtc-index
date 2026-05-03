from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://user:password@localhost/sapientia"
    SECRET_KEY: str = "change-me-in-production"
    DEBUG: bool = True

    class Config:
        env_file = ".env"


settings = Settings()
