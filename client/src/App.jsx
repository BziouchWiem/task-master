import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Statistics from './pages/Statistics.jsx';
import DarkModeToggle from './components/DarkModeToggle';
import { FaTasks } from 'react-icons/fa';
import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                TaskMaster
              </span>
            </div>
            <div className="flex items-center gap-6">
            <ul className="flex space-x-8 text-lg font-medium">
  <li>
    <Link
      to="/"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Accueil
    </Link>
  </li>
  <li>
    <Link
      to="/statistics"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Statistiques
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      À propos
    </Link>
  </li>
</ul>
              <DarkModeToggle />
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-6 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} TaskMaster - Gestionnaire de tâches</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;