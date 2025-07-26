import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    colors: {
      // Background colors
      background: isDarkMode ? '#0F0F0F' : '#FFFFFF',
      backgroundSecondary: isDarkMode ? '#0F0F0F' : '#F5F9FC',
      card: isDarkMode ? '#1A1A1A' : '#FFFFFF',
      cardSecondary: isDarkMode ? '#1A1A1A' : '#F5F9FC',
      
      // Text colors
      textPrimary: isDarkMode ? '#FAFAFA' : '#111111',
      textSecondary: isDarkMode ? '#A1A1AA' : '#6B7280',
      textMuted: isDarkMode ? '#A1A1AA' : '#9CA3AF',
      
      // Accent colors
      accent: '#0096C7',
      accentSecondary: '#00B4D8',
      accentLight: isDarkMode ? 'rgba(0, 150, 199, 0.1)' : 'rgba(0, 150, 199, 0.1)',
      accentBorder: isDarkMode ? 'rgba(0, 150, 199, 0.3)' : 'rgba(0, 150, 199, 0.2)',
      
      // Border and divider colors
      border: isDarkMode ? '#333333' : '#E5E7EB',
      borderLight: isDarkMode ? '#2A2A2A' : 'rgba(0, 150, 199, 0.1)',
      
      // Status colors
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      
      // Gradient
      gradient: isDarkMode 
        ? 'linear-gradient(135deg, #0096C7 0%, #00B4D8 100%)'
        : 'linear-gradient(135deg, #0096C7 0%, #00B4D8 100%)',
      
      // Shadows
      shadow: isDarkMode 
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      shadowLg: isDarkMode
        ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      shadowXl: isDarkMode
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
        : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        
      // Hover effects
      hoverBg: isDarkMode ? '#2A2A2A' : '#F9FAFB',
      hoverAccent: isDarkMode ? 'rgba(0, 150, 199, 0.2)' : 'rgba(0, 150, 199, 0.1)',
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};