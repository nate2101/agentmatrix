export interface AgentArchetype {
  id: string;
  name: string;
  category: 'Finance' | 'Growth' | 'DevOps' | 'Support' | 'Legal';
  role: string;
  description: string;
  iconName: string;
  confidenceScore: number;
  avgTimeReduction: string;
  costPerTask: string;
  sampleInput: string;
  executionSteps: {
    step: string;
    action: string;
    tool: string;
    durationMs: number;
    status: 'completed' | 'verified';
    outputPreview: string;
  }[];
}

export const AGENT_ARCHETYPES: AgentArchetype[] = [
  {
    id: 'finance-reconciliation',
    name: 'Atlas-Ledger',
    category: 'Finance',
    role: 'Autonomous Financial Controller & Reconciliation Agent',
    description: 'Cross-checks multi-currency Stripe transactions against QuickBooks and bank ledger feeds, flags anomalies, and prepares automated monthly close summaries.',
    iconName: 'CreditCard',
    confidenceScore: 99.8,
    avgTimeReduction: '94%',
    costPerTask: '$0.003',
    sampleInput: 'Reconcile October Stripe batch #8921 (1,420 transactions) against Silicon Valley Bank checking account.',
    executionSteps: [
      {
        step: 'Data Ingestion',
        action: 'Fetched 1,420 Stripe charge objects via Webhook & API v2024-06-20',
        tool: 'StripeGateway.queryCharges()',
        durationMs: 310,
        status: 'completed',
        outputPreview: '1,420 charges parsed. Gross: $482,910.00. Processing fees: $14,004.39.',
      },
      {
        step: 'Ledger Cross-Matching',
        action: 'Fuzzy-matched against SVB wire transfer batch #4019 and QuickBooks GL account #1002',
        tool: 'LedgerMatcher.fuzzyHashJoin()',
        durationMs: 440,
        status: 'completed',
        outputPreview: '1,418 exact matches (99.86%). 2 discrepancies flagged for FX micro-variance.',
      },
      {
        step: 'Variance Resolution',
        action: 'Classified 2 foreign currency micro-variances ($4.12 total) to GL #7050 (Forex Loss)',
        tool: 'AutoAccountingRule.applyTolerance()',
        durationMs: 180,
        status: 'completed',
        outputPreview: 'Journal entry #JE-2026-10-88 created with double-entry cryptographic verification hash.',
      },
      {
        step: 'Compliance Audit Pack',
        action: 'Generated audit-ready reconciliation statement with SOC2-compliant timestamp ledger',
        tool: 'AuditExporter.generateSignedPDF()',
        durationMs: 250,
        status: 'verified',
        outputPreview: 'Batch #8921 100% balanced. Ready for CFO sign-off in 1.18 seconds.',
      },
    ],
  },
  {
    id: 'growth-pipeline',
    name: 'Apollo-SDR',
    category: 'Growth',
    role: 'Autonomous Inbound Qualification & Account Research Agent',
    description: 'Enriches inbound enterprise leads with 45+ firmographic datapoints, detects buying signals, and drafts hyper-tailored executive briefs for account executives.',
    iconName: 'Target',
    confidenceScore: 99.4,
    avgTimeReduction: '88%',
    costPerTask: '$0.004',
    sampleInput: 'New signup from VP of Engineering @ Acme Enterprises (5,000 employees).',
    executionSteps: [
      {
        step: 'Identity & Domain Resolution',
        action: 'Resolved domain acme.com via Clearbit & LinkedIn Sales Navigator data APIs',
        tool: 'EnrichmentEngine.deepInspect()',
        durationMs: 290,
        status: 'completed',
        outputPreview: 'Company: Acme Enterprises. Series C ($85M raised). Tech stack: Next.js, AWS, Snowflake, Kubernetes.',
      },
      {
        step: 'Buying Intent Scoring',
        action: 'Cross-referenced public job postings, GitHub commits, and recent executive interviews',
        tool: 'IntentScorer.computeFitIndex()',
        durationMs: 510,
        status: 'completed',
        outputPreview: 'Fit Score: 96/100 (High-Priority Tier 1 ICP). Active hiring for 14 DevOps/AI engineers.',
      },
      {
        step: 'Bespoke Executive Dossier',
        action: 'Drafted tailored ROI deck & personalized outreach addressing their specific legacy ERP migration',
        tool: 'DossierGenerator.synthesize()',
        durationMs: 380,
        status: 'completed',
        outputPreview: '3-page briefing pushed to Salesforce Opportunity & notified lead AE via Slack channel #enterprise-deals.',
      },
      {
        step: 'Calendar Orchestration',
        action: 'Held executive calendar slot with personalized Calendly round-robin routing',
        tool: 'Scheduler.dispatchInvite()',
        durationMs: 190,
        status: 'verified',
        outputPreview: 'Demo confirmed for Thursday 2:00 PM EST with VP of Eng.',
      },
    ],
  },
  {
    id: 'devsecops-sentinel',
    name: 'Aegis-Guard',
    category: 'DevOps',
    role: 'Autonomous Code & Security Compliance Sentinel',
    description: 'Inspects pull requests for zero-day vulnerabilities, secret leaks, breaking API changes, and continuously validates compliance against SOC 2 and ISO 27001.',
    iconName: 'ShieldCheck',
    confidenceScore: 99.9,
    avgTimeReduction: '92%',
    costPerTask: '$0.005',
    sampleInput: 'GitHub Pull Request #412: "Refactor Auth Middleware & Session Refresh Logic".',
    executionSteps: [
      {
        step: 'AST Static Analysis',
        action: 'Scanned 14 modified files and 842 lines of diff across TypeScript and Rust core',
        tool: 'AegisScanner.astTraverse()',
        durationMs: 340,
        status: 'completed',
        outputPreview: 'Zero secret exposures detected. Checked 120 common JWT edge-case vectors.',
      },
      {
        step: 'Dependency Vulnerability Audit',
        action: 'Cross-checked lockfile additions against CVE database & OSV advisory feeds',
        tool: 'CVEIntelligence.verifyLockfile()',
        durationMs: 280,
        status: 'completed',
        outputPreview: 'All 4 updated packages verified against npm/crates registry hashes. Zero known CVEs.',
      },
      {
        step: 'Regression & Benchmark Suite',
        action: 'Spun up isolated ephemeral test sandbox; measured token refresh latency under 5k req/s load',
        tool: 'SandboxRunner.benchLoad()',
        durationMs: 620,
        status: 'completed',
        outputPreview: 'p99 latency: 14.2ms (18% faster than baseline). Zero memory leaks detected.',
      },
      {
        step: 'PR Approval & Verification Stamp',
        action: 'Issued cryptographically signed GitHub status check and SOC 2 audit evidence log',
        tool: 'GitHubCheckRun.stampApproval()',
        durationMs: 140,
        status: 'verified',
        outputPreview: 'PR #412 approved. SOC 2 Trust Cloud control #CC6.8 automatically verified.',
      },
    ],
  },
  {
    id: 'support-escalation',
    name: 'Helios-Care',
    category: 'Support',
    role: 'Autonomous Tier-1 Customer Success & Resolution Agent',
    description: 'Understands intricate product issues, writes SQL read queries to inspect user database records safely, diagnoses failures, and resolves customer tickets in under 30 seconds.',
    iconName: 'Headphones',
    confidenceScore: 99.1,
    avgTimeReduction: '96%',
    costPerTask: '$0.002',
    sampleInput: 'Customer Zendesk ticket #9042: "Webhook signatures failing on our endpoint since 10am".',
    executionSteps: [
      {
        step: 'Diagnostic Querying',
        action: 'Executed read-only query on customer webhook retry queue and payload delivery logs',
        tool: 'TelemetryDB.queryWebhookErrors()',
        durationMs: 210,
        status: 'completed',
        outputPreview: 'Found 4 consecutive HTTP 502 Bad Gateway responses from customer server IP 198.51.100.4.',
      },
      {
        step: 'Root Cause Synthesis',
        action: 'Analyzed SSL TLS handshake and payload header negotiation records',
        tool: 'NetworkAnalyzer.inspectHeaders()',
        durationMs: 190,
        status: 'completed',
        outputPreview: 'Customer updated Cloudflare firewall rules blocking user-agent "AgentMatrix-Dispatcher/1.0".',
      },
      {
        step: 'Automated Remediation Guide',
        action: 'Drafted tailored resolution with exact Cloudflare IP allowlist range and test curl script',
        tool: 'ResolutionSynthesizer.generate()',
        durationMs: 240,
        status: 'completed',
        outputPreview: 'Included copy-paste curl command to verify HMAC SHA-256 header immediately.',
      },
      {
        step: 'Ticket Resolution & Follow-up',
        action: 'Sent polite, technical response to customer; marked ticket solved with 100% CSAT rating',
        tool: 'ZendeskBridge.postReply()',
        durationMs: 130,
        status: 'verified',
        outputPreview: 'Ticket #9042 closed. Total resolution time: 24.8 seconds. Zero human agent intervention.',
      },
    ],
  },
];

