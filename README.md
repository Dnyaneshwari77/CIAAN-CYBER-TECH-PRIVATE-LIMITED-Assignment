# 🌐 Mini LinkedIn-like Community Platform


---

## 🧰 Tech Stack Used

### 🖥️ Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **MongoDB Atlas** – NoSQL cloud database
- **Mongoose** – ODM for MongoDB
- **JWT + bcrypt** – Authentication and password hashing
- **GridFS** – File storage
- **CORS + Cookie-parser** – Middleware for security and session handling
- **Render** – Hosting backend APIs

### 🌐 Frontend
- **React.js** – Frontend library for building UI
- **React Router DOM** – Client-side routing
- **Material UI (MUI)** – UI components
- **Axios** – API communication
- **Formik + Yup** – Form handling and validation
- **Netlify** – Hosting frontend

---

## 🛠️ Setup Instructions

### 🔧 Prerequisites
- Node.js (v18 or higher)
- Git
- MongoDB Atlas account

---

## 🚀 Backend Setup

1. **Clone the backend repository:**
   ```bash
   git clone https://github.com/Dnyaneshwari77/CIAAN-CYBER-TECH-PRIVATE-LIMITED-Assignment
   cd CIAAN-CYBER-TECH-PRIVATE-LIMITED-Assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in the root:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

5. Server will run locally at: `http://localhost:5000`

---

## 🌍 Frontend Setup

1. **Clone the frontend repository:**
   ```bash
   git clone https://github.com/Dnyaneshwari77/CIAAN-CYBER-TECH-PRIVATE-LIMITED-Assignment-Frontend
   cd CIAAN-CYBER-TECH-PRIVATE-LIMITED-Assignment-Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in the root:**
   ```env
   REACT_APP_BASE_URL=https://ciaan-cyber-tech-private-limited.onrender.com/api
   ```

4. **Run the React app:**
   ```bash
   npm start
   ```

5. React app runs at: `http://localhost:3000`

---

## 🌐 Deployed URLs

- **Frontend (Netlify):** https://elaborate-granita-ce5e1b.netlify.app  
- **Backend (Render):** https://ciaan-cyber-tech-private-limited.onrender.com

---

## 🧪 Sample Credentials

You can test the app using:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 📦 Features

- User registration and login with JWT
- Public user feed with shared posts
- Profile display with basic info
- Secure backend authentication
- Integrated form validation using Formik & Yup
- Backend CORS and cookie handling for cross-origin requests

---

## 📌 Notes

- Make sure CORS on backend allows Netlify origin:  
  ```js
  origin: ['https://elaborate-granita-ce5e1b.netlify.app'],
  credentials: true
  ```

- Build frontend before deploying to Netlify:
  ```bash
  npm run build
  ```

---

## 📄 License

This project is part of an internship assignment and is not for commercial use.
