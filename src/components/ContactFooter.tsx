import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Mail, Github, Linkedin, Award, Copy, Check, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#060911] border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Contact Banner */}
        <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#151D2E] border-cyan-500/30 text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Interested in discussing cloud security, IAM governance, security operations, or entry-level opportunities? Feel free to reach out directly via email or social links!
          </p>

          {/* Email Copy Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="w-full bg-[#090D16] border border-[#1F293D] rounded-xl px-4 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between">
              <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all shrink-0 shadow-lg shadow-cyan-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </Card>

        {/* Social Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#151D2E] hover:bg-[#1F293D] border border-[#1F293D] hover:border-cyan-500/40 rounded-xl text-slate-200 flex items-center gap-2 transition-all font-semibold"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#151D2E] hover:bg-[#1F293D] border border-[#1F293D] hover:border-cyan-500/40 rounded-xl text-slate-200 flex items-center gap-2 transition-all font-semibold"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#151D2E] hover:bg-[#1F293D] border border-[#1F293D] hover:border-amber-500/40 rounded-xl text-slate-200 flex items-center gap-2 transition-all font-semibold"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Credly Badges</span>
          </a>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-[#1F293D] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{PORTFOLIO_DATA.personal.name} &copy; 2026</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
