# AI Interview Assistant - Backend
Radhe Radhe,I am Pranita Aeer
Backend API for AI-powered interview preparation platform.

## 🚀 Features
- User authentication (JWT)
- Resume upload and analysis
- AI-generated interview questions (Google Gemini API)
- Resume scoring system
- Weekly roadmap generation
- MongoDB database

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for auth
- Google Gemini API

## 📦 Installation

1. Clone the repo
```bash
git clone <your-repo-url>
cd backend
npm install

##🚀 Run Project

npm run dev
Server will start at:http://localhost:3000

## ⚙️ Environment Variables (.env)
PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_api_key

## 📁 Folder Structure
backend/
├── src/
│   ├── models/        # Database models
│   ├── controllers/   # Business logic
│   ├── routes/        # API routes
│   ├── services/      # AI service (Gemini integration)
│   ├── middleware/    # Auth middleware
│   ├── config/        # DB & API config
│   └── app.js         # Entry point
├── .env
└── package.json

## 📝 Notes

Make sure MongoDB is running
Get API key from Google AI Studio    