export interface LiveActivityItem {
  id: string;
  timestamp: string;
  agent: string;
  event: string;
  duration: string;
  cost: string;
  status: 'SUCCESS' | 'RUNNING' | 'VERIFIED';
}

export const INITIAL_ACTIVITY_LOGS: LiveActivityItem[] = [
  {
    id: 'act-101',
    timestamp: 'Just now',
    agent: 'Atlas-Ledger',
    event: 'Matched $84,200 payroll run against SVB Account #1102',
    duration: '420ms',
    cost: '$0.003',
    status: 'VERIFIED',
  },
  {
    id: 'act-102',
    timestamp: '12s ago',
    agent: 'Apollo-SDR',
    event: 'Enriched enterprise lead (CTO @ DataScale, 1.2k employees)',
    duration: '310ms',
    cost: '$0.004',
    status: 'SUCCESS',
  },
  {
    id: 'act-103',
    timestamp: '45s ago',
    agent: 'Aegis-Guard',
    event: 'Scanned PR #391 for CVEs & JWT token boundary leaks',
    duration: '680ms',
    cost: '$0.005',
    status: 'VERIFIED',
  },
  {
    id: 'act-104',
    timestamp: '1m ago',
    agent: 'Helios-Care',
    event: 'Auto-resolved webhook timeout ticket for enterprise tenant #88',
    duration: '210ms',
    cost: '$0.002',
    status: 'SUCCESS',
  },
  {
    id: 'act-105',
    timestamp: '2m ago',
    agent: 'Atlas-Ledger',
    event: 'Generated Q3 sales tax accrual summary for Delaware C-Corp',
    duration: '890ms',
    cost: '$0.007',
    status: 'VERIFIED',
  },
];

