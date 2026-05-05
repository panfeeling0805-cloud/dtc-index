from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://user:password@localhost/sapientia"
    SECRET_KEY: str = "change-me-in-production"
    DEBUG: bool = True
    ADMIN_TOKEN: str = "change-me-admin-token"

    class Config:
        env_file = ".env"


settings = Settings()
