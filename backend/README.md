<h1 id='top'>Flashcards API (Backend)</h1>

A lightweight, robust Node.js backend for managing and serving flashcards. This API features dynamic CORS configuration, centralized error handling. Retrieves the full collection of flashcards. To ensure a fresh experience, the server automatically shuffles the order and attaches a random background color to each card before sending the response.

## Features
* **RESTful Routing:** Clean, versioned endpoints (/api/v1/cards).
* **Dynamic Color Attribution:** Automatically attaches a hex color code to each card on retrieval/creation.
* **Advanced CORS:** Custom origin validation using a callback-based whitelist.
* **Global Error Boundary:** Standardized JSON error responses.

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Runtime** | **Node.js** |
| **Framework** | **Express.js** | 
| **Middleware** | **cors, express.json(), dotenv** |
| **Linting** | **ESLint + Prettier** |

## Project Structure

├── config/
├── constants/
├── controllers/
├── helpers/
├── middleware/
├── models/
├── routes/
├── utils/
└── index.js

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/v1/cards | Retrieve all cards. Automatically shuffles the order and attaches a random background color

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/manevardazaryan1/flash-cards.git
cd backend
```
### Install dependencies
```bash
npm install
```

#### Create a .env file in the root directory:
```bash
PORT=3000
FRONTEND_URL=http://localhost:5173
```
### Run the server
```bash
# Development (with nodemon if installed)
npm run dev

# Production
npm start
```

[Tap to Top ⬆](#top)