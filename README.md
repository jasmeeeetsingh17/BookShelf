# 📚 Enhanced BookShelf App

A comprehensive full-stack web application for managing your personal book collection with advanced features like user authentication, reviews, ratings, image uploads, and more.

## 🌟 Features

### Core Features
- **User Authentication & Authorization** - Register, login, logout with secure sessions
- **CRUD Operations** - Create, read, update, delete books
- **Image Upload** - Upload book covers with Cloudinary integration
- **Reviews & Ratings** - Users can review and rate books (1-5 stars)
- **Search & Filter** - Search by title/author/genre, filter by genre/rating
- **Pagination** - Efficient browsing with pagination support
- **Responsive Design** - Mobile-friendly Bootstrap UI

### Advanced Features
- **User Profiles** - View user profiles and their book collections
- **Wishlist** - Save books to read later
- **Reading Status** - Track reading progress (Want to Read, Currently Reading, Read)
- **Book Recommendations** - Similar books suggestions
- **Security Features** - Rate limiting, helmet.js, input validation
- **Performance** - Compression, caching, optimized queries
- **Error Handling** - Custom error pages and middleware

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Frontend
- **EJS** - Template engine
- **ejs-mate** - Layout support
- **Bootstrap 5** - CSS framework
- **JavaScript** - Client-side interactivity

### Cloud Services
- **Cloudinary** - Image storage and optimization
- **MongoDB Atlas** - Cloud database (optional)

### Security & Performance
- **Helmet.js** - Security headers
- **express-rate-limit** - Rate limiting
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **connect-mongo** - Session store
- **compression** - Response compression

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/bookshelf-app.git
cd bookshelf-app
```

### 2. Install Dependencies
```bash
npm install
```
