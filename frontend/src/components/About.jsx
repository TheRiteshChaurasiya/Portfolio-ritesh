import React from 'react';
import { Badge } from './ui/badge';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal } = portfolioData;
  const { colors } = useTheme();

  return (
    <section id="about" className="py-20 lg:py-32" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-4">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi" 
                style={{ color: colors.textPrimary }}
              >
                About Me
              </h2>
              <div 
                className="w-20 h-1 rounded-full" 
                style={{ background: colors.gradient }}
              ></div>
            </div>

            <div className="space-y-6">
              <p 
                className="text-lg font-inter leading-relaxed" 
                style={{ color: colors.textSecondary }}
              >
                {personal.bio}
              </p>
              
              <p 
                className="text-lg font-inter leading-relaxed" 
                style={{ color: colors.textSecondary }}
              >
                My approach combines user research, creative problem-solving, and strategic thinking to create designs that not only look beautiful but also solve real user problems and drive business success.
              </p>

              <p 
                className="text-lg font-inter leading-relaxed" 
                style={{ color: colors.textSecondary }}
              >
                When I'm not designing, you can find me exploring new design trends, mentoring aspiring designers, or experimenting with new prototyping tools.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 
                className="text-xl font-semibold font-satoshi" 
                style={{ color: colors.textPrimary }}
              >
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="font-inter text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: colors.accentLight, 
                      color: colors.accent,
                      border: `1px solid ${colors.accentBorder}`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fadeInRight">
            <div 
              className="relative rounded-2xl p-8 lg:p-12" 
              style={{ 
                background: `linear-gradient(135deg, ${colors.accentLight} 0%, ${colors.accentLight}80 100%)` 
              }}
            >
              {/* Decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20" 
                style={{ backgroundColor: colors.accent }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10" 
                style={{ backgroundColor: colors.accentSecondary }}
              ></div>
              
              {/* Profile placeholder */}
              <div 
                className="relative z-10 rounded-xl p-8" 
                style={{ 
                  backgroundColor: colors.card,
                  boxShadow: colors.shadowLg 
                }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" 
                      style={{ backgroundColor: colors.accentLight }}
                    >
                      <span 
                        className="text-2xl font-bold font-satoshi" 
                        style={{ color: colors.accent }}
                      >
                        RC
                      </span>
                    </div>
                    <p 
                      className="text-sm font-inter" 
                      style={{ color: colors.textMuted }}
                    >
                      Profile Photo
                    </p>
                  </div>
                </div>
                
                {/* Stats */}
                <div 
                  className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t" 
                  style={{ borderColor: colors.border }}
                >
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold font-satoshi" 
                      style={{ color: colors.accent }}
                    >
                      5+
                    </div>
                    <div 
                      className="text-sm font-inter" 
                      style={{ color: colors.textMuted }}
                    >
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold font-satoshi" 
                      style={{ color: colors.accent }}
                    >
                      50+
                    </div>
                    <div 
                      className="text-sm font-inter" 
                      style={{ color: colors.textMuted }}
                    >
                      Projects Done
                    </div>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold font-satoshi" 
                      style={{ color: colors.accent }}
                    >
                      30+
                    </div>
                    <div 
                      className="text-sm font-inter" 
                      style={{ color: colors.textMuted }}
                    >
                      Happy Clients
                    </div>
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