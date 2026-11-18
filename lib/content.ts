/**
 * All site copy lives here. Items marked TODO need your confirmation.
 * Set `draft` to false to remove the draft banner before launch.
 */

export const SITE = {
  draft: false,
  year: 2026,
  name: "David Lewis",
  url: "https://davidlewismakes.com",
  title: "David Lewis — Sales Engineering and Applied AI",
  description:
    "Seattle-based Sales Engineering professional and founder. AI workflow automation for healthcare, pharmacy, and SaaS teams, plus customer demos and proofs of concept.",
};

export const HERO = {
  headline: "Make critical work happen faster.",
  intro: "👋 Hi, I’m David—a Seattle-based Sales Engineer and builder with a background in automation, security, and AI. Over the past 10+ years, I’ve helped global organizations adopt cutting-edge tech and uncover clear business value.",
  followup: "These days, I partner with teams of all sizes to tackle complex problems and capture more ROI on tech investments.",
};

export type Link = { label: string; url: string };

export type Project = {
  type: "Shipped product" | "Proof of concept" | "Demo" | "Prototype";
  industry: "SaaS" | "Technology" | "Healthcare" | "Pharmacy" | "Retail";
  highlight: string;
  outcome: string;
  title: string;
  context: string;
  summary: string;
  details?: string[];
  stack?: string[];
  links?: Link[];
  screenshots?: { src: string; alt: string; caption: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Mate",
    screenshots: [
      { src: "/projects/mate-workspace.png", alt: "Mate questionnaire workspace with questions, draft answers, and approval status", caption: "Application preview using fictional company records and questions." },
      { src: "/projects/mate.png", alt: "Mate website showing a sample security answer with supporting evidence", caption: "Public website with an illustrative evidence-backed response." },
    ],
    type: "Shipped product",
    industry: "SaaS",
    highlight: "Draft → Review → Export",
    outcome: "Get security questionnaires back to buyers sooner.",
    context: "Founder, product and design",
    summary:
      "When a buyer’s security review stalls, the sale can stall with it. I built Mate to help SaaS teams respond sooner. It drafts answers from company sources and gives reviewers one place to check and approve them before sending.",
    details: [
      "Multi-agent orchestration on LangGraph with retrieval over company documents",
      "Single sign-on with Google, Microsoft, Okta and Auth0",
      "Review queue where a person approves each answer before export",
    ],
    stack: ["LangGraph", "RAG", "Vercel", "Supabase", "DigitalOcean"],
    links: [{ label: "withmate.ai", url: "https://withmate.ai" }],
  },
  {
    title: "Unified regulatory compliance platform",
    type: "Proof of concept",
    industry: "Technology",
    highlight: "Multi-module scope",
    outcome: "Bring infrastructure compliance into one system.",
    context: "Global technology company · Appian proof of concept",
    summary:
      "Led onsite discovery for an infrastructure compliance platform. I defined the requirements and data model and led two solutions consultants through the proof of concept, which showed how teams could track vendor, site, and access compliance in one place.",
  },
  {
    title: "Provider Data Management modernization",
    type: "Demo",
    industry: "Healthcare",
    highlight: "3 systems → 1",
    outcome: "Show how a health insurer could consolidate provider data and reduce rekeying.",
    context: "Health insurer · Appian demos",
    summary:
      "Built demos that showed how a single provider data workflow could replace three legacy systems. Staff could extract information from provider documents and review it in the same workflow.",
  },
  {
    title: "Enrollment and billing intake",
    type: "Demo",
    industry: "Healthcare",
    highlight: "High-volume inbox",
    outcome: "Identify which enrollment and billing emails could be triaged automatically.",
    context: "Regional health insurer · Appian discovery and demo design",
    summary:
      "The enrollment and billing inbox received High-volume inbox. I worked with the team to define what could be triaged automatically and wrote the spec for an intake and case management demo.",
  },
  {
    title: "Order qualification",
    type: "Prototype",
    industry: "Pharmacy",
    highlight: "2 weeks",
    outcome: "Give pharmacy leadership a prototype and a business case for faster order qualification.",
    context: "Pharmacy operator · Appian prototype and business case",
    summary:
      "In two weeks, I took pharmacy order qualification from an executive workshop to an interactive prototype and a business case for the VP. The prototype showed how orders could be screened and routed, giving leadership a concrete proposal to evaluate.",
  },
  {
    title: "AI Build Governance Tracker",
    type: "Demo",
    industry: "Retail",
    highlight: "Track → Approve",
    outcome: "Show how leaders could review and track AI builds in a retail scenario.",
    context: "Global retailer scenario · Internal Appian exercise",
    summary:
      "Built a live demo app, the deck and the presenter script for governing how AI-built apps get approved and tracked.",
  },
];

export const OTHER = {
  title: "Occidental Studio",
  summary: "A Seattle production and event space I run. I built its direct-booking site.",
  link: { label: "Visit Occidental Studio", url: "https://occidentalstudio.com" },
};

export type Role = { years: string; title?: string; org: string; note: string };

export const EXPERIENCE: Role[] = [
  {
    years: "Dec 2025 to Oct 2026",
    title: "Senior Solutions Consultant",
    org: "Appian",
    note: "Led discovery and demo strategy for enterprise AI and process automation. Worked with executives and technical teams to prioritize use cases, agree on what a prototype needed to prove, and build it in Appian.",
  },
  {
    years: "Apr 2024 to Dec 2025",
    title: "Founding Senior Solutions Engineer",
    org: "Regie.ai",
    note: "Built the pre-sales function as its first hire. Partnered with 10 account executives and contributed to about $6M in annual recurring revenue through discovery, custom demos, and proofs of concept.",
  },
  {
    years: "Aug 2018 to Nov 2022",
    title: "Director, Solutions Consulting",
    org: "LeanData",
    note: "Led eight solutions consultants across the US and UK. Raised demo conversion from 45% to 60% by redesigning the pre-sales process and creating playbooks the company adopted.",
  },
  {
    years: "Dec 2014 to May 2017",
    title: "Senior Solutions Engineer",
    org: "Outreach.io",
    note: "Joined as the first employee and started pre-sales and customer support with the founders as the company grew from seed through Series B.",
  },
];

export const CONTACT = {
  blurb: "Open to full-time applied AI and solutions roles and select consulting projects in automation and pre-sales.",
  email: "davidlewismakes@gmail.com",
  linkedin: "https://www.linkedin.com/in/dlewis88/",
  github: "https://github.com/davidlewismakes",
  resume: "" as string, // TODO: "/resume.pdf" after adding the file to /public
};
