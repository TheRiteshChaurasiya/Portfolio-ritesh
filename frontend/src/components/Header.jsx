import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Mock resume download functionality
    alert('Resume download would start here!');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b' : ''
      }`} 
      style={{ 
        backgroundColor: isScrolled ? `${colors.background}90` : 'transparent',
        borderColor: isScrolled ? colors.borderLight : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-bold font-satoshi transition-all duration-200 hover:scale-105"
              style={{ color: colors.textPrimary }}
            >
              Ritesh
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-inter font-medium transition-all duration-200 hover:scale-105"
              style={{ color: colors.textSecondary }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-inter font-medium transition-all duration-200 hover:scale-105"
              style={{ color: colors.textSecondary }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-inter font-medium transition-all duration-200 hover:scale-105"
              style={{ color: colors.textSecondary }}
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className="font-inter font-medium px-6 py-2 transition-all duration-200 transform hover:scale-105"
              style={{ 
                backgroundColor: colors.accentLight, 
                color: colors.accent,
                border: `1px solid ${colors.accentBorder}`
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </nav>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-all duration-200 hover:scale-110"
              style={{ color: colors.textSecondary }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 border-b shadow-lg animate-slideInUp" 
            style={{ 
              backgroundColor: colors.background,
              borderColor: colors.borderLight
            }}
          >
            <nav className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 font-inter font-medium transition-colors duration-200"
                style={{ color: colors.textSecondary }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-2 font-inter font-medium transition-colors duration-200"
                style={{ color: colors.textSecondary }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 font-inter font-medium transition-colors duration-200"
                style={{ color: colors.textSecondary }}
              >
                Contact
              </button>
              <Button
                onClick={handleDownloadResume}
                className="w-full font-inter font-medium mt-4 transition-all duration-200"
                style={{ 
                  backgroundColor: colors.accentLight, 
                  color: colors.accent,
                  border: `1px solid ${colors.accentBorder}`
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;