export interface PricingPlan {
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter Fleet',
    monthlyPrice: 299,
    annualPrice: 239,
    description: 'Perfect for seed-stage startups and lean teams looking to replace 40+ hours of weekly manual operations.',
    targetAudience: 'Early-stage startups & lean agencies',
    features: [
      'Up to 3 Active Autonomous Agents',
      '25,000 monthly execution actions',
      'Stripe & QuickBooks Financial connectors',
      'Slack & Email automated dispatching',
      'Human-in-the-loop review threshold',
      'Community Discord & Standard Support',
      'SOC 2 Type I compliant audit trail',
    ],
    ctaText: 'Start 14-Day Free Trial',
  },
  {
    name: 'Growth Scale',
    badge: 'MOST POPULAR (SCALE TO $10M ARR)',
    monthlyPrice: 899,
    annualPrice: 719,
    highlighted: true,
    description: 'Designed for high-growth Series A & B companies automating entire operational departments.',
    targetAudience: 'Fast-scaling scale-ups (20 - 250 headcount)',
    features: [
      'Up to 12 Active Autonomous Agents',
      '150,000 monthly execution actions',
      'All Connectors (Salesforce, HubSpot, GitHub, Jira)',
      'Custom LLM Fine-Tuning & Memory Embeddings',
      'Multi-agent collaborative swarming',
      'Sub-500ms deterministic execution SLA',
      'SOC 2 Type II & HIPAA audit ready',
      'Dedicated Slack support channel & 4-hour SLA',
    ],
    ctaText: 'Launch Growth Fleet',
  },
  {
    name: 'Enterprise Matrix',
    badge: 'BILLION-DOLLAR ENTERPRISE',
    monthlyPrice: 2499,
    annualPrice: 1999,
    description: 'For mature scale-ups and Fortune 500 enterprises requiring custom security, VPC deployment, and white-glove onboarding.',
    targetAudience: 'Large enterprises & regulated institutions',
    features: [
      'Unlimited Autonomous Agent Fleets',
      '1,000,000+ monthly execution actions',
      'Private VPC / On-Premise Gateway deploy',
      'Custom internal ERP & database connectors',
      'Zero-data retention model guarantee',
      '99.99% Uptime SLA with financial backing',
      'Dedicated Solutions Architect & 24/7 phone support',
      'Custom procurement, MSAs, and legal invoicing',
    ],
    ctaText: 'Talk to Enterprise Sales',
  },
];
