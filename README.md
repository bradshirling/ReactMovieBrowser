React Movie Browser
A modern web application for browsing, searching, and favoriting movies using The Movie Database (TMDb) API. Built with React 19, React Router, and Vite for fast development and smooth user experience.

Features:
Browse Popular Movies: View a list of trending/popular movies fetched from TMDb.
Search Movies: Search for movies by title using the TMDb search API.
Favorites: Add or remove movies from your personal favorites list (stored in app state).
Responsive UI: Clean and modern interface, optimized for desktop and mobile.
Navigation: Seamless navigation between Home and Favorites using React Router.

Getting Started:
Prerequisites
Node.js (v18+ recommended)
npm (comes with Node.js)

Installation:
Clone the repository:
git clone https://github.com/yourusername/ReactMovieBrowser.git
cd ReactMovieBrowser/frontend

Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser:
Visit http://localhost:5173 (or the port shown in your terminal).

Build for Production:
npm run build
Preview Production Build:
npm run preview

API Usage:
This app uses the TMDb API for movie data. The API key is currently hardcoded in 
src/services/api.js for demonstration purposes:
Note: For production, move your API key to environment variables and do not expose it in frontend code.

Scripts:
npm run dev – Start the development server
npm run build – Build for production
npm run preview – Preview the production build
npm run lint – Run ESLint

Dependencies:
React ^19.1.0
React DOM ^19.1.0
React Router DOM ^7.6.2
Vite ^6.3.5
ESLint (for linting)
Customization

API Key: Replace the API key in src/services/api.js with your own TMDb key.

Styling: Edit or extend the CSS in src/css/ to customize the look and feel.

Features: Add more pages or features as desired (e.g., detailed movie pages, user authentication, etc.)

This project is for educational/demo purposes. If you use TMDb data, please comply with their terms of use.
