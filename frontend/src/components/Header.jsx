import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-purple-400 transition-colors duration-200"
            >
              Ritesh
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 px-6 py-2 transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-2 text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-gray-700 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <Button
                onClick={handleDownloadResume}
                className="w-full bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mt-4 transition-all duration-200"
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