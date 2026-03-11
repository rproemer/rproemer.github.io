// All site content lives here. Update this file to change copy without touching components.

export const profile = {
	name: 'Richard Roemer',
	title: 'PMP · Systems Architect · AI Product Engineer',
	rotateTitles: [
		'Program Manager',
		'Enterprise Architect',
		'AI Product Builder',
		'Senior Engineer'
	],
	email: 'connect@richardroemer.com',
	location: 'Sacramento, CA',
	linkedin: '',
	github: '',
	resumePdf: '/assets/Richard_Roemer_Resume.pdf',
	availableForConsulting: true
};

export const about = {
	summary: `Technical architect and PMP-certified program manager with 15+ years delivering enterprise software — from mission-critical DoD identity systems serving 16M users to modern B2B SaaS platforms. Deep roots in the Microsoft ecosystem (C#, .NET, SQL Server, Azure DevOps), with recent hands-on experience building AI-native products end-to-end: architecture, project management, full-stack development, and production deployment. I bring a rare combination of enterprise program management at scale and modern AI product engineering — designing the system, managing the backlog, writing the code, and shipping to production.`,
	whatIDo: [
		{
			icon: 'Users',
			title: 'Program & Product Management',
			description:
				'PMP-certified with 10+ years leading cross-functional teams of 50+ engineers. Agile/Scrum delivery, stakeholder alignment, roadmap definition, risk management, and budget oversight across DoD, government, and commercial B2B engagements.'
		},
		{
			icon: 'Layers',
			title: 'Enterprise Architecture',
			description:
				'Deep Microsoft stack experience: C#, .NET Core, SQL Server, Entity Framework, Azure DevOps. Architecting scalable multi-tenant systems, RESTful APIs, microservices, and secure identity platforms with federal compliance requirements.'
		},
		{
			icon: 'Cpu',
			title: 'AI-Native Product Development',
			description:
				'Building production AI systems end-to-end — from LLM orchestration and multi-model routing to agentic workflows with persistent memory. Architecting with AI as a core product feature, not an afterthought.'
		},
		{
			icon: 'Wrench',
			title: 'AI-Augmented Dev Workflow',
			description:
				'Designed and operate a full AI-augmented engineering pipeline: architecture decisions in Claude, task management in Linear, documentation in Notion, code in GitHub — with structured handoffs between human review and autonomous AI execution.'
		}
	]
};

