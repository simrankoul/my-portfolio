import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code2, Send } from 'lucide-react';
import portfolioData from '../mock';

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('hero');

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
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-emerald-400">{portfolioData.personal.name}</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            {portfolioData.personal.name}
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-400 mb-6 font-semibold">
            {portfolioData.personal.title}
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {portfolioData.personal.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <Card className="bg-[#1a1a1a] border-gray-800 hover:border-emerald-500 transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {portfolioData.about.summary}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <Card key={exp.id} className="bg-[#1a1a1a] border-gray-800 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-2xl text-emerald-400">{exp.role}</CardTitle>
                      <CardDescription className="text-xl text-gray-300 mt-2">{exp.company}</CardDescription>
                    </div>
                    <div className="text-gray-400 text-sm">{exp.duration}</div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="bg-[#1a1a1a] border-gray-800 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-400 hover:text-emerald-300 text-sm">
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-400 hover:text-emerald-300 text-sm">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 hover:border-emerald-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-400 flex items-center">
                    <Code2 size={20} className="mr-2" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge key={i} className="bg-gray-800 text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400 flex items-center">
                  <GraduationCap size={20} className="mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold text-gray-300">{edu.degree}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                    <p className="text-gray-400 text-sm mt-2">{edu.details}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400 flex items-center">
                  <Award size={20} className="mr-2" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {portfolioData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Interested in working together? Let's connect!
          </p>
          
          <Card className="bg-[#1a1a1a] border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Mail className="mx-auto mb-2 text-emerald-400" size={24} />
                    <p className="text-sm text-gray-400">{portfolioData.personal.email}</p>
                  </div>
                  <div>
                    <MapPin className="mx-auto mb-2 text-emerald-400" size={24} />
                    <p className="text-sm text-gray-400">{portfolioData.personal.location}</p>
                  </div>
                  <div>
                    <Briefcase className="mx-auto mb-2 text-emerald-400" size={24} />
                    <p className="text-sm text-gray-400">Available for opportunities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 {portfolioData.personal.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;