import React from 'react';
import { Heart, Mail, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: personal.socialLinks.linkedin, label: 'LinkedIn', color: '#0077B5' },
    { icon: Instagram, href: personal.socialLinks.instagram, label: 'Instagram', color: '#E4405F' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: '#CBA6F7' }
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
    <footer className="bg-white border-t py-12" style={{ borderColor: 'rgba(203, 166, 247, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold font-satoshi" style={{ color: '#111111' }}>
              Ritesh Chaurasiya
            </h3>
            <p className="font-inter max-w-md" style={{ color: '#6B7280' }}>
              Creative UI/UX Designer crafting seamless digital experiences that users love. Available for projects and collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg contact-icon"
                  style={{ backgroundColor: 'rgba(203, 166, 247, 0.1)' }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-satoshi" style={{ color: '#111111' }}>
              Quick Links
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: '#6B7280' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: '#6B7280' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: '#6B7280' }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block font-inter text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: '#6B7280' }}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-satoshi" style={{ color: '#111111' }}>
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="font-inter text-sm" style={{ color: '#6B7280' }}>
                Ready to work together?
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="block font-inter text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#CBA6F7' }}
              >
                {personal.email}
              </a>
              <p className="font-inter text-sm" style={{ color: '#9CA3AF' }}>
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: 'rgba(203, 166, 247, 0.1)' }}>
          <p className="font-inter text-sm" style={{ color: '#9CA3AF' }}>
            © {currentYear} Ritesh Chaurasiya. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="font-inter text-sm flex items-center" style={{ color: '#9CA3AF' }}>
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in Mumbai
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 contact-icon"
              style={{ backgroundColor: 'rgba(203, 166, 247, 0.1)' }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" style={{ color: '#CBA6F7' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;