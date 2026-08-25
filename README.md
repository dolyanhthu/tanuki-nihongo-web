# Tanuki Nihongo Web

Full-stack Japanese language learning web application built with **React** (TypeScript + Vite) frontend and **Java Spring Boot** backend.

---

## 📁 Repository Structure

```
tanuki-nihongo-web/
├── backend/          # Java Spring Boot REST API
└── frontend/         # React + Vite + TypeScript Single Page Application
```

---

## 🚀 Getting Started

### 1. Running the Backend (Java Spring Boot)

Ensure you have **Java 17+** and **Maven** installed.

```bash
cd backend
mvn spring-boot:run
```

The backend API server will start at `http://localhost:8080`.
- Health Check Endpoint: `http://localhost:8080/api/health`

### 2. Running the Frontend (React + Vite)

Ensure you have **Node.js (v18+)** installed.

```bash
cd frontend
npm install
npm run dev
```

The React frontend server will start at `http://localhost:5173`.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Axios
- **Backend:** Java 17+, Spring Boot, Spring Web, Spring Data JPA
- **Database:** H2 (In-memory for development) / PostgreSQL