export const experience = [
	{
		title: 'Founder & Principal Engineer',
		company: 'Q7Core',
		period: 'Jan 2025 – Present',
		location: 'Sacramento, CA',
		bullets: [
			'Founded and lead a software products company building AI-native B2B SaaS platforms and developer tooling — responsible for product strategy, architecture, project management, and full-stack engineering across 6 active projects.',
			'Designed and operate an end-to-end AI-augmented engineering workflow: architecture and planning in Claude Chat, backlog and sprint management in Linear, documentation in Notion, database in Supabase/Postgres, code in GitHub — with structured ticket-based handoffs between human review and autonomous AI execution via Claude CLI.',
			'Built a multi-tenant B2B permit tracking platform (FastAPI + Supabase + Python) integrating real-time data from multiple municipal agencies via the Accela government API, engineering a novel authentication approach to enable citizen-portal-scoped API access without requiring agency IT involvement.',
			'Delivered Slotting Pro, a community management dashboard (SvelteKit 5 + Tailwind CSS 4 + Supabase), completing a full rewrite in ~10 weeks — including AI-powered lot import, drag-drop release planner, Excel import, and PWA deployment.',
			'Architected SteelTrap, a local-first AI desktop client (Tauri 2 / Rust + SvelteKit) with multi-model LLM routing via OpenRouter (100+ models), BYOK key management with OS keychain encryption, and a developer-grade DevTools payload inspector.',
			'Built and operated an autonomous AI agent platform (Docker + Telegram) with persistent memory via vector search (Qdrant + Ollama embeddings) and cron-driven autonomous workflows — daily briefings, trend collection, and self-improvement cycles.',
			'Extended Claude AI with custom MCP servers and a skills/playbook framework, enabling structured autonomous development handoffs via Linear ticket protocol with human code review checkpoints.'
		]
	},
	{
		title: 'Senior Advisory Consultant',
		company: 'SharpSwitch',
		period: 'Nov 2022 – Jan 2025',
		location: 'Remote',
		bullets: [
			'Provided senior technical and strategic advisory across product planning, technology selection, and systems architecture for B2B software initiatives.',
			'Guided product roadmap definition and stakeholder alignment for SaaS products targeting the e-commerce enablement market.',
			'Delivered architectural guidance on .NET, cloud infrastructure, and integration patterns for development teams navigating complex enterprise requirements.'
		]
	},
	{
		title: 'Program Manager',
		company: 'Defense Manpower Data Center (DMDC / DoD)',
		period: '2016 – 2022',
		location: 'Monterey, CA',
		bullets: [
			'Directed the modernization and expansion of DBIDS (Defense Biometric Identification System), a global identity verification platform deployed across 500+ military installations serving 16M enrolled users and processing 1M+ secure access transactions daily.',
			'Managed a cross-functional team of 50+ engineers, analysts, and technical staff — overseeing sprint planning, backlog prioritization, risk management, and delivery across multiple concurrent workstreams using Agile methodology.',
			'Secured multi-year program funding and drove the technical roadmap for modern desktop, mobile, and web-based identity management tools, coordinating with stakeholders across DoD, DHS, FBI, and EUCOM/CENTCOM/PACOM theater commands.',
			'Standardized physical access control across all military service branches, including integration with DHS and Coast Guard identity systems, FBI TSDB, NLETS, and IoLS for real-time threat vetting.',
			'Ensured compliance with DoD security mandates through risk management frameworks, cross-agency collaboration, and federal acquisition processes.'
		]
	},
	{
		title: 'Principal Software Architect',
		company: 'Defense Manpower Data Center (DMDC / DoD)',
		period: '2013 – 2016',
		location: 'Monterey, CA',
		bullets: [
			'Led architecture design for DBIDS modernization — transitioning from legacy monolithic systems to a service-oriented architecture using C#, .NET Framework, SQL Server, and Entity Framework.',
			'Designed secure RESTful APIs and data integration layers connecting biometric enrollment stations, access control hardware, and centralized identity databases across DoD networks.',
			'Defined coding standards, design patterns, and technical review processes adopted across the engineering organization.'
		]
	},
	{
		title: 'Senior Software Engineer',
		company: 'Defense Manpower Data Center (DMDC / DoD)',
		period: '2011 – 2013',
		location: 'Monterey, CA',
		bullets: [
			'Developed and maintained C#/.NET applications for the DBIDS identity verification system, including biometric enrollment workflows, real-time access control integrations, and SQL Server stored procedure optimization.',
			'Built automated testing frameworks and CI/CD pipelines using TFS (Team Foundation Server) and later Azure DevOps.'
		]
	},
	{
		title: 'Senior Software Engineer',
		company: 'California Earthquake Authority',
		period: '2009 – 2011',
		location: 'Sacramento, CA',
		bullets: [
			'Designed and maintained a data transformation engine for the State of California, ingesting and normalizing policy data from 20+ insurance providers using C#, .NET, and SQL Server.',
			'Built automated data correction tools, error handling pipelines, and a self-service portal for partner data resolution — reducing manual intervention by an estimated 60%.'
		]
	}
];

export const education: Array<{
	degree: string;
	institution: string;
	period: string;
	notes?: string;
}> = [
	// Add education entries here when ready
];

