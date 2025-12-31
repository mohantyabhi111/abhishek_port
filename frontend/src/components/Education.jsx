import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            Education
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="text-green-400">Background</span>
          </h3>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
                  <GraduationCap className="h-10 w-10 text-green-400" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {data.degree}
                  </h4>
                  <p className="text-xl text-gray-300 mb-4">
                    {data.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-5 w-5 mr-2 text-green-400" />
                      <span>{data.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-5 w-5 mr-2 text-green-400" />
                      <span>{data.location}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                    <span className="text-green-400 font-semibold text-lg">CGPA: {data.cgpa}/10.0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
