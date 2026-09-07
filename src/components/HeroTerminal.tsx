import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Shield, ArrowRight, Github, Linkedin, Award, Download, CheckCircle2 } from 'lucide-react';

export const HeroTerminal: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Cybersecurity &amp; Cloud Security Roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400">{PORTFOLIO_DATA.personal.name}</span>
          </h1>

          <h2 className="text-lg sm:text-xl font-mono text-cyan-300 font-semibold">
            {PORTFOLIO_DATA.personal.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          {/* Key Quick Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-[#151D2E] border border-cyan-500/30 rounded-lg text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Oracle OCI Architect &amp; Foundations Certified
            </span>
            <span className="px-3 py-1 bg-[#151D2E] border border-emerald-500/30 rounded-lg text-xs font-mono text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google Cybersecurity Professional
            </span>
            <span className="px-3 py-1 bg-[#151D2E] border border-amber-500/30 rounded-lg text-xs font-mono text-amber-300 flex items-center gap-1.5">
              ⏳ Preparing Microsoft SC-900
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-bold rounded-xl text-xs font-mono shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#certifications"
              className="px-6 py-3 bg-[#151D2E] hover:bg-[#1F293D] text-slate-200 border border-[#1F293D] rounded-xl text-xs font-mono flex items-center gap-2 transition-all hover:border-cyan-500/40"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Certifications</span>
            </a>
          </div>
        </div>

        {/* Right Column: Simulated Terminal Box */}
        <div className="lg:col-span-5">
          <div className="cyber-card p-0 overflow-hidden shadow-2xl border-cyan-500/30">
            {/* Terminal Header */}
            <div className="bg-[#151D2E] px-4 py-3 border-b border-[#1F293D] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>kushal@sec-ops:~</span>
              </div>
            </div>

            {/* Terminal Content Body */}
            <div className="p-5 font-mono text-xs space-y-3 bg-[#090D16]/95 text-slate-200 min-h-[320px]">
              <div>
                <span className="text-emerald-400">kushal@sec-ops</span>:<span className="text-cyan-400">~</span>$ <span className="text-slate-100">whoami</span>
              </div>
              <div className="text-cyan-300 pl-4 border-l-2 border-cyan-500/50">
                &gt; Kushal J — Cybersecurity &amp; Cloud Security Engineer
              </div>

              <div>
                <span className="text-emerald-400">kushal@sec-ops</span>:<span className="text-cyan-400">~</span>$ <span className="text-slate-100">cat education_experience.txt</span>
              </div>
              <div className="text-purple-300 pl-4 border-l-2 border-purple-500/50 space-y-1">
                <div>&gt; BMSIT&amp;M — B.E. Computer Science &amp; Engineering</div>
                <div>&gt; National Informatics Centre (NIC) — Technical Intern</div>
              </div>

              <div>
                <span className="text-emerald-400">kushal@sec-ops</span>:<span className="text-cyan-400">~</span>$ <span className="text-slate-100">cat current_focus.json</span>
              </div>
              <div className="text-amber-300 pl-4 border-l-2 border-amber-500/50">
                &gt; ["NetWatch SOC Platform", "Cloud IAM Security", "OCI Architect", "Microsoft Sentinel", "C2 Detection"]
              </div>

              <div className="pt-2 flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">kushal@sec-ops</span>:<span className="text-cyan-400">~</span>$ <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
