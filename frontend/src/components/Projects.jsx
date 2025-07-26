import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowRight, Clock, User } from 'lucide-react';
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
    <section id="projects" className="py-20 lg:py-32" style={{ backgroundColor: '#FAFAF9' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi" style={{ color: '#111111' }}>
            Featured Case Studies
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, #CBA6F7 0%, #B794F6 100%)' }}></div>
          <p className="text-lg font-inter max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            A collection of my recent work showcasing user-centered design solutions across various industries and platforms.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card cursor-pointer animate-fadeInUp animate-delay-${200 + index * 200}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className={`transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="font-inter text-xs font-medium bg-white shadow-lg" style={{ color: '#CBA6F7' }}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-satoshi transition-colors duration-200" style={{ color: hoveredProject === project.id ? '#CBA6F7' : '#111111' }}>
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
                      className="font-inter text-xs border-gray-300 text-gray-500"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                {/* View Case Study Link */}
                <div className="flex items-center font-inter font-medium text-sm transition-all duration-200 mt-4" style={{ color: hoveredProject === project.id ? '#CBA6F7' : '#6B7280' }}>
                  View Case Study
                  <ArrowRight className={`w-4 h-4 ml-1 transition-transform duration-200 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fadeInUp animate-delay-800">
          <button
            onClick={() => alert('View all case studies functionality would go here!')}
            className="inline-flex items-center px-8 py-3 font-inter font-medium border-2 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ 
              borderColor: '#CBA6F7', 
              color: '#CBA6F7',
              backgroundColor: 'rgba(203, 166, 247, 0.05)'
            }}
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;