// TIER 1: Core strengths — MS Stack, PM, AI workflow
export const technicalSkills = [
	{ name: 'C# / .NET Core / .NET Framework', level: 92 },
	{ name: 'SQL Server / T-SQL / SSIS / SSRS', level: 90 },
	{ name: 'Azure DevOps / TFS / CI-CD', level: 88 },
	{ name: 'Python / FastAPI', level: 82 },
	{ name: 'TypeScript / JavaScript', level: 80 },
	{ name: 'PostgreSQL / Supabase', level: 78 }
];

export const architectureSkills = [
	{ name: 'Program & Project Management (PMP)', level: 95 },
	{ name: 'Agile / Scrum Delivery', level: 92 },
	{ name: 'Stakeholder & Vendor Management', level: 90 },
	{ name: 'AI Product Architecture & LLM Orchestration', level: 85 },
	{ name: 'Enterprise Systems Architecture', level: 90 },
	{ name: 'B2B SaaS Product Strategy', level: 85 }
];

// Tags: lead with MS + PM, then AI, then modern frontend/infra
export const knowledgeTags = [
	'C#', '.NET Core', 'Entity Framework', 'LINQ',
	'SQL Server', 'T-SQL', 'SSIS', 'SSRS',
	'Azure DevOps', 'TFS', 'Visual Studio',
	'Agile', 'Scrum', 'PMP', 'JIRA', 'Confluence',
	'Risk Management', 'Stakeholder Engagement',
	'LLM Orchestration', 'OpenRouter', 'MCP (Model Context Protocol)',
	'Claude API', 'Gemini API', 'Agentic AI',
	'RAG', 'Vector Search', 'BYOK',
	'Python', 'FastAPI', 'asyncio',
	'SvelteKit 5', 'Tailwind CSS', 'React', 'Next.js',
	'Supabase', 'PostgreSQL', 'Docker',
	'OAuth / JWT', 'REST API Design',
	'Cloudflare', 'Linux / VPS', 'Git / GitHub'
];

export const certifications = [
	{ name: 'Project Management Professional (PMP)', issuer: 'PMI', year: '' }
];

export type ProjectCategory = 'All' | 'Enterprise Systems' | 'AI & Intelligent Systems' | 'B2B SaaS' | 'Developer Tools';

export interface Project {
	id: string;
	name: string;
	category: Exclude<ProjectCategory, 'All'>;
	shortDesc: string;
	description: string;
	tags: string[];
	icon: string;
	accentColor: string;
}

