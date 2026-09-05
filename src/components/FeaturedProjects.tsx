import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { PlaySquare, Github, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Security Portfolio Projects</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Hands-On Cloud Security &amp; IAM Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Practical security platforms built to demonstrate cloud auditing, permission simulation, and automated remediation.
          </p>
        </div>

        {/* Featured Project Spotlight Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-8 border-cyan-500/40 relative overflow-hidden bg-gradient-to-br from-[#111827] to-[#151D2E]">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <ShieldCheck className="w-48 h-48 text-cyan-400" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold rounded-full">
                      ★ FEATURED PROJECT
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 font-sans tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-300">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono font-semibold text-slate-400">Key Features Implemented:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="slate">{tech}</Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#1F293D]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#151D2E] hover:bg-[#1F293D] text-slate-100 border border-[#1F293D] hover:border-cyan-500/40 rounded-xl text-xs font-mono flex items-center gap-2 transition-all font-semibold"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View GitHub Repository</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl text-xs font-mono flex items-center gap-2 transition-all font-semibold"
                      >
                        <PlaySquare className="w-4 h-4" />
                        <span>Launch Local Simulator</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Preview Mockup Box */}
                <div className="lg:col-span-5">
                  <div className="cyber-panel p-4 space-y-3 border-cyan-500/30 bg-[#090D16] shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#1F293D] pb-2 text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span>IAM Analysis Engine Output</span>
                      </div>
                      <Badge variant="emerald">Live Engine</Badge>
                    </div>

                    <div className="space-y-2 font-mono text-[11px]">
                      <div className="p-2.5 bg-[#111827] rounded border border-rose-500/30 flex items-center justify-between">
                        <span className="text-rose-300">CRITICAL: Wildcard administrator (*:*)</span>
                        <span className="text-rose-400 font-bold">-25 pts</span>
                      </div>

                      <div className="p-2.5 bg-[#111827] rounded border border-amber-500/30 flex items-center justify-between">
                        <span className="text-amber-300">HIGH: Developer object deletion</span>
                        <span className="text-amber-400 font-bold">-15 pts</span>
                      </div>

                      <div className="p-2.5 bg-[#111827] rounded border border-cyan-500/30 text-cyan-300 text-[10px] space-y-1">
                        <div>Simulator: alice-dev ➔ storage:DeleteObject</div>
                        <div className="text-emerald-400 font-bold">ALLOW ➔ Auto-Remediation Enabled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
