export const OWNER = {
  name: "Leo Navarro",
  title: "Cybersecurity Student",
  university: "Westbrook State University",
  degree: "B.S. in Cybersecurity (Junior)",
  tagline: "Finding the exploit before the attacker does.",
  subtagline:
    "Junior Cybersecurity student specializing in offensive security — CTF competitor, SOC intern, and builder of tools that hunt vulnerabilities before they ship.",
  email: "leo.navarro@example.com",
  github: "https://github.com/leonavarro",
  linkedin: "https://linkedin.com/in/leonavarro",
  htb: "https://app.hackthebox.com/profile/leonavarro",
  thm: "https://tryhackme.com/p/leonavarro",
  resumeUrl: "#",
  location: "Austin, TX",
  availability: "Open to SOC & AppSec internships",
  stats: [
    { value: "120+", label: "Boxes rooted" },
    { value: "Top 2%", label: "HTB global rank" },
    { value: "35+", label: "CTFs played" },
    { value: "3", label: "Bugs disclosed" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a junior Cybersecurity student who spends more time breaking systems than building them — on purpose. From campus CTFs to a SOC internship triaging real alerts, I'm chasing the moment a system reveals an assumption it shouldn't have made.",
  philosophy:
    "A vulnerability you can't explain isn't a finding yet. I default to reproducible proof-of-concepts, clear writeups, and remediation steps a developer can actually act on — not just a CVSS score.",
  focus: [
    "Web application security (OWASP Top 10)",
    "Network penetration testing",
    "Malware analysis & reverse engineering",
    "Cloud misconfigurations (AWS / Azure)",
  ],
  coursework: [
    "Network Security & Cryptography",
    "Offensive Security & Penetration Testing",
    "Digital Forensics & Incident Response",
    "Secure Software Development",
  ],
};

export type Severity = "Critical" | "High" | "Medium";

export const OPERATIONS: {
  id: string;
  codename: string;
  title: string;
  severity: Severity;
  description: string;
  tools: string[];
  findings: string[];
}[] = [
  {
    id: "OP-01",
    codename: "Nightcrawler",
    title: "Web App Pentest — University Capstone CTF",
    severity: "Critical",
    description:
      "Led a 4-person red team against a simulated e-commerce platform, chaining an authentication bypass and stored XSS into full account takeover.",
    tools: ["Burp Suite", "SQLmap", "Python"],
    findings: [
      "Chained 3 SQLi-based auth bypasses into admin access",
      "Escalated to root via a misconfigured sudoers entry",
      "Delivered a 22-page report with a remediation timeline",
    ],
  },
  {
    id: "OP-02",
    codename: "Glasshouse",
    title: "Internal Network Pentest — Security Club Range",
    severity: "High",
    description:
      "Built and attacked a 12-host Active Directory lab to practice lateral movement and privilege escalation for the club's training pipeline.",
    tools: ["Nmap", "Impacket", "BloodHound", "Mimikatz"],
    findings: [
      "Compromised domain admin via Kerberoasting",
      "Mapped the full attack path with BloodHound",
      "Documented detections for the blue team to test against",
    ],
  },
  {
    id: "OP-03",
    codename: "Driftwood",
    title: "IoT Firmware Teardown",
    severity: "Medium",
    description:
      "Extracted and reverse-engineered firmware from a consumer router, surfacing a hardcoded credential and an unauthenticated debug shell.",
    tools: ["Ghidra", "Binwalk", "QEMU"],
    findings: [
      "Found hardcoded root credentials in the firmware blob",
      "Identified an unauthenticated debug shell on port 23",
      "Disclosed responsibly to the vendor before publishing",
    ],
  },
  {
    id: "OP-04",
    codename: "Tideline",
    title: "Bug Bounty — Authentication Logic Flaw",
    severity: "High",
    description:
      "Found a race condition in a SaaS password-reset flow that allowed account takeover by winning a timing window during token generation.",
    tools: ["Burp Suite", "Turbo Intruder", "Python"],
    findings: [
      "Reproduced the race condition with a 94% success rate",
      "Disclosed via the program's responsible disclosure policy",
      "Received a bounty and a public acknowledgment",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Security Operations Center Intern",
    company: "Meridian Financial",
    period: "May 2025 — Aug 2025",
    description:
      "Monitored SIEM alerts across a 400-endpoint network, triaged incidents, and helped tune detection rules to cut false positives.",
    highlights: ["Splunk", "Incident Response", "Threat Hunting"],
  },
  {
    role: "President, Cybersecurity Club",
    company: "Westbrook State University",
    period: "Sep 2024 — Present",
    description:
      "Lead a 40-member club running weekly CTF practice and organized the campus's first 24-hour hacking competition.",
    highlights: ["Leadership", "CTF Coaching", "Event Ops"],
  },
  {
    role: "IT Help Desk Technician → Security Pivot",
    company: "Westbrook University IT Services",
    period: "Jan 2023 — May 2024",
    description:
      "Started in tier-1 support, used the access to learn enterprise systems, then moved into auditing endpoint configurations for the security team.",
    highlights: ["Active Directory", "Networking", "Endpoint Hardening"],
  },
];

export const ARSENAL: Record<string, { name: string; level: number }[]> = {
  "Offensive Security": [
    { name: "Web Exploitation (OWASP Top 10)", level: 90 },
    { name: "Network Penetration Testing", level: 82 },
    { name: "Active Directory Attacks", level: 75 },
    { name: "Exploit Development", level: 58 },
  ],
  "Defensive Security": [
    { name: "SIEM & Log Analysis (Splunk)", level: 78 },
    { name: "Incident Response", level: 70 },
    { name: "Threat Hunting", level: 65 },
    { name: "Digital Forensics", level: 60 },
  ],
  "Tools & Scripting": [
    { name: "Python", level: 88 },
    { name: "Bash", level: 80 },
    { name: "Burp Suite / SQLmap", level: 85 },
    { name: "Metasploit / Nmap", level: 84 },
  ],
  "Systems & Networking": [
    { name: "Linux Administration", level: 86 },
    { name: "TCP/IP & Routing", level: 80 },
    { name: "Docker & Virtualization", level: 72 },
    { name: "Cloud Security (AWS / Azure)", level: 55 },
  ],
};

export const CERTIFICATIONS = [
  { title: "CompTIA Security+", issuer: "CompTIA", year: "2024" },
  { title: "eJPT — Junior Penetration Tester", issuer: "INE / eLearnSecurity", year: "2024" },
  { title: "CompTIA Network+", issuer: "CompTIA", year: "2023" },
  { title: "OSCP — In Progress", issuer: "Offensive Security", year: "Target 2026" },
];

export const TOOLS = [
  "Nmap", "Wireshark", "Burp Suite", "Metasploit", "John the Ripper",
  "Ghidra", "Splunk", "BloodHound", "Python", "Linux",
];
