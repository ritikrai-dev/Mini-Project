<p align="center">
  <img src="logo1.png" width="120" alt="ExpenseX Logo" />
</p>

<h1 align="center">💰 ExpenseX</h1>

<p align="center">
AI Powered Expense Management System
</p>

<p align="center">
React • Node.js • Express • MongoDB • AI • JWT
</p>
<p align="center">
<img src="https://img.shields.io/badge/React-19-blue?logo=react"/>
<img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js"/>
<img src="https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb"/>
<img src="https://img.shields.io/badge/JWT-Authentication-orange"/>
<img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel"/>
<img src="https://img.shields.io/badge/Render-Backend-blue"/>
<img src="https://img.shields.io/badge/License-MIT-success"/>
</p>

# 💰 ExpenseX

ExpenseX is a modern AI-powered Expense Management System built with the MERN Stack.

It helps users securely manage their finances, analyze spending patterns, generate reports, and receive AI-powered financial insights.

Designed with a modern UI, responsive layout, and scalable backend architecture, ExpenseX demonstrates production-ready full-stack development practices.

## 🌐 Live Demo

<p align="center">
<a href="https://mini-project-rouge-gamma.vercel.app">
<img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge"/>
</a>
</p>


## Features
🔐 JWT Authentication

💸 Expense Tracking

📈 Analytics

🤖 AI Insights

📄 Report Export

📱 Fully Responsive

👤 User Profile

🔒 Change Password

## Tech Stack

| Frontend | Backend | Database    | Deployment |
| -------- | ------- | ----------- | ---------- |
| React    | Node.js | MongoDB     | Vercel     |
| Vite     | Express | Mongoose    | Render     |
| CSS      | JWT     | Mongo Atlas | GitHub     |

## Architecture Diagram

```text
                User
                  │
        React + Vite Frontend
                  │
            REST API Requests
                  │
          Express + Node.js
                  │
         JWT Authentication
                  │
           MongoDB Atlas
                  │
     AI Insights & Report Engine
```

## 📁 Folder Structure

```text
ExpenseX
│
├── frontend
│   ├── public
│   │   ├── logo.jpg
│   │   ├── logo1.png
│   │   └── index.css
│   │
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── style
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

## Screenshots

### Dashboard

<img src="./screenshots/dashboard.png"/>

### Analytics

<img src="./screenshots/analytics.png"/>

...

Transactions

[Image]

Analytics

[Image]

AI Insights

[Image]

Reports

[Image]

Settings

[Image]

Mobile View

[Image]


## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ritikrai-dev/ExpenseX.git

cd ExpenseX
```

---

### 2️⃣ Install Frontend Dependencies

```bash
cd frontend

npm install

npm run dev
```

---

### 3️⃣ Install Backend Dependencies

```bash
cd backend

npm install

npm start
```

---

### 4️⃣ Environment Variables

Create a `.env` file inside both the **frontend** and **backend** folders.

#### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

#### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

### 5️⃣ Open the Application

Frontend

```text
http://localhost:5173
```

Backend

```text
http://localhost:5000
```

# 📚 API Documentation

## 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

## 👤 User

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update user profile |
| PUT | `/api/users/change-password` | Change account password |

---

## 📊 Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Get dashboard summary |

---

## 💰 Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Create a new transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

---

## 📈 Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics/category` | Category-wise expense analytics |
| GET | `/api/analytics/monthly-expense` | Monthly expense analytics |

---

## 🤖 AI Insights

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/ai/insights` | Generate AI-powered financial insights |

---

## 📄 Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports/pdf` | Download PDF report |
| GET | `/api/reports/excel` | Download Excel report |
| GET | `/api/reports/csv` | Download CSV report |
| GET | `/api/reports/json` | Download JSON report |

---

# 🚀 Future Roadmap

- [x] User Authentication
- [x] JWT Authorization
- [x] Dashboard Overview
- [x] Transaction Management
- [x] Analytics Dashboard
- [x] AI Financial Insights
- [x] Report Export (PDF, Excel, CSV, JSON)
- [x] Responsive Design
- [x] User Profile Management
- [ ] Budget Planning
- [ ] Recurring Expenses
- [ ] Email Verification
- [ ] Forgot Password
- [ ] Notification System
- [ ] Dark Mode
- [ ] Multi-Currency Support
- [ ] Expense Goals
- [ ] Data Backup & Restore

---

# 🤝 Contributing

Contributions are welcome! 🚀

1. 🍴 Fork the repository
2. 🌿 Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. 💻 Commit your changes

```bash
git commit -m "Add Amazing Feature"
```

4. 🚀 Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. 🔥 Open a Pull Request

---

# 👨‍💻 Developer

**Ritik Rai**

🎓 B.Sc. Computer Science Student  
💻 Full Stack Developer | MERN Stack Developer | AI Enthusiast

### 🌐 Connect with Me

- 💼 **LinkedIn:** https://www.linkedin.com/in/ritikrai-dev
- 🐙 **GitHub:** https://github.com/ritikrai-dev
- 📧 **Email:** cs.ritikrai@gmail.com

---

⭐ **If you found this project useful, don't forget to give it a Star!** ⭐

## 📜 License

This project is licensed under the MIT License.