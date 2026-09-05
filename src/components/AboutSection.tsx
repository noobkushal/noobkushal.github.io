import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { UserCheck, Shield, GraduationCap, Building2, MapPin, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me &amp; Background</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Cybersecurity &amp; Cloud Security Operations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dedicated engineering student combining academic foundations in computer science with practical security tooling, cloud IAM auditing, and threat analysis.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Core Focus */}
          <Card className="space-y-4 hover:border-cyan-500/40">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Cloud IAM &amp; Security Auditing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specializing in Role-Based Access Control (RBAC), Least Privilege enforcement, security policy inspection, and automated vulnerability scanning across cloud infrastructure.
            </p>
            <div className="pt-2 border-t border-[#1F293D] flex flex-wrap gap-1.5">
              <Badge variant="cyan">Oracle OCI</Badge>
              <Badge variant="cyan">Cloud IAM</Badge>
              <Badge variant="cyan">RBAC Governance</Badge>
            </div>
          </Card>

          {/* Card 2: Education */}
          <Card className="space-y-4 hover:border-purple-500/40">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Computer Science Degree</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pursuing B.E. / B.Tech in Computer Science &amp; Engineering at <strong className="text-slate-200">BMS Institute of Technology and Management (BMSIT&amp;M)</strong>, Bengaluru.
            </p>
            <div className="pt-2 border-t border-[#1F293D] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" /> Bengaluru, India</span>
              <span className="text-purple-300 font-semibold">Currently Pursuing</span>
            </div>
          </Card>

          {/* Card 3: Technical Internship */}
          <Card className="space-y-4 hover:border-emerald-500/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Technical Internship (NIC)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Completed technical internship at the <strong className="text-slate-200">National Informatics Centre (NIC)</strong>, gaining hands-on exposure to government infrastructure security.
            </p>
            <div className="pt-2 border-t border-[#1F293D] flex flex-wrap gap-1.5">
              <Badge variant="emerald">NIC India</Badge>
              <Badge variant="emerald">Security Infrastructure</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
