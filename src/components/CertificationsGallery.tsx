import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Award, CheckCircle2, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';

export const CertificationsGallery: React.FC = () => {
  const certs = PORTFOLIO_DATA.certifications;

  return (
    <section id="certifications" className="py-20 relative bg-[#0D1322]/50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Professional Certifications &amp; Badges
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Formal certifications and digital credentials verifying expertise in Oracle Cloud Infrastructure, Google Cybersecurity, and Credly badges.
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
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#090D16] rounded-xl border border-[#1F293D]">
                        <Award className={`w-6 h-6 ${isCompleted ? 'text-amber-400' : 'text-purple-400'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-100">{cert.title}</h3>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">{cert.issuer}</div>
                      </div>
                    </div>
                    <Badge variant={isCompleted ? 'emerald' : 'purple'}>
                      {isCompleted ? '✅ COMPLETED' : '⏳ IN PROGRESS'}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="slate">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F293D] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">
                    {cert.date ? `Date: ${cert.date}` : isCompleted ? 'Verified Credential' : 'Target: Microsoft SC-900'}
                  </span>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
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
