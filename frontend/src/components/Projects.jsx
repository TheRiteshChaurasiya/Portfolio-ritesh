import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (projectId) => {
    alert(`Project ${projectId} details would open here!`);
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work showcasing user-centered design solutions across various industries and platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-purple-600 hover:bg-purple-50">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="outline"
                        className="text-xs text-gray-500 border-gray-300"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700 transition-colors duration-200">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => alert('View more projects functionality would go here!')}
            className="inline-flex items-center px-8 py-3 text-purple-600 font-medium border-2 border-purple-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;