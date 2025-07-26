import React from 'react';
import { Heart, Mail, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const { colors } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: personal.socialLinks.linkedin, label: 'LinkedIn', color: '#0077B5' },
    { icon: Instagram, href: personal.socialLinks.instagram, label: 'Instagram', color: '#E4405F' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: colors.accent }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t py-12" 
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.borderLight 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 
              className="text-2xl font-bold font-satoshi" 
              style={{ color: colors.textPrimary }}
            >
              Ritesh Chaurasiya
            </h3>
            <p 
              className="font-inter max-w-md" 
              style={{ color: colors.textSecondary }}
            >
              Creative UI/UX Designer crafting seamless digital experiences that users love. Available for projects and collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  style={{ 
                    backgroundColor: colors.accentLight,
                    boxShadow: colors.shadow
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-semibold font-satoshi" 
              style={{ color: colors.textPrimary }}
            >
              Quick Links
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: colors.textSecondary }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: colors.textSecondary }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: colors.textSecondary }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: colors.textSecondary }}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-semibold font-satoshi" 
              style={{ color: colors.textPrimary }}
            >
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p 
                className="font-inter text-sm" 
                style={{ color: colors.textSecondary }}
              >
                Ready to work together?
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="block font-inter text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: colors.accent }}
              >
                {personal.email}
              </a>
              <p 
                className="font-inter text-sm" 
                style={{ color: colors.textMuted }}
              >
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" 
          style={{ borderColor: colors.borderLight }}
        >
          <p 
            className="font-inter text-sm" 
            style={{ color: colors.textMuted }}
          >
            © {currentYear} Ritesh Chaurasiya. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p 
              className="font-inter text-sm flex items-center" 
              style={{ color: colors.textMuted }}
            >
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in Mumbai
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              style={{ 
                backgroundColor: colors.accentLight,
                boxShadow: colors.shadow
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" style={{ color: colors.accent }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;