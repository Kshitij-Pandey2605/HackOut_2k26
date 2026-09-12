# CarbonSphere Backend

> AI-Powered Circular Carbon Exchange Ecosystem

## Tech Stack
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database & Auth**: Supabase (PostgreSQL + Auth + RLS)
- **Security**: Helmet, CORS, JWT
- **Validation**: Zod
- **External Integrations (Future Scope)**: Cloudinary, Google Maps API

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```
Fill in your Supabase credentials and JWT secrets in `.env`.

### 3. Run in Development Mode
```bash
npm run dev
```

### 4. Health Check
Visit `http://localhost:5000/api/v1/health`
