# Sapientia App

DTC Index AI Marketing Platform — 全栈 Web 应用

## 技术栈

- **前端**：React 18 + Vite 5 + TypeScript + React Router 7
- **后端**：Python FastAPI + SQLAlchemy + PostgreSQL
- **部署**：Nginx + 阿里云服务器

## 本地开发

### 前端
```bash
cd frontend
npm install
npm run dev
# 访问 http://localhost:5173
```

### 后端
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # 填入真实配置
uvicorn app.main:app --reload
# API 运行在 http://localhost:8000
```

## 部署到生产

```bash
bash scripts/deploy.sh
```

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 首页 |
| `/pricing` | 定价 |
| `/products/tiktok` | TikTok 产品 |
| `/products/amazon` | Amazon 产品 |
| `/features/whitebox-ai` | WhiteBoxAI 功能 |
| `/features/unified-dashboard` | 统一仪表盘 |
| `/features/intelligence-hub` | Intelligence Hub |
| `/resources` | 资源中心 |
| `/about` | 关于我们 |
| `/auth` | 登录/注册 |

## 环境变量

参考 `backend/.env.example` 配置后端环境变量。

## 回滚

```bash
bash scripts/rollback.sh
```
