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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Available for new projects
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                {personal.name}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {personal.tagline}
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              I transform complex problems into intuitive, beautiful, and accessible design solutions that users love.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={scrollToProjects}
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3 text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-medium transition-all duration-200"
            >
              Let's Talk
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-purple-300 rounded-full mx-auto">
                <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;