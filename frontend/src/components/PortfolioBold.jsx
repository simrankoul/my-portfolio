import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Target, Send, Sparkles, Rocket } from 'lucide-react';
import portfolioData from '../mock';

const PortfolioBold = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object for Netlify
    const form = e.target;
    const formDataObj = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj).toString()
    })
      .then(() => {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Oops! Something went wrong. Please try emailing me directly.');
        console.error(error);
      });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10"></div>
        <div className="max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full mb-8">
            <Rocket size={18} className="text-purple-400" />
            <span className="text-purple-400 font-semibold">Open to New Opportunities</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {portfolioData.personal.name}
          </h1>
          
          <p className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-10 py-7 text-lg rounded-xl font-bold shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles size={20} className="mr-2" />
              Explore My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-lg rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-black rounded-3xl p-10 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {portfolioData.about.summary}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp) => (
              <div key={exp.id} className="bg-black rounded-3xl p-8 border border-purple-500/30 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{exp.role}</h3>
                    <p className="text-xl text-gray-300 mt-2 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-purple-400 text-sm font-bold bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">{exp.duration}</div>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {exp.location}
                </div>
                <p className="text-gray-400 mb-6">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="bg-black rounded-3xl p-6 border border-purple-500/30 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex flex-col">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} className="bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-auto">
                  <a href={project.link} className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center">
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                  <a href={project.github} className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-black rounded-3xl p-8 border border-purple-500/30 shadow-xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6 flex items-center">
                  <Target size={24} className="mr-3 text-purple-400" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} className="bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-colors px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-black rounded-3xl p-8 border border-purple-500/30 shadow-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6 flex items-center">
                <GraduationCap size={24} className="mr-3 text-purple-400" />
                Education
              </h3>
              {portfolioData.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-bold text-gray-200 text-lg mb-2">{edu.degree}</p>
                  <p className="text-gray-400 mb-1">{edu.institution}</p>
                  <p className="text-purple-400 text-sm font-semibold mb-3">{edu.duration}</p>
                  <p className="text-gray-400 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            <div className="bg-black rounded-3xl p-8 border border-purple-500/30 shadow-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6 flex items-center">
                <Award size={24} className="mr-3 text-purple-400" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {portfolioData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in working together? Let's connect!
          </p>
          
          <div className="bg-black rounded-3xl p-10 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <form onSubmit={handleSubmit} name="portfolio-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="portfolio-contact" />
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900/50 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900/50 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all resize-none"
                  placeholder="Tell me about your opportunity..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-6 text-lg rounded-xl font-bold shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t border-purple-500/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <Mail className="mx-auto mb-3 text-purple-400" size={28} />
                  <p className="text-sm text-gray-300">{portfolioData.personal.email}</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <MapPin className="mx-auto mb-3 text-purple-400" size={28} />
                  <p className="text-sm text-gray-300">{portfolioData.personal.location}</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <Briefcase className="mx-auto mb-3 text-purple-400" size={28} />
                  <p className="text-sm text-gray-300">Available now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 {portfolioData.personal.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioBold;