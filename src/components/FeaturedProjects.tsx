import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { PlaySquare, Github, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, Coins, Activity } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === 'ALL') return true;
    return p.category === filterCategory;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Technical Projects</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Cloud Security, NetSec &amp; Web3 Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Hands-on software and security projects demonstrating network packet sniffing, C2 detection, IAM auditing, Web3 smart contract design, and threat prevention.
          </p>
        </div>

        {/* Project Category Filter Tabs */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setFilterCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filterCategory === 'ALL'
                ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20'
                : 'bg-[#141D30] text-slate-400 hover:text-slate-200 border border-[#1E2B45]'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilterCategory('CLOUD_SECURITY')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filterCategory === 'CLOUD_SECURITY'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-[#141D30] text-slate-400 hover:text-slate-200 border border-[#1E2B45]'
            }`}
          >
            Cloud &amp; Network Security
          </button>
          <button
            onClick={() => setFilterCategory('WEB3_BLOCKCHAIN')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filterCategory === 'WEB3_BLOCKCHAIN'
                ? 'bg-purple-500 text-black font-bold shadow-lg shadow-purple-500/20'
                : 'bg-[#141D30] text-slate-400 hover:text-slate-200 border border-[#1E2B45]'
            }`}
          >
            Web3 &amp; Blockchain
          </button>
        </div>

        {/* Featured Project Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isWeb3 = project.category === 'WEB3_BLOCKCHAIN';
            const isNetWatch = project.id === 'netwatch-soc';

            return (
              <Card
                key={project.id}
                className={`p-8 relative overflow-hidden bg-gradient-to-br from-[#0F1626] to-[#141D30] ${
                  isWeb3
                    ? 'border-purple-500/40 hover:border-purple-500/60'
                    : isNetWatch
                    ? 'border-emerald-500/40 hover:border-emerald-500/60'
                    : 'border-cyan-500/40 hover:border-cyan-500/60'
                }`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  {isWeb3 ? (
                    <Coins className="w-48 h-48 text-purple-400" />
                  ) : isNetWatch ? (
                    <Activity className="w-48 h-48 text-emerald-400" />
                  ) : (
                    <ShieldCheck className="w-48 h-48 text-cyan-400" />
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${
                        isWeb3
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : isNetWatch
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      }`}>
                        {isWeb3 ? '⛓️ WEB3 / BLOCKCHAIN' : isNetWatch ? '🛡️ NETWORK SECURITY & C2 SOC' : '🛡️ CLOUD IAM & SECURITY'}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 font-sans tracking-tight">
                      {project.title}
                    </h3>

                    <p className={`text-xs font-mono font-semibold ${
                      isWeb3 ? 'text-purple-300' : isNetWatch ? 'text-emerald-300' : 'text-cyan-300'
                    }`}>
                      {project.tagline}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-semibold text-slate-400">Key Achievements &amp; Features:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isWeb3 ? 'text-purple-400' : isNetWatch ? 'text-emerald-400' : 'text-cyan-400'
                            }`} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant={isWeb3 ? 'purple' : isNetWatch ? 'emerald' : 'slate'}>{tech}</Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#1E2B45]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-[#141D30] hover:bg-[#1E2B45] text-slate-100 border border-[#1E2B45] hover:border-cyan-500/40 rounded-xl text-xs font-mono flex items-center gap-2 transition-all font-semibold shadow-md"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span>View Repository on GitHub</span>
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 transition-all font-semibold border ${
                            isNetWatch
                              ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                              : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                          }`}
                        >
                          <PlaySquare className="w-4 h-4" />
                          <span>Launch Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Visual Box */}
                  <div className="lg:col-span-5">
                    <div className={`cyber-panel p-4 space-y-3 bg-[#070A13] shadow-xl ${
                      isWeb3 ? 'border-purple-500/30' : isNetWatch ? 'border-emerald-500/30' : 'border-cyan-500/30'
                    }`}>
                      <div className="flex items-center justify-between border-b border-[#1E2B45] pb-2 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          {isNetWatch ? (
                            <Activity className="w-4 h-4 text-emerald-400" />
                          ) : isWeb3 ? (
                            <Coins className="w-4 h-4 text-purple-400" />
                          ) : (
                            <ShieldCheck className="w-4 h-4 text-cyan-400" />
                          )}
                          <span>
                            {isNetWatch
                              ? 'NetWatch Live Sniffer Telemetry'
                              : isWeb3
                              ? 'ERC-20 Smart Contract Standard'
                              : 'IAM Analysis Engine Output'}
                          </span>
                        </div>
                        <Badge variant={isNetWatch ? 'emerald' : isWeb3 ? 'purple' : 'cyan'}>
                          {isNetWatch ? 'Scapy / PCAP' : isWeb3 ? 'Solidity' : 'Live Engine'}
                        </Badge>
                      </div>

                      {isNetWatch ? (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="p-2 bg-[#0F1626] rounded border border-emerald-500/30 flex items-center justify-between">
                            <span className="text-emerald-300">LIVE PACKET: 192.168.1.100 ➔ 10.0.0.99:8443</span>
                            <span className="text-emerald-400 font-bold">TCP [SF]</span>
                          </div>
                          <div className="p-2.5 bg-[#0F1626] rounded border border-rose-500/40 flex items-center justify-between">
                            <span className="text-rose-300">CRITICAL: C2 Beacon (30s interval, CV=0.0125)</span>
                            <span className="text-rose-400 font-bold">SCORE: 100</span>
                          </div>
                          <div className="p-2 bg-[#0F1626] rounded border border-amber-500/30 flex items-center justify-between">
                            <span className="text-amber-300">DNS: chunk0.exfil-tunnel.test.org</span>
                            <span className="text-amber-400 font-bold">HIGH (80)</span>
                          </div>
                        </div>
                      ) : isWeb3 ? (
                        <pre className="p-3 bg-[#0F1626] rounded border border-purple-500/30 font-mono text-[10px] text-purple-300 overflow-x-auto leading-relaxed">
{`contract Decrypto is ERC20 {
    address public owner;
    
    constructor() ERC20("Decrypto", "DCRY") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
        owner = msg.sender;
    }
}`}
                        </pre>
                      ) : (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="p-2.5 bg-[#0F1626] rounded border border-rose-500/30 flex items-center justify-between">
                            <span className="text-rose-300">CRITICAL: Wildcard admin (*:*)</span>
                            <span className="text-rose-400 font-bold">-25 pts</span>
                          </div>

                          <div className="p-2.5 bg-[#0F1626] rounded border border-amber-500/30 flex items-center justify-between">
                            <span className="text-amber-300">HIGH: Developer object deletion</span>
                            <span className="text-amber-400 font-bold">-15 pts</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
