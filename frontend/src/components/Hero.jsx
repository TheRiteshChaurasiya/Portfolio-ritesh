import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAFAF9' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full animate-fadeIn animate-delay-200" style={{ backgroundColor: '#CBA6F7', backgroundColor: 'rgba(203, 166, 247, 0.1)', color: '#CBA6F7' }}>
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter">Available for new projects</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi leading-tight animate-fadeInUp animate-delay-400" style={{ color: '#111111' }}>
              Hi, I'm{' '}
              <span className="gradient-text">
                {personal.name}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-inter font-medium animate-fadeInUp animate-delay-600" style={{ color: '#6B7280' }}>
              {personal.tagline}
            </p>

            <p className="text-lg font-inter animate-fadeInUp animate-delay-800" style={{ color: '#9CA3AF' }}>
              I transform complex problems into intuitive, beautiful, and accessible design solutions that users love.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeInUp animate-delay-800">
            <Button
              onClick={scrollToProjects}
              className="font-inter font-medium px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#CBA6F7', color: 'white' }}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="font-inter font-medium px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: '#CBA6F7', color: '#CBA6F7' }}
            >
              Let's Talk
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fadeIn animate-delay-800">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 rounded-full mx-auto" style={{ borderColor: '#CBA6F7' }}>
                <div className="w-1 h-3 rounded-full mx-auto mt-2 animate-pulse" style={{ backgroundColor: '#CBA6F7' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;