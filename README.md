
# 🎟️ Ticketing System – Spring Boot & React

## 🚀 Introduction

This project is a **Ticketing System** designed for efficient management of ticket allocation and user interactions. It consists of a **backend built with Spring Boot** and a **frontend developed using React**.

The system provides endpoints for:
- Ticket distribution
- User authentication (sign-up and login)
- Monitoring the ticket pool status

The user interface offers intuitive controls to start/stop the system and displays real-time updates on the ticket pool.

---

## ⚙️ Setup Instructions

### 🔗 Prerequisites

Ensure the following software is installed:

- **Java** – Version 17 or higher  
- **Maven** – Latest version  
- **Node.js** – Version 16 or higher  
- **npm** – Comes with Node.js  
- **Database** – MySQL 8.0 or higher  

---

### 🔥 Backend Setup

1. **Clone the Repository:**
```bash
git clone <repository_url>
cd <repository_folder>/backend
```

2. **Configure MySQL Database:**
- Create a database named `ticketing_system`.
- Update `application.properties` in `src/main/resources`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ticketing_system
spring.datasource.username=<your_username>
spring.datasource.password=<your_password>
```

3. **Build the Backend:**
```bash
mvn clean install
```

4. **Run the Backend:**
```bash
mvn spring-boot:run
```

---

### 🎨 Frontend Setup

1. **Navigate to the Frontend Directory:**
```bash
cd <repository_folder>/frontend
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Run the Frontend Application:**
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

---

## 🚦 Usage Instructions

### ✅ How to Configure and Start the System

- Start the backend server.  
- Start the frontend.  
- Open the UI in your browser.  
- You can also test API endpoints (if needed) like:
  - `POST /api/tickets/start` → Start Ticketing System
  - `POST /api/tickets/stop` → Stop Ticketing System
  - `GET /api/tickets/status` → Get Ticket Status

---

### 🎛️ UI Controls Explanation

- **Start System:**  
  Enter parameters like total tickets, release rate, customer retrieval rate, and maximum capacity. Click **Start**.

- **Stop System:**  
  Click **Stop** to halt the ticketing system.

- **View Status:**  
  Shows real-time ticket count and system status.

- **User Login/Sign-up:**  
  - **Sign-Up:** New users can register with username, password, and role.  
  - **Login:** Existing users log in with their credentials.

---

## 📜 Available Scripts (Frontend)

Inside the `frontend` directory, you can run:

### npm start  
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🏠 Homepage Features

- Overview of the ticketing system  
- Navigation to start/stop system  
- Ticket status display  

---

## 🔑 User Authentication

- **Sign-Up Page:**  
  Create an account with username, password, and role.

- **Login Page:**  
  Login for existing users with validation and error handling.

---

## 🎯 System Control Panel

Configure parameters:
- Total Tickets  
- Ticket Release Rate  
- Customer Retrieval Rate  
- Maximum Capacity  

Includes **Start** and **Stop** buttons.

---

## 📊 Status Dashboard

- Displays live ticket availability  
- Shows system status (**Running/Stopped**)
