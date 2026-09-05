import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ShieldCheck, ShieldAlert, Server, Code2, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = PORTFOLIO_DATA.skills;

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Cloud Security & IAM':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Cybersecurity & SecOps':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'OS & Infrastructure':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Programming & Scripting':
      default:
        return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0D1322]/50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Skills &amp; Domains</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Security Expertise &amp; Technical Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Categorized technical capabilities across cloud governance, SOC operations, infrastructure, and scripting.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === 'ALL'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-[#151D2E] text-slate-400 hover:text-slate-200 border border-[#1F293D]'
            }`}
          >
            All Technical Domains
          </button>
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.category
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-[#151D2E] text-slate-400 hover:text-slate-200 border border-[#1F293D]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories
            .filter((c) => activeCategory === 'ALL' || c.category === activeCategory)
            .map((cat) => (
              <Card key={cat.category} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#1F293D] pb-3">
                  <div className="p-2 rounded-lg bg-[#090D16] border border-[#1F293D]">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-bold text-base text-slate-100">{cat.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#090D16] rounded-lg border border-[#1F293D] hover:border-cyan-500/40 transition-colors flex items-center justify-between"
                    >
                      <span className="text-xs font-mono text-slate-200">{skill.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
