# 💻 PC STORE – Computer Components E-commerce Website

PC Store is an e-commerce web application designed for selling computer components and electronic devices. The system provides customers with an online shopping experience while allowing administrators to manage products, users, and orders through an administration interface.

The project focuses on building a functional e-commerce system with a clear separation between frontend and backend.

## 🚀 Technologies Used

### Backend
- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend web framework for building RESTful APIs.
- **TypeScript** – Static typing for more maintainable code.
- **RESTful API** – Communication between frontend and backend.
- **Middleware** – Request processing and access control.

### Database
- **MySQL / MariaDB** – Relational database management.
- **SQL** – Data querying and manipulation.

### Frontend
- **React.js** – Building user interfaces.
- **Vite** – Frontend development and build tool.
- **React Router** – Client-side routing.
- **SCSS Modules** – Component-level styling.

### Development Tools
- Git & GitHub
- Visual Studio Code
- Postman
- XAMPP / phpMyAdmin

## ✨ Main Features

### Customer
- User registration and login.
- Browse and search computer products.
- View product details.
- Add products to shopping cart.
- Manage shopping cart.
- Place orders.
- Manage personal account information.

### Administrator
- Admin dashboard.
- Manage products.
- Manage product categories.
- Manage user accounts.
- Manage customer orders.
- Control access based on user roles.

## 🏗️ System Architecture

The application follows a client-server architecture:

```text
              CLIENT
                |
                v
        React.js + Vite
                |
                | HTTP Requests
                v
              SERVER
                |
                v
       Node.js + Express.js
                |
          RESTful APIs
                |
                v
           Middleware
                |
                v
          MySQL Database
```

The frontend communicates with the backend through RESTful APIs. The backend processes requests, applies business logic, interacts with the database, and returns responses to the client.

## 📁 Project Structure

```text
PC-STORE/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd PC-STORE
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure the environment variables in your `.env` file according to the backend configuration.

Example:

```env
PORT=5000
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_NAME=pc_store
```

Import the project's SQL database into MySQL/MariaDB using phpMyAdmin.

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## 🔐 Authentication & Authorization

The system supports different user roles:

- **User:** Access shopping and personal account features.
- **Admin:** Access administrative functions and manage system data.

Middleware is used to process incoming requests and control access to protected resources based on user permissions.

## 🎯 Project Objectives

- Apply backend development knowledge to a practical e-commerce application.
- Build RESTful APIs for frontend-backend communication.
- Practice relational database design and SQL operations.
- Understand middleware and role-based access control.
- Gain experience in collaborative software development.

## 👨‍💻 Contributors

This project was developed as part of a university software analysis and design project.

## 📌 Project Status

**Status:** In Development

More features and improvements may be added in future versions.