export const projects: Project[] = [
	{
		id: 'permit-tracker',
		name: 'Permit Tracker',
		category: 'B2B SaaS',
		shortDesc: 'Multi-tenant permit lifecycle management with live municipal API integration',
		description:
			'A multi-tenant B2B SaaS platform for tracking building permit lifecycles across municipal agencies. Integrates with the Accela government API for real-time permit status, inspection history, and workflow step tracking. Engineered a novel authentication approach to enable citizen-portal API access without requiring agency IT involvement. Features automated permit polling, per-jurisdiction credential isolation, and email notifications for status changes.',
		tags: ['FastAPI', 'Python', 'Supabase', 'Accela API', 'OAuth', 'Multi-tenant'],
		icon: '🏗️',
		accentColor: '#7c3aed'
	},
	{
		id: 'slottingpro',
		name: 'Slotting Pro',
		category: 'B2B SaaS',
		shortDesc: 'Community operations dashboard with AI-powered onboarding and release planning',
		description:
			'A B2B SaaS operations dashboard for homebuilder teams to manage community setup, lot tracking, and release planning. AI-powered onboarding allows builders to upload engineering site plan PDFs and automatically extract lot configurations — eliminating manual data entry. Features drag-drop release planner with Excel import, lot grid spreadsheet views, and PWA deployment. Full SvelteKit 5 rewrite shipped in ~10 weeks.',
		tags: ['SvelteKit 5', 'Tailwind CSS 4', 'Supabase', 'AI Import', 'PWA'],
		icon: '📊',
		accentColor: '#059669'
	},
	{
		id: 'steeltrap',
		name: 'SteelTrap',
		category: 'Developer Tools',
		shortDesc: 'Local-first AI desktop client with multi-model routing',
		description:
			'A cross-platform desktop AI chat client built on Tauri 2 (Rust) + SvelteKit. Features BYOK key management with OS keychain encryption, multi-model LLM routing via OpenRouter (100+ models), streaming chat engine, and a developer-grade DevTools payload inspector. Zero cloud dependency — all data stored locally.',
		tags: ['Tauri 2', 'Rust', 'SvelteKit 5', 'OpenRouter', 'BYOK'],
		icon: '🛡️',
		accentColor: '#04b4e0'
	},
	{
		id: 'dbids',
		name: 'DBIDS',
		category: 'Enterprise Systems',
		shortDesc: 'Global DoD identity verification and access control — 500+ installations, 16M+ users',
		description:
			'The Defense Biometric Identification System (DBIDS) is a DoD-wide identity authentication and force protection platform managing physical access control at over 500 military installations worldwide. The system serves 16M+ enrolled users and processes over 1M secure access transactions daily. Led modernization from legacy systems to modern service-oriented architecture (C#, .NET, SQL Server), expanded the platform across all U.S. military service branches including Coast Guard interoperability via DHS, and integrated with FBI TSDB, NLETS, and IoLS for real-time threat vetting. Managed a 50+ person cross-functional team spanning software engineering, architecture, QA, cybersecurity, and DevOps across a decade of continuous development.',
		tags: ['C#', '.NET', 'SQL Server', 'Identity Management', 'DoD', 'Biometrics'],
		icon: '🔐',
		accentColor: '#1e40af'
	},
	{
		id: 'video-pipeline',
		name: 'AI-Powered Video Intelligence Pipeline',
		category: 'Developer Tools',
		shortDesc: 'Extracts development strategies from video content into actionable implementation plans',
		description:
			'A custom intelligence pipeline that processes video content natively — no transcription step required. Extracts key technical concepts and development strategies, then structures them into prioritized, actionable implementation plans ready for sprint planning. Built with Next.js + React 19 + TypeScript on isolated Supabase infrastructure.',
		tags: ['AI Pipeline', 'Next.js', 'React 19', 'Supabase', 'TypeScript'],
		icon: '🎯',
		accentColor: '#dc2626'
	},
	{
		id: 'claude-toolkit',
		name: 'Claude Toolkit',
		category: 'Developer Tools',
		shortDesc: 'MCP servers and AI development workflow automation',
		description:
			'A modular Claude AI extension system (custom skills, MCP servers, playbook protocol) enabling a structured AI-augmented engineering workflow. Architecture decisions in Chat, tickets in Linear, autonomous execution via CLI, human code review, then commit. Cross-session context preservation eliminates rework across multi-session projects.',
		tags: ['MCP', 'Claude API', 'Linear', 'Workflow Automation'],
		icon: '⚡',
		accentColor: '#7c3aed'
	},
	{
		id: 'sylys',
		name: 'Sylys',
		category: 'AI & Intelligent Systems',
		shortDesc: 'Autonomous AI agent with persistent memory for automation, reporting, and intelligence gathering',
		description:
			'An autonomous AI agent deployed via Docker with a Telegram interface. Features persistent cross-session memory via vector search and embeddings, multi-provider LLM routing, and scheduled autonomous workflows — daily intelligence briefings, trend monitoring, and periodic self-improvement cycles — all executing without human prompting.',
		tags: ['Agentic AI', 'Docker', 'Vector Search', 'Telegram Bot', 'Automation'],
		icon: '🤖',
		accentColor: '#d97706'
	}
];

export const projectCategories: ProjectCategory[] = [
	'All',
	'Enterprise Systems',
	'B2B SaaS',
	'Developer Tools',
	'AI & Intelligent Systems'
];
