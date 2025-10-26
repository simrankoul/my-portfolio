import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Target, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import portfolioData from '../mock';

const PortfolioMinimal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">{portfolioData.personal.name}</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            Available for New Opportunities
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            {portfolioData.personal.name}
          </h1>
          
          <p className="text-2xl md:text-3xl text-emerald-600 mb-6 font-semibold">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.personal.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">About Me</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {portfolioData.about.summary}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Experience</h2>
          <div className="space-y-6">
            {portfolioData.experience.map((exp) => (
              <div key={exp.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-xl text-emerald-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm font-medium bg-gray-100 px-4 py-2 rounded-full">{exp.duration}</div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {exp.location}
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} className="bg-white border border-gray-300 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto">
                  <a href={project.link} className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                    <ExternalLink size={14} className="mr-1" /> Demo
                  </a>
                  <a href={project.github} className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                    <Github size={14} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target size={20} className="mr-2 text-emerald-600" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap size={20} className="mr-2 text-emerald-600" />
                Education
              </h3>
              {portfolioData.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-emerald-600 text-sm font-medium mt-1">{edu.duration}</p>
                  <p className="text-gray-600 text-sm mt-2">{edu.details}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award size={20} className="mr-2 text-emerald-600" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {portfolioData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Interested in working together? Let's connect!
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900 transition-all resize-none"
                  placeholder="Tell me about your opportunity..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-lg transition-all duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="mx-auto mb-2 text-emerald-600" size={24} />
                  <p className="text-sm text-gray-700">{portfolioData.personal.email}</p>
                </div>
                <div>
                  <MapPin className="mx-auto mb-2 text-emerald-600" size={24} />
                  <p className="text-sm text-gray-700">{portfolioData.personal.location}</p>
                </div>
                <div>
                  <Briefcase className="mx-auto mb-2 text-emerald-600" size={24} />
                  <p className="text-sm text-gray-700">Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 {portfolioData.personal.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioMinimal;