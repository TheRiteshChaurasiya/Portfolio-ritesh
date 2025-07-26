import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
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

  const handleDownloadResume = () => {
    alert('Resume download would start here!');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#FAFAF9' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, #CBA6F7 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #CBA6F7 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full animate-fadeIn animate-delay-200 border" style={{ backgroundColor: 'rgba(203, 166, 247, 0.08)', borderColor: 'rgba(203, 166, 247, 0.2)', color: '#CBA6F7' }}>
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
            
            {/* Strong tagline */}
            <div className="space-y-4 animate-fadeInUp animate-delay-600">
              <p className="text-xl sm:text-2xl font-inter font-medium" style={{ color: '#6B7280' }}>
                {personal.tagline}
              </p>
              <p className="text-lg font-inter max-w-2xl mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
                I transform complex problems into intuitive, beautiful, and accessible design solutions that users love and businesses value.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeInUp animate-delay-800">
            <Button
              onClick={scrollToProjects}
              className="font-inter font-medium px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#CBA6F7', color: 'white' }}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="font-inter font-medium px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ borderColor: '#CBA6F7', color: '#CBA6F7', backgroundColor: 'transparent' }}
            >
              Let's Connect
            </Button>

            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="font-inter font-medium px-6 py-3 text-base transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ borderColor: '#E5E7EB', color: '#6B7280', backgroundColor: 'transparent' }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fadeIn animate-delay-1000">
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