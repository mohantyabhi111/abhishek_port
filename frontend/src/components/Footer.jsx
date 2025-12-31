import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300 mb-4"
            >
              <span className="text-green-400">&lt;</span>
              Abhishek
              <span className="text-green-400">/&gt;</span>
            </button>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about building scalable web applications
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-green-400" />
              </a>
              <a
                href={`https://github.com/${data.github.split('/').pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-green-400" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Abhishek Kumar Mohanty. Built with
            <Heart className="h-4 w-4 text-green-400 fill-green-400" />
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
