import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Vérifie la préférence système ou le localStorage
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'));
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 transition-all duration-300"
      aria-label={darkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;