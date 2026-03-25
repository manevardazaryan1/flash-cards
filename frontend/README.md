<h1 id='top'>Flash Cards - Frontend (PWA)</h1>

A high-performance, accessible, and "flashy" learning platform built with React and Vite. This application features 3D interactive cards, persistent study progress, and full offline support as a Progressive Web App.

## Key Features

* **Interactive Flashcards:** 3D flip animations with smooth CSS transitions and perspective effects.
* **Progressive Web App (PWA):** Installable on iOS/Android with offline support and local caching.
* **Accessible by Design:** Full ARIA support (aria-live, aria-atomic, role="dialog") and keyboard-friendly navigation.
* **Persistent State:** Integrated with Redux Persist to save your learning progress even after closing the browser.
* **Custom Pagination:** Smooth navigation through large decks with real-time "Card X of Y" updates.
* **Global Notifications:** Configuration-driven toast messages for errors and success states.

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core** | **React 18 + Vite** |
| **State Management** | **Redux Toolkit (RTK) + Redux Persist** | 
| **Styling** | **Tailwind CSS (utility-first, responsive design)** |
| **API Client** | **Axios** |
| **Quality Control** | **ESLint + Prettier** |

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/manevardazaryan1/flash-cards.git
cd frontend
```

#### Create a .env file in the root directory:
```bash
VITE_API_URL=http://localhost:3000/api/v1
```

### Run the server
```bash
# Development (with nodemon if installed)
npm run dev

# Production
npm start
```

### Development Commands
```bash
# Starts the Vite development server (usually at localhost:5173).
npm run dev

# Generates a production-ready PWA bundle in the /dist folder.
npm run build

# Checks the whole app for unused variables and logic errors.
npm run lint

# Runs Prettier to fix tabs and remove semicolons project-wide.
npm run format

# Previews the production build locally.
npm run preview
```

## Accessibility (a11y) Standards

* **Focus Management:** Modals trap focus and return it correctly upon closing.
* **Live Regions:** aria-live="polite" is used for pagination and card updates so screen readers announce changes.
* **Semantic HTML:** Usage of semantic tags instead of generic div tags for better screen reader navigation.


## Project Structure

├── src/assets/
├── src/components/
├── src/config/
├── src/constants/
├── src/context/
├── src/features/
├── src/hooks/
├── src/pages/
├── src/redux/
├── src/services/
├── src/api.js
└── index.html


[Tap to Top ⬆](#top)