import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Target, Send, Sparkles, Zap } from 'lucide-react';
import portfolioData from '../mock';

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1410] to-[#0a0a0a] opacity-50"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50 border-b border-emerald-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text flex items-center gap-2">
              <Sparkles size={20} className="text-emerald-400" />
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link text-gray-300 hover:text-emerald-400 transition-all duration-300 relative"
                >
                  {item}
                  <span className="nav-underline"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-5xl text-center relative z-10">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
            <Zap size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Available for Opportunities</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight hero-title">
            {portfolioData.personal.name}
          </h1>
          
          <p className="text-3xl md:text-4xl gradient-text mb-6 font-bold animate-pulse-slow">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="glow-button bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/30 border-0"
            >
              <Sparkles size={20} className="mr-2" />
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="glass-button border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Mail, href: `mailto:${portfolioData.personal.email}` },
              { icon: Github, href: `https://${portfolioData.personal.github}` },
              { icon: Linkedin, href: `https://${portfolioData.personal.linkedin}` }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon text-gray-400 hover:text-emerald-400 transition-all duration-300 p-3 rounded-full border border-gray-700 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-12 text-center">About Me</h2>
          <Card className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 group">
            <CardContent className="p-10">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {portfolioData.about.summary}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item flex items-start space-x-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 glow-dot"></div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-16 text-center fade-in-section">Experience</h2>
          <div className="space-y-8 relative">
            <div className="timeline-line"></div>
            {portfolioData.experience.map((exp, index) => (
              <Card key={exp.id} className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:transform hover:scale-[1.02] group fade-in-section">
                <CardHeader className="relative">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-3xl gradient-text group-hover:scale-105 transition-transform duration-300">{exp.role}</CardTitle>
                      <CardDescription className="text-xl text-gray-300 mt-3 font-medium">{exp.company}</CardDescription>
                    </div>
                    <div className="text-emerald-400 text-sm font-semibold bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30">{exp.duration}</div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-3">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 text-lg">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3 achievement-item">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 glow-dot"></div>
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
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-16 text-center fade-in-section">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={project.id} className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:transform hover:scale-105 flex flex-col group fade-in-section">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text group-hover:scale-105 transition-transform duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} className="tech-badge bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0 glow-dot"></div>
                        <span className="text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium">
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
      <section id="skills" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-16 text-center fade-in-section">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8 fade-in-section">
            {portfolioData.skills.map((skillGroup, index) => (
              <Card key={index} className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text flex items-center group-hover:scale-105 transition-transform duration-300">
                    <Target size={24} className="mr-3 text-emerald-400" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <Badge key={i} className="skill-badge bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-300 hover:scale-110 transition-all duration-300 cursor-default px-4 py-2 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-8 fade-in-section">
            <Card className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <GraduationCap size={24} className="mr-3 text-emerald-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold text-gray-200 text-lg mb-2">{edu.degree}</p>
                    <p className="text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-emerald-400 text-sm font-medium mb-3">{edu.duration}</p>
                    <p className="text-gray-400 text-sm">{edu.details}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <Award size={24} className="mr-3 text-emerald-400" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {portfolioData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 glow-dot"></div>
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
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto fade-in-section">
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Interested in working together? Let's connect!
          </p>
          
          <Card className="glass-card border-emerald-500/20">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-400 mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-400 mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-400 mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full glow-button bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/30 border-0"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t border-gray-800">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { icon: Mail, text: portfolioData.personal.email },
                    { icon: MapPin, text: portfolioData.personal.location },
                    { icon: Briefcase, text: 'Available for opportunities' }
                  ].map((item, idx) => (
                    <div key={idx} className="contact-info-item p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                      <item.icon className="mx-auto mb-3 text-emerald-400" size={28} />
                      <p className="text-sm text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-footer border-t border-emerald-500/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 {portfolioData.personal.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Mail, href: `mailto:${portfolioData.personal.email}` },
                { icon: Github, href: `https://${portfolioData.personal.github}` },
                { icon: Linkedin, href: `https://${portfolioData.personal.linkedin}` }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;