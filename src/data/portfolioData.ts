export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  status: 'COMPLETED' | 'IN_PROGRESS';
  badgeUrl?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level?: number; isCore?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'INTERNSHIP' | 'EDUCATION';
  description: string;
  bulletPoints: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kushal J",
    title: "Cybersecurity & Cloud Security Engineer",
    tagline: "Building Practical Cloud IAM, Threat Detection & Security Operations Solutions",
    bio: "Computer Science Engineering student focused on cybersecurity, cloud security, IAM, and security operations. Building practical security projects while developing expertise in Microsoft Security, Oracle Cloud Infrastructure, cloud IAM, threat detection, and security fundamentals.",
    location: "Bengaluru, Karnataka, India (IST / UTC+5:30)",
    email: "noobmaster8985@gmail.com",
    github: "https://github.com/noobkushal",
    linkedin: "https://www.linkedin.com/in/kushallllll/",
    credly: "https://www.credly.com/users/kushal-j.e51ce5e1/badges/credly",
    courseraVerification: "https://coursera.org/share/fdeecd27dec1125c29c35f8fd50f4ac8",
    availability: "Available for Internships & Entry-Level Cybersecurity / Cloud Security Roles"
  },

  certifications: [
    {
      id: "cert-oci",
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      date: "September 2026",
      status: "COMPLETED",
      description: "Demonstrates foundational knowledge of OCI cloud concepts, security governance, core infrastructure services, IAM, and networking.",
      skills: ["Oracle Cloud Infrastructure (OCI)", "Cloud Security", "IAM", "Cloud Governance"]
    },
    {
      id: "cert-google",
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google / Coursera",
      status: "COMPLETED",
      verificationUrl: "https://coursera.org/share/fdeecd27dec1125c29c35f8fd50f4ac8",
      description: "Rigorous 8-course credential covering Security Operations, Python scripting for cybersecurity, Linux command line, SIEM tools, and Threat Detection.",
      skills: ["Security Operations", "Linux", "Python", "SIEM", "Threat Detection", "SQL"]
    },
    {
      id: "cert-credly",
      title: "Cisco & IBM Verified Cybersecurity Badges",
      issuer: "Credly / Cisco / IBM",
      status: "COMPLETED",
      verificationUrl: "https://www.credly.com/users/kushal-j.e51ce5e1/badges/credly",
      description: "Verified badges for networking security, cybersecurity principles, and enterprise threat fundamentals.",
      skills: ["Network Security", "Threat Modeling", "Vulnerability Assessment"]
    },
    {
      id: "cert-ms900",
      title: "Microsoft SC-900: Security, Compliance, & Identity Fundamentals",
      issuer: "Microsoft",
      status: "IN_PROGRESS",
      description: "Currently preparing for Microsoft certification focusing on Entra ID IAM, Microsoft Defender, Microsoft Sentinel, and Compliance frameworks.",
      skills: ["Microsoft Entra ID", "Microsoft Defender", "Microsoft Sentinel", "Zero Trust"]
    }
  ] as Certification[],

  projects: [
    {
      id: "cloud-iam-lab",
      title: "Cloud IAM Security Lab",
      tagline: "Educational IAM Auditing, Permission Simulation & Security Engine Platform",
      description: "Full-stack educational platform built with Python FastAPI, SQLite, and React TypeScript. Simulates cloud IAM environments with automated Security Analysis Engine detecting wildcard permissions (*:*), excessive developer deletion rights, and least privilege violations.",
      techStack: ["Python", "FastAPI", "SQLite", "React", "TypeScript", "Tailwind CSS", "RBAC", "Least Privilege", "pytest"],
      githubUrl: "https://github.com/noobkushal/cloud-iam-security-lab",
      demoUrl: "http://localhost:5173",
      highlights: [
        "Automated Security Engine inspecting IAM policies for wildcard administrator anti-patterns (*:*)",
        "Permission Evaluation Simulator calculating ALLOWED/DENIED access with policy trace",
        "Role-Based UI Adaptability for Administrator, Security Analyst, Auditor, and Developer roles",
        "One-click policy remediation workflow with dynamic security score calculation (0-100)",
        "Interactive Flow Graph visualizer tracing User ➔ Group ➔ Policy ➔ Resource"
      ],
      featured: true
    }
  ] as Project[],

  skills: [
    {
      category: "Cloud Security & IAM",
      icon: "ShieldCheck",
      skills: [
        { name: "Oracle Cloud Infrastructure (OCI)", isCore: true },
        { name: "IAM Security Governance", isCore: true },
        { name: "Role-Based Access Control (RBAC)", isCore: true },
        { name: "Principle of Least Privilege (PoLP)", isCore: true },
        { name: "Access Control & Security Policies", isCore: true },
        { name: "Cloud Security Auditing", isCore: true }
      ]
    },
    {
      category: "Cybersecurity & SecOps",
      icon: "ShieldAlert",
      skills: [
        { name: "Vulnerability Assessment", isCore: true },
        { name: "Threat Modeling", isCore: true },
        { name: "Network Security Fundamentals", isCore: true },
        { name: "Threat Detection & Incident Response", isCore: true },
        { name: "Microsoft Sentinel (SIEM)", isCore: true },
        { name: "Microsoft Defender Fundamentals", isCore: true }
      ]
    },
    {
      category: "OS & Infrastructure",
      icon: "Server",
      skills: [
        { name: "Linux Administration & CLI", isCore: true },
        { name: "Windows Security Ecosystem", isCore: true },
        { name: "Git & GitHub Version Control", isCore: true },
        { name: "Docker Containerization Fundamentals", isCore: true },
        { name: "Microsoft Security Suite", isCore: true }
      ]
    },
    {
      category: "Programming & Scripting",
      icon: "Code2",
      skills: [
        { name: "Python (Security Automation & API)", isCore: true },
        { name: "C & C++", isCore: false },
        { name: "SQL (Data & Log Analysis)", isCore: true },
        { name: "Bash Scripting", isCore: true },
        { name: "PowerShell Fundamentals", isCore: true }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "exp-nic",
      title: "Technical Security Intern",
      organization: "National Informatics Centre (NIC)",
      location: "India",
      period: "Completed Internship",
      type: "INTERNSHIP",
      description: "Gained hands-on technical experience in government cloud infrastructure, security compliance, and system administration.",
      bulletPoints: [
        "Worked in a government technical environment focusing on infrastructure administration and system monitoring",
        "Applied cybersecurity fundamentals to evaluate system configurations and security posture",
        "Collaborated with technical engineering teams to audit system logs and compliance requirements"
      ]
    },
    {
      id: "edu-[#1]",
      title: "B.E. / B.Tech in Computer Science & Engineering",
      organization: "BMS Institute of Technology and Management (BMSIT&M)",
      location: "Bengaluru, Karnataka, India",
      period: "Currently Pursuing",
      type: "EDUCATION",
      description: "Specializing in Computer Science, Cloud Security, Cybersecurity Operations, and Software Engineering.",
      bulletPoints: [
        "Focused coursework in Computer Networks, Operating Systems, Database Management Systems, and Information Security",
        "Built practical hands-on security labs including Cloud IAM Security Lab and vulnerability analysis tools",
        "Active member of student technical groups and cybersecurity study circles"
      ]
    }
  ] as ExperienceItem[]
};
