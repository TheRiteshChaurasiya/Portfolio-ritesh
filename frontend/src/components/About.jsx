import React from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {personal.bio}
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines user research, creative problem-solving, and strategic thinking to create designs that not only look beautiful but also solve real user problems and drive business success.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not designing, you can find me exploring new design trends, mentoring aspiring designers, or experimenting with new prototyping tools.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm font-medium transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-10"></div>
              
              {/* Profile placeholder */}
              <div className="relative z-10 bg-white rounded-xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">RC</span>
                    </div>
                    <p className="text-gray-500 text-sm">Profile Photo</p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-500">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">30+</div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;