
🎬 MovieFlix - Full Stack Movie Streaming Platform


A full-stack web application built with React.js and Spring Boot, allowing users to browse and manage movies fetched from a real-time API.

Features:

✅ Movie Catalog – Fetches real-time movie data from the backend API
✅ Search & Filters – Allows users to search movies and filter by category, genre, or rating
✅ Watchlist Management – Users can save and manage favorite movies
✅ Responsive UI – Built with React.js and Bootstrap for an intuitive experience
✅ Backend API – Developed with Spring Boot, MySQL, and RESTful endpoints

Project Structure:
📂 Backend (Spring Boot)

Controller: Handles API requests for movies, users, and authentication
Service Layer: Implements business logic for movie management
DAO Layer: Uses Spring Data JPA for database operations
Entity & DTO: Defines movie, user, and category structures
Exception Handling: Global exception handling using @ControllerAdvice
📂 Frontend (React.js)

Axios Integration: Fetches movie data from the backend API
React Components: Displays movies, categories, and details dynamically
State Management: Uses useState and useEffect hooks
