import React from 'react';
import { Card, CardContent } from './ui/card';
import { Trophy, Award, BadgeCheck } from 'lucide-react';

const Achievements = ({ data }) => {
  const iconMap = {
    trophy: Trophy,
    award: Award,
    'badge-check': BadgeCheck
  };

  return (
    <section id="achievements" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            Achievements
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recognition & <span className="text-green-400">Certifications</span>
          </h3>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((achievement) => {
            const Icon = iconMap[achievement.icon];
            return (
              <Card
                key={achievement.id}
                className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                      <Icon className="h-10 w-10 text-green-400" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
