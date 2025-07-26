import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Instagram, Send, MessageSquare, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: personal.socialLinks.linkedin, 
      label: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: Instagram, 
      href: personal.socialLinks.instagram, 
      label: 'Instagram',
      color: '#E4405F'
    },
    { 
      icon: Mail, 
      href: `mailto:${personal.email}`, 
      label: 'Email',
      color: '#CBA6F7'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(203, 166, 247, 0.1)', color: '#CBA6F7' }}>
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi" style={{ color: '#111111' }}>
            Ready to bring your ideas to life?
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, #CBA6F7 0%, #B794F6 100%)' }}></div>
          <p className="text-lg font-inter max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            I'd love to hear about your project and discuss how we can work together to create something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg animate-fadeInLeft" style={{ backgroundColor: '#FAFAF9' }}>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold font-satoshi mb-2" style={{ color: '#111111' }}>
                    Send me a message
                  </h3>
                  <p className="font-inter" style={{ color: '#6B7280' }}>
                    Tell me about your project and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium font-inter mb-2" style={{ color: '#374151' }}>
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="font-inter transition-all duration-300 focus:shadow-lg"
                        style={{ borderColor: '#E5E7EB', ':focus': { borderColor: '#CBA6F7' } }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-inter mb-2" style={{ color: '#374151' }}>
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="font-inter transition-all duration-300 focus:shadow-lg"
                        style={{ borderColor: '#E5E7EB' }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium font-inter mb-2" style={{ color: '#374151' }}>
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry"
                      className="font-inter transition-all duration-300 focus:shadow-lg"
                      style={{ borderColor: '#E5E7EB' }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium font-inter mb-2" style={{ color: '#374151' }}>
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      rows={5}
                      className="font-inter transition-all duration-300 focus:shadow-lg"
                      style={{ borderColor: '#E5E7EB' }}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-inter font-medium py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: '#CBA6F7', color: 'white' }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fadeInRight">
            {/* Email Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center contact-icon" style={{ backgroundColor: 'rgba(203, 166, 247, 0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#CBA6F7' }} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold font-satoshi mb-1" style={{ color: '#111111' }}>
                    Email Me
                  </h4>
                  <p className="text-sm font-inter mb-2" style={{ color: '#6B7280' }}>
                    I typically respond within 24 hours
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-inter font-medium transition-colors duration-200 hover:underline"
                    style={{ color: '#CBA6F7' }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold font-satoshi mb-4" style={{ color: '#111111' }}>
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: 'rgba(203, 166, 247, 0.1)' }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 contact-icon" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl p-6 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(203, 166, 247, 0.1) 0%, rgba(183, 148, 246, 0.05) 100%)' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(203, 166, 247, 0.2)' }}>
                  <Heart className="w-5 h-5" style={{ color: '#CBA6F7' }} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold font-satoshi mb-2" style={{ color: '#111111' }}>
                    Currently Available
                  </h4>
                  <p className="font-inter mb-4" style={{ color: '#6B7280' }}>
                    I'm available for new projects and collaborations. Let's create something amazing together!
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-inter text-gray-600">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="text-center p-6 rounded-xl border-2 border-dashed transition-all duration-300 hover:border-solid" style={{ borderColor: '#CBA6F7' }}>
              <div className="text-2xl font-bold font-satoshi mb-2" style={{ color: '#CBA6F7' }}>
                24hr
              </div>
              <p className="text-sm font-inter" style={{ color: '#6B7280' }}>
                Average response time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;