import React from 'react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, Building } from 'lucide-react';

export const CertificationsGallery: React.FC = () => {
  const certs = PORTFOLIO_DATA.certifications;

  const getCompanyLabel = (brand: Certification['issuerBrand']) => {
    switch (brand) {
      case 'ORACLE':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> ORACLE CERTIFIED
          </span>
        );
      case 'GOOGLE':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> GOOGLE / COURSERA
          </span>
        );
      case 'MICROSOFT':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" /> MICROSOFT SECURITY
          </span>
        );
      case 'CREDLY':
      default:
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> CREDLY VERIFIED
          </span>
        );
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-[#0B0F1A]/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Professional Certifications &amp; Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Formal certifications and digital credentials verifying expertise across Oracle Cloud, Google Cybersecurity, and Credly badges.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => {
            const isCompleted = cert.status === 'COMPLETED';
            return (
              <Card
                key={cert.id}
                className={`flex flex-col justify-between hover:border-amber-500/40 ${
                  !isCompleted ? 'border-purple-500/40 bg-purple-950/10' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#070A13] rounded-xl border border-[#1E2B45]">
                        <Award className={`w-6 h-6 ${isCompleted ? 'text-amber-400' : 'text-purple-400'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-100">{cert.title}</h3>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">{cert.issuer}</div>
                      </div>
                    </div>
                    {getCompanyLabel(cert.issuerBrand)}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="slate">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2B45] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">
                    {cert.date ? `Issued: ${cert.date}` : isCompleted ? 'Verified Credential' : 'Target: Microsoft SC-900'}
                  </span>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
