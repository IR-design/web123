import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

interface DarkModeToggleProps {
  isScrolled?: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isScrolled = false }) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
        isScrolled 
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' 
          : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;