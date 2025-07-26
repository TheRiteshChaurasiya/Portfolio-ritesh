import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight, Clock, User, Eye } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { caseStudies } = portfolioData;
  const [hoveredProject, setHoveredProject] = useState(null);

  // Show only first 3 case studies
  const featuredProjects = caseStudies.slice(0, 3);

  const handleProjectClick = (projectId) => {
    alert(`Case study for project ${projectId} would open here!`);
  };

  return (
    <section id="projects" className="py-20 lg:py-32" style={{ backgroundColor: '#F5F9FC' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-20 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi" style={{ color: '#111111' }}>
            Featured Work
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, #0096C7 0%, #00B4D8 100%)' }}></div>
          <p className="text-lg font-inter max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Selected projects that showcase my approach to solving complex design challenges
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-fadeInUp animate-delay-${200 + index * 200}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
              style={{ border: '1px solid #e2e8f0' }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="font-inter text-xs font-medium bg-white/90 backdrop-blur-sm shadow-lg" style={{ color: '#0096C7' }}>
                    {project.category}
                  </Badge>
                </div>

                {/* View Project Button - appears on hover */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <Button
                    className="font-inter font-medium px-6 py-3 shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: '#0096C7', color: 'white' }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-satoshi transition-colors duration-200" style={{ color: hoveredProject === project.id ? '#0096C7' : '#111111' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm font-inter font-medium" style={{ color: '#6B7280' }}>
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {project.description}
                </p>
                
                {/* Project Meta */}
                <div className="flex items-center gap-4 text-xs font-inter" style={{ color: '#9CA3AF' }}>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {project.role}
                  </div>
                </div>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      variant="outline"
                      className="font-inter text-xs transition-all duration-200 hover:scale-105"
                      style={{ 
                        borderColor: hoveredProject === project.id ? '#0096C7' : '#E5E7EB',
                        color: hoveredProject === project.id ? '#0096C7' : '#6B7280'
                      }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                {/* View Case Study Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center font-inter font-medium text-sm transition-all duration-200" style={{ color: hoveredProject === project.id ? '#0096C7' : '#6B7280' }}>
                    Case Study
                    <ArrowRight className={`w-4 h-4 ml-1 transition-transform duration-200 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                  </div>
                  <div className="text-xs font-inter" style={{ color: '#9CA3AF' }}>
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fadeInUp animate-delay-800">
          <Button
            onClick={() => alert('View all case studies functionality would go here!')}
            variant="outline"
            className="font-inter font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ 
              borderColor: '#0096C7', 
              color: '#0096C7',
              backgroundColor: 'transparent'
            }}
          >
            View All Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;