import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Building2, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const items = PORTFOLIO_DATA.experiences;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Experience &amp; Education Timeline</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Academic Foundations &amp; Internship Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Chronological overview of technical internship experience and degree progress.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#1F293D]">
          {items.map((item, idx) => {
            const isInternship = item.type === 'INTERNSHIP';
            return (
              <div key={item.id} className="relative flex flex-col sm:flex-row items-center gap-6">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090D16] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 z-10">
                  {isInternship ? <Building2 className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                <Card className={`w-full sm:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} hover:border-cyan-500/40 space-y-3`}>
                  <div className="flex items-center justify-between">
                    <Badge variant={isInternship ? 'emerald' : 'purple'}>
                      {isInternship ? 'TECHNICAL INTERNSHIP' : 'HIGHER EDUCATION'}
                    </Badge>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" /> {item.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-100">{item.title}</h3>
                  <div className="text-xs font-mono text-cyan-300 font-semibold">{item.organization}</div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-emerald-400" /> {item.location}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-[#1F293D]">
                    {item.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
