export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBrand: 'ORACLE' | 'GOOGLE' | 'MICROSOFT' | 'CISCO' | 'IBM' | 'CREDLY';
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
  category: 'CLOUD_SECURITY' | 'WEB3_BLOCKCHAIN' | 'SYSTEMS_TELEMETRY';
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
    tagline: "Building Practical Cloud IAM, Threat Detection, Network Security & Web3 Security Solutions",
    bio: "Computer Science Engineering student focused on cybersecurity, cloud security, SIEM log analysis, network traffic sniffer engines, cloud IAM auditing, Web3 security, and security operations. Certified Oracle Cloud Infrastructure Architect & Foundations Associate, and Microsoft SC-900 certified, building enterprise defensive security platforms.",
    location: "Bengaluru, Karnataka, India (IST / UTC+5:30)",
    email: "noobmaster8985@gmail.com",
    github: "https://github.com/noobkushal",
    linkedin: "https://www.linkedin.com/in/kushallllll/",
    credly: "https://www.credly.com/users/kushal-j.e51ce5e1/badges/credly",
    courseraVerification: "https://coursera.org/share/fdeecd27dec1125c29c35f8fd50f4ac8",
    oracleVerification: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E20246731733E3E2D4A4A4DF44CF4BACA9821DBFDD72BB13E4B03B83CD9CF51B",
    availability: "Available for Internships & Entry-Level Cybersecurity / Cloud Security Roles"
  },

  certifications: [
    {
      id: "cert-oci-architect",
      title: "Oracle Cloud Infrastructure Architect Associate (1Z0-1072-26)",
      issuer: "Oracle",
      issuerBrand: "ORACLE",
      date: "September 2026",
      status: "COMPLETED",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E20246731733E3E2D4A4A4DF44CF4BACA9821DBFDD72BB13E4B03B83CD9CF51B",
      description: "Verified Oracle certification demonstrating expertise in OCI architecture design, high availability, IAM security governance, cloud networking, and workload migration.",
      skills: ["Oracle Cloud Infrastructure (OCI)", "Cloud Architecture", "Cloud Security", "IAM Governance", "Networking"]
    },
    {
      id: "cert-oci",
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      issuerBrand: "ORACLE",
      date: "September 2026",
      status: "COMPLETED",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5A159B1502A7EC992AE1EEF7551B8FEF312DA4F7A1129A2A6D76E5F594C4F68B",
      description: "Verified Oracle certification demonstrating core knowledge of OCI cloud architecture, IAM governance, security models, and cloud networking.",
      skills: ["Oracle Cloud Infrastructure (OCI)", "Cloud Security", "IAM", "Cloud Governance"]
    },
    {
      id: "cert-ms900",
      title: "Microsoft SC-900: Security, Compliance, & Identity Fundamentals",
      issuer: "Microsoft",
      issuerBrand: "MICROSOFT",
      status: "COMPLETED",
      description: "Verified Microsoft certification demonstrating core principles of Microsoft Entra ID IAM, Microsoft Defender threat protection, Microsoft Sentinel SIEM, and Zero Trust security architecture models.",
      skills: ["Microsoft Entra ID", "Microsoft Defender", "Microsoft Sentinel", "Zero Trust"]
    },
    {
      id: "cert-google",
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google / Coursera",
      issuerBrand: "GOOGLE",
      status: "COMPLETED",
      verificationUrl: "https://coursera.org/share/fdeecd27dec1125c29c35f8fd50f4ac8",
      description: "Rigorous 8-course credential covering Security Operations, Python scripting for cybersecurity, Linux command line, SIEM tools, and Threat Detection.",
      skills: ["Security Operations", "Linux", "Python", "SIEM", "Threat Detection", "SQL"]
    },
    {
      id: "cert-credly",
      title: "Cisco & IBM Verified Cybersecurity Credentials",
      issuer: "Credly / Cisco / IBM",
      issuerBrand: "CREDLY",
      status: "COMPLETED",
      verificationUrl: "https://www.credly.com/users/kushal-j.e51ce5e1/badges/credly",
      description: "Verified badges for networking security, cybersecurity principles, enterprise threat fundamentals, and defensive security.",
      skills: ["Network Security", "Threat Modeling", "Vulnerability Assessment", "Cisco Security"]
    }
  ] as Certification[],

  projects: [
    {
      id: "ai-soc-investigator",
      title: "AI SOC Investigation Assistant (Obsidian Sentinel)",
      tagline: "Enterprise-Grade Real-Time SOC Incident Investigation Platform with Dynamic Sigma Detection & Grounded AI Copilot",
      description: "Full-stack Security Operations Center (SOC) platform designed for SIEM telemetry ingestion (Windows Event IDs 4624/4625/4720/4688, Linux auth.log, Apache/Nginx web logs), dynamic Sigma rule evaluation, multi-stage attack correlation into unified incident timelines, transparent 0–100 risk scoring, evidence-grounded AI copilot investigation, live log streaming, and automated containment response simulation.",
      category: "CLOUD_SECURITY",
      techStack: ["Python 3.11", "FastAPI", "React 18", "TypeScript", "Tailwind CSS", "SQLAlchemy / SQLite", "Sigma Rules", "MITRE ATT&CK", "OpenAI / AI Engine", "pytest"],
      githubUrl: "https://github.com/noobkushal/AI-SOC-Investigation-Assistant",
      highlights: [
        "Real-world SIEM telemetry ingestion & normalization supporting Windows Events, Linux auth.log, and HTTP access logs",
        "Dynamic Sigma rule detection engine evaluating attack behaviors like brute force, PowerShell execution, and account creation",
        "Multi-stage alert correlation engine grouping related host/user/IP telemetry into unified incident timelines",
        "Deterministic 0–100 risk scoring algorithm with transparent factor breakdown and MITRE ATT&CK technique mapping",
        "Evidence-grounded AI Copilot offering automated root-cause analysis, hypothesis generation, and containment steps",
        "Full-stack interactive SOC HUD console featuring live telemetry simulation and executable containment responses"
      ],
      featured: true
    },
    {
      id: "netwatch-soc",
      title: "NetWatch SOC — Real-Time Network Traffic & C2 Detection Lab",
      tagline: "Real-Time Physical NIC Packet Sniffer, Zeek Log Ingestion, & Behavioral C2 Detection Platform",
      description: "Full-stack open-source Security Operations Center (SOC) platform for real-time physical network card (Wi-Fi/Ethernet) packet sniffing, Zeek log ingestion (conn, dns, http, ssl), and behavioral C2 beaconing & DNS anomaly detection. Features an in-browser binary PCAP parser, 11-page Streamlit SOC cockpit, SQLite database, salted SHA-256 RBAC authentication, and Admin Consent permission governance.",
      category: "CLOUD_SECURITY",
      techStack: ["Python 3.11", "Scapy", "Streamlit", "SQLite", "Zeek LTS", "JavaScript (Binary PCAP Parser)", "ATT&CK (T1071)", "Npcap", "pytest"],
      githubUrl: "https://github.com/noobkushal/C2",
      demoUrl: "https://noobkushal.github.io/C2/",
      highlights: [
        "Real-world live physical network interface packet sniffer (Wi-Fi, Ethernet) using Scapy with Layer 3 fallback",
        "In-browser binary PCAP parser decoding Ethernet, IPv4, TCP/UDP headers, protocol layer trees, and hex dumps",
        "Grouped statistical C2 beaconing detector using Coefficient of Variation (CV <= 0.15) for regular callback isolation",
        "DNS Anomaly Engine detecting DGA long domains (>50 chars), subdomain exfiltration tunneling, and rare destinations",
        "Multi-detector risk scoring engine delivering 0–100 risk ratings, severity bands (LOW to CRITICAL), and ATT&CK mapping",
        "Salted SHA-256 password security, RBAC session tracking (ADMIN vs ANALYST), and Admin Consent governance"
      ],
      featured: true
    },
    {
      id: "cloud-iam-lab",
      title: "Cloud IAM Security Lab",
      tagline: "Educational IAM Auditing, Permission Simulation & Security Engine Platform",
      description: "Full-stack educational platform built with Python FastAPI, SQLite, and React TypeScript. Simulates cloud IAM environments with automated Security Analysis Engine detecting wildcard permissions (*:*), excessive developer deletion rights, and least privilege violations.",
      category: "CLOUD_SECURITY",
      techStack: ["Python", "FastAPI", "SQLite", "React", "TypeScript", "Tailwind CSS", "RBAC", "Least Privilege", "pytest"],
      githubUrl: "https://github.com/noobkushal/cloud-iam-security-lab",
      highlights: [
        "Automated Security Engine inspecting IAM policies for wildcard administrator anti-patterns (*:*)",
        "Permission Evaluation Simulator calculating ALLOWED/DENIED access with policy trace",
        "Role-Based UI Adaptability for Administrator, Security Analyst, Auditor, and Developer roles",
        "One-click policy remediation workflow with dynamic security score calculation (0-100)",
        "Interactive Flow Graph visualizer tracing User ➔ Group ➔ Policy ➔ Resource"
      ],
      featured: true
    },
    {
      id: "decrypto-erc20",
      title: "Decrypto — Web3 Token & Vesting Deployment Wizard",
      tagline: "Industrial-Grade No-Code Web3 Token Forge & Linear Vesting Schedule Deployment Portal",
      description: "Industrial-grade Web3 platform for deploying audited ERC-20 tokens and linear vesting schedules in one click. Features a premium React dashboard, Etherscan verification, unified token claim portal, Web3 wallet integration, and security-first smart contract tokenomics.",
      category: "WEB3_BLOCKCHAIN",
      techStack: ["Solidity", "Ethereum / EVM", "ERC-20 Standard", "Smart Contracts", "React", "Web3.js / Ethers.js", "Vesting Schedules", "Blockchain Security"],
      githubUrl: "https://github.com/noobkushal/Decrypto_ERC20",
      highlights: [
        "Implemented standardized ERC-20 interface (totalSupply, balanceOf, transfer, approve, transferFrom)",
        "Designed smart contract logic preventing reentrancy vulnerabilities and integer overflows",
        "Integrated linear vesting schedule smart contracts and claim portal for transparent tokenomics",
        "Built no-code web3 token deployment wizard with Etherscan verification workflow"
      ],
      featured: true
    },
    {
      id: "pulseguard",
      title: "PulseGuard — Real-Time ICU Telemetry & Predictive Clinical Surveillance",
      tagline: "High-Fidelity Telemetry Console & Predictive Clinical Deterioration Surveillance System",
      description: "Real-time ICU telemetry dashboard and clinical deterioration predictive surveillance system. Features a high-fidelity React/TypeScript console with live simulated ECG streams, machine-learning-driven NEWS2 scoring, smart de-duplicated alert hub, and FastAPI/SQLite backend.",
      category: "SYSTEMS_TELEMETRY",
      techStack: ["Python", "FastAPI", "SQLite", "React", "TypeScript", "Tailwind CSS", "NEWS2 ML Scoring", "ECG Streamer"],
      githubUrl: "https://github.com/noobkushal/Pulseguard",
      highlights: [
        "High-fidelity real-time telemetry console displaying live simulated multi-parameter ECG streams",
        "Machine-learning-driven NEWS2 clinical deterioration predictive risk scoring engine",
        "Smart de-duplicated alarm hub filtering telemetry noise and prioritizing critical alerts",
        "Full-stack architecture powered by FastAPI backend, SQLite database, and responsive React frontend"
      ],
      featured: true
    },
    {
      id: "reloop",
      title: "ReLoop — B2B Smart Marketplace & ESG Telemetry Dashboard",
      tagline: "B2B Circular Economy Marketplace & Real-Time ESG Carbon Footprint Telemetry Platform",
      description: "B2B smart marketplace and real-time ESG telemetry dashboard designed to foster industrial circularity by enabling businesses to trade raw waste materials, discover regional suppliers via interactive maps, and track carbon footprint savings.",
      category: "SYSTEMS_TELEMETRY",
      techStack: ["JavaScript", "React", "Leaflet Maps", "ESG Telemetry", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/noobkushal/Reloop",
      demoUrl: "https://noobkushal.github.io/Reloop/",
      highlights: [
        "B2B marketplace platform for industrial waste material trading and resource recycling",
        "Interactive geographical map integration for regional supplier and recycler discovery",
        "Real-time ESG telemetry dashboard calculating carbon footprint reduction and material savings",
        "Deployed live web application built with React, Vite, and interactive Leaflet map components"
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
        { name: "Network Packet Sniffing & PCAP Analysis", isCore: true },
        { name: "Scapy & Zeek Telemetry Ingestion", isCore: true },
        { name: "Vulnerability Assessment", isCore: true },
        { name: "Threat Modeling", isCore: true },
        { name: "Network Security Fundamentals", isCore: true },
        { name: "Threat Detection & Incident Response", isCore: true },
        { name: "Microsoft Sentinel (SIEM)", isCore: true },
        { name: "MITRE ATT&CK Framework Mapping", isCore: true }
      ]
    },
    {
      category: "Web3 & Blockchain Security",
      icon: "Coins",
      skills: [
        { name: "Solidity Smart Contracts", isCore: true },
        { name: "ERC-20 Token Standards", isCore: true },
        { name: "EVM & Web3 Integration", isCore: true },
        { name: "Smart Contract Vulnerability Auditing", isCore: true }
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
        "Built practical hands-on security labs including NetWatch SOC Engine, Cloud IAM Security Lab, Decrypto Web3 Smart Contracts, and vulnerability tools",
        "Active member of student technical groups and cybersecurity study circles"
      ]
    }
  ] as ExperienceItem[]
};
