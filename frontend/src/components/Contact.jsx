import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-green-400">Connect</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Linkedin className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">LinkedIn</h4>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors break-all">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                    <p className="text-gray-400">Tiruchirappalli, Tamil Nadu, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-[#1a1a1b] border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#0a0a0a] border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0a0a0a] border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-[#0a0a0a] border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-[#0a0a0a] border-gray-700 text-white focus:border-green-500 focus:ring-green-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
