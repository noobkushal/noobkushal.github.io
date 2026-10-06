import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { PlaySquare, Github, ShieldCheck, CheckCircle2, Sparkles, Coins, Activity, Terminal, HeartPulse, Recycle } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === 'ALL') return true;
    return p.category === filterCategory;
  });

  const getCategoryLabel = (category: string, id: string) => {
    if (id === 'ai-soc-investigator') return '🛡️ AI SOC & SIGMA ENGINE';
    if (id === 'netwatch-soc') return '🛡️ NETWORK SECURITY & C2 SOC';
    if (id === 'cloud-iam-lab') return '🛡️ CLOUD IAM & GOVERNANCE';
    if (category === 'WEB3_BLOCKCHAIN') return '⛓️ WEB3 / BLOCKCHAIN';
    if (id === 'pulseguard') return '🏥 HEALTHCARE TELEMETRY & ML';
    if (id === 'reloop') return '🌱 ESG & CIRCULAR MARKETPLACE';
    return '⚡ TECHNICAL PROJECT';
  };

  const getProjectTheme = (id: string, category: string) => {
    if (id === 'ai-soc-investigator') return { border: 'border-cyan-500/40 hover:border-cyan-500/60', badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', accent: 'cyan', icon: <Terminal className="w-48 h-48 text-cyan-400" /> };
    if (id === 'netwatch-soc') return { border: 'border-emerald-500/40 hover:border-emerald-500/60', badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', accent: 'emerald', icon: <Activity className="w-48 h-48 text-emerald-400" /> };
    if (id === 'cloud-iam-lab') return { border: 'border-blue-500/40 hover:border-blue-500/60', badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40', accent: 'blue', icon: <ShieldCheck className="w-48 h-48 text-blue-400" /> };
    if (category === 'WEB3_BLOCKCHAIN') return { border: 'border-purple-500/40 hover:border-purple-500/60', badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40', accent: 'purple', icon: <Coins className="w-48 h-48 text-purple-400" /> };
    if (id === 'pulseguard') return { border: 'border-rose-500/40 hover:border-rose-500/60', badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40', accent: 'rose', icon: <HeartPulse className="w-48 h-48 text-rose-400" /> };
    return { border: 'border-amber-500/40 hover:border-amber-500/60', badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40', accent: 'amber', icon: <Recycle className="w-48 h-48 text-amber-400" /> };
  };

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
            Cloud Security, SOC Engineering, Web3 &amp; Telemetry Platforms
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Hands-on software and security projects demonstrating AI-assisted SOC investigation, network PCAP packet sniffing, C2 detection, IAM auditing, smart contract tokenomics, and telemetry dashboards.
          </p>
        </div>

        {/* Project Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
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
            Cloud Security &amp; SOC (3)
          </button>
          <button
            onClick={() => setFilterCategory('WEB3_BLOCKCHAIN')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filterCategory === 'WEB3_BLOCKCHAIN'
                ? 'bg-purple-500 text-black font-bold shadow-lg shadow-purple-500/20'
                : 'bg-[#141D30] text-slate-400 hover:text-slate-200 border border-[#1E2B45]'
            }`}
          >
            Web3 &amp; Smart Contracts (1)
          </button>
          <button
            onClick={() => setFilterCategory('SYSTEMS_TELEMETRY')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filterCategory === 'SYSTEMS_TELEMETRY'
                ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                : 'bg-[#141D30] text-slate-400 hover:text-slate-200 border border-[#1E2B45]'
            }`}
          >
            Systems &amp; Telemetry (2)
          </button>
        </div>

        {/* Featured Project Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const theme = getProjectTheme(project.id, project.category);
            const isWeb3 = project.category === 'WEB3_BLOCKCHAIN';
            const isSOC = project.id === 'ai-soc-investigator';
            const isNetWatch = project.id === 'netwatch-soc';

            return (
              <Card
                key={project.id}
                className={`p-8 relative overflow-hidden bg-gradient-to-br from-[#0F1626] to-[#141D30] ${theme.border}`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  {theme.icon}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${theme.badgeBg}`}>
                        {getCategoryLabel(project.category, project.id)}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 font-sans tracking-tight">
                      {project.title}
                    </h3>

                    <p className={`text-xs font-mono font-semibold ${
                      theme.accent === 'cyan' ? 'text-cyan-300' :
                      theme.accent === 'emerald' ? 'text-emerald-300' :
                      theme.accent === 'purple' ? 'text-purple-300' :
                      theme.accent === 'rose' ? 'text-rose-300' :
                      theme.accent === 'amber' ? 'text-amber-300' : 'text-blue-300'
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
                              theme.accent === 'cyan' ? 'text-cyan-400' :
                              theme.accent === 'emerald' ? 'text-emerald-400' :
                              theme.accent === 'purple' ? 'text-purple-400' :
                              theme.accent === 'rose' ? 'text-rose-400' :
                              theme.accent === 'amber' ? 'text-amber-400' : 'text-blue-400'
                            }`} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant={isWeb3 ? 'purple' : isSOC ? 'cyan' : isNetWatch ? 'emerald' : 'slate'}>{tech}</Badge>
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
                      isSOC ? 'border-cyan-500/30' :
                      isNetWatch ? 'border-emerald-500/30' :
                      isWeb3 ? 'border-purple-500/30' :
                      project.id === 'pulseguard' ? 'border-rose-500/30' :
                      project.id === 'reloop' ? 'border-amber-500/30' : 'border-blue-500/30'
                    }`}>
                      <div className="flex items-center justify-between border-b border-[#1E2B45] pb-2 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          {isSOC ? (
                            <Terminal className="w-4 h-4 text-cyan-400" />
                          ) : isNetWatch ? (
                            <Activity className="w-4 h-4 text-emerald-400" />
                          ) : isWeb3 ? (
                            <Coins className="w-4 h-4 text-purple-400" />
                          ) : project.id === 'pulseguard' ? (
                            <HeartPulse className="w-4 h-4 text-rose-400" />
                          ) : project.id === 'reloop' ? (
                            <Recycle className="w-4 h-4 text-amber-400" />
                          ) : (
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                          )}
                          <span>
                            {isSOC ? 'AI SOC Incident Engine' :
                             isNetWatch ? 'NetWatch Live Sniffer Telemetry' :
                             isWeb3 ? 'ERC-20 & Vesting Smart Contract' :
                             project.id === 'pulseguard' ? 'PulseGuard ECG & NEWS2 ML Engine' :
                             project.id === 'reloop' ? 'ReLoop ESG Carbon Telemetry' : 'IAM Analysis Engine Output'}
                          </span>
                        </div>
                        <Badge variant={isSOC ? 'cyan' : isNetWatch ? 'emerald' : isWeb3 ? 'purple' : project.id === 'pulseguard' ? 'rose' : project.id === 'reloop' ? 'amber' : 'slate'}>
                          {isSOC ? 'Sigma Rules' : isNetWatch ? 'Scapy / PCAP' : isWeb3 ? 'Solidity' : project.id === 'pulseguard' ? 'ML Scoring' : project.id === 'reloop' ? 'ESG Data' : 'Live Engine'}
                        </Badge>
                      </div>

                      {isSOC ? (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="p-2 bg-[#0F1626] rounded border border-cyan-500/30 flex items-center justify-between">
                            <span className="text-cyan-300">TELEMETRY: Windows Auth Log (ID 4625)</span>
                            <span className="text-cyan-400 font-bold">EVENT MATCH</span>
                          </div>
                          <div className="p-2.5 bg-[#0F1626] rounded border border-rose-500/40 flex items-center justify-between">
                            <span className="text-rose-300">SIGMA MATCH: Brute Force ➔ INC-8042</span>
                            <span className="text-rose-400 font-bold">RISK: 87/100</span>
                          </div>
                          <div className="p-2 bg-[#0F1626] rounded border border-emerald-500/30 flex items-center justify-between">
                            <span className="text-emerald-300">ATT&amp;CK MAPPING: T1110 (Brute Force)</span>
                            <span className="text-emerald-400 font-bold">AI GROUNDED</span>
                          </div>
                        </div>
                      ) : isNetWatch ? (
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
{`contract DecryptoVesting is ERC20, Ownable {
    struct Schedule { uint256 total; uint256 released; uint256 start; }
    mapping(address => Schedule) public vesting;

    function release() external {
        uint256 amount = _releasableAmount(msg.sender);
        _transfer(address(this), msg.sender, amount);
    }
}`}
                        </pre>
                      ) : project.id === 'pulseguard' ? (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="p-2 bg-[#0F1626] rounded border border-rose-500/30 flex items-center justify-between">
                            <span className="text-rose-300">ECG STREAM: HR 124 BPM | SpO2 91%</span>
                            <span className="text-rose-400 font-bold">LIVE TELEMETRY</span>
                          </div>
                          <div className="p-2.5 bg-[#0F1626] rounded border border-amber-500/40 flex items-center justify-between">
                            <span className="text-amber-300">NEWS2 DETERIORATION SCORE: 7</span>
                            <span className="text-amber-400 font-bold">HIGH RISK</span>
                          </div>
                          <div className="p-2 bg-[#0F1626] rounded border border-emerald-500/30 flex items-center justify-between">
                            <span className="text-emerald-300">ALERT HUB: De-duplicated &amp; Dispatched</span>
                            <span className="text-emerald-400 font-bold">TRIAGED</span>
                          </div>
                        </div>
                      ) : project.id === 'reloop' ? (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="p-2 bg-[#0F1626] rounded border border-amber-500/30 flex items-center justify-between">
                            <span className="text-amber-300">CIRCULAR TRADE: 12.5 Tons Recycled Poly</span>
                            <span className="text-amber-400 font-bold">COMPLETED</span>
                          </div>
                          <div className="p-2.5 bg-[#0F1626] rounded border border-emerald-500/40 flex items-center justify-between">
                            <span className="text-emerald-300">ESG SAVINGS: -28.4 Tons CO2 Avoided</span>
                            <span className="text-emerald-400 font-bold">METRIC VERIFIED</span>
                          </div>
                          <div className="p-2 bg-[#0F1626] rounded border border-cyan-500/30 flex items-center justify-between">
                            <span className="text-cyan-300">MAP DISCOVERY: 14 Suppliers in 50km</span>
                            <span className="text-cyan-400 font-bold">ACTIVE REGION</span>
                          </div>
                        </div>
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

