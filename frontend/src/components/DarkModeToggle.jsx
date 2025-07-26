import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      style={{
        backgroundColor: isDarkMode ? '#2A2A2A' : 'rgba(0, 150, 199, 0.1)',
        color: isDarkMode ? '#FAFAFA' : '#0096C7',
        border: `1px solid ${isDarkMode ? '#333333' : 'rgba(0, 150, 199, 0.2)'}`
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        {/* Sun Icon */}
        <Sun 
          className={`w-5 h-5 transition-all duration-300 transform ${
            isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
          style={{ 
            position: isDarkMode ? 'absolute' : 'relative',
            top: isDarkMode ? '50%' : 'auto',
            left: isDarkMode ? '50%' : 'auto',
            transform: isDarkMode ? 'translate(-50%, -50%)' : 'none'
          }}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`w-5 h-5 transition-all duration-300 transform ${
            isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
          style={{ 
            position: isDarkMode ? 'relative' : 'absolute',
            top: isDarkMode ? 'auto' : '50%',
            left: isDarkMode ? 'auto' : '50%',
            transform: isDarkMode ? 'none' : 'translate(-50%, -50%)'
          }}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;