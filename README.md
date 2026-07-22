# 🏠 StayFinder

StayFinder is a modern Full Stack PG (Paying Guest) listing and management platform that helps students discover suitable accommodations while enabling property owners to submit their PGs for approval. An integrated Admin Panel ensures that only verified listings are published, making the platform reliable, organized, and easy to manage.

---
## 🔗 Live Demo

🌐 **Website:** https://stay-finder-flame.vercel.app/

📂 **GitHub Repository:** https://github.com/ajay-02-06/StayFinder
---

## ✨ Features

### 👨‍🎓 Student
- Browse all available PGs
- View detailed PG information
- Search and filter listings
- Add or remove PGs from Wishlist
- Login & Signup using Firebase Authentication
- Submit new PG requests through the **Become a Host** feature

### 🏠 Property Owner
- Submit a PG listing request
- Provide complete property details including:
  - Title
  - Location
  - Price
  - Description
  - Amenities
  - Images
  - Coordinates
  - Availability
  - PG Type

### 👨‍💼 Admin
- Secure Admin Login
- Dashboard with live statistics
- Manage all PG listings
- Add, Edit and Delete PGs
- Review submitted PG requests
- Approve or Reject PG requests
- Analytics Dashboard with charts and insights
- Admin Profile Management
- Fully Responsive Admin Panel

---

# 🔄 Workflow

### Step 1 — User Authentication
Users create an account or log in securely using Firebase Authentication.

↓

### Step 2 — Become a Host
Property owners can submit a new PG request by filling in the required property details.

↓

### Step 3 — Request Verification
Every submitted request is stored separately and remains in **Pending** status.

↓

### Step 4 — Admin Review
The administrator reviews each request from the **PG Requests** section and can either:

- ✅ Approve the request
- ❌ Reject the request

↓

### Step 5 — Publish
Approved requests are automatically converted into live PG listings and become visible to all users on the platform.

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- React Icons
- React Toastify
- Leaflet Maps

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- Firebase Authentication

## Deployment
- Vercel (Frontend)
- Render / Local Express Server (Backend)

---

# 📊 Admin Panel

The Admin Panel provides complete control over the platform.

### Dashboard
- Total PGs
- Available PGs
- Occupied PGs
- Average Rating

### Analytics
- Availability Distribution
- PG Type Distribution
- Price Analysis
- Rating Analysis
- Business Insights

### PG Management
- Add PG
- Edit PG
- Delete PG

### Request Management
- View Host Requests
- Approve Requests
- Reject Requests

---

# 📁 Project Structure

```
StayFinder
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── README.md
```

---

# 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend

```bash
cd backend
npm install
npm start
```

---

# 📌 Future Improvements

- Image Upload using Cloudinary
- Email Notifications
- Advanced Search & Filters
- Reviews and Ratings
- Booking System
- Owner Dashboard
- Payment Integration

---

# 👨‍💻 Developed By

**Ajay Kumar**

StayFinder was developed as a Full Stack Web Application to simplify PG discovery while ensuring that every listing is verified through an administrator approval workflow.