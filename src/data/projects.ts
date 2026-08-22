import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'charismight-lms',
    number: '01',
    title: 'CHARISMIGHT LMS',
    subtitle: 'Enterprise Learning & Assessment Platform',
    category: 'Learning Management System',
    description: 'A comprehensive learning platform engineered to manage organization-level employee and candidate training, multi-step assessment workflows, automated surveys, certificate issuance, and course progression.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    role: 'Worked on, maintained, and developed features for the LMS platform',
    visualType: 'lms',
    accentColor: '#38bdf8',
    contributions: [
      'Engineered core LMS functionality for student and candidate progression through modular course tracks.',
      'Implemented dynamic assessment workflows with automated scoring, time limits, and question banks.',
      'Constructed automated survey workflow capturing feedback post course completion.',
      'Built certificate generation engine for verified credentials upon course and assessment clearance.',
      'Programmed candidate reassignment and re-evaluation logic to manage organizational training cycles.',
      'Conducted local development in XAMPP and live hosting/deployment troubleshooting on production servers.',
      'Performed continuous frontend and backend debugging, query optimization, and UI fixes.'
    ],
    features: [
      'Multi-tiered course catalog with sequential module unlocks',
      'Timed assessment engine with randomized questions & auto grading',
      'Automated PDF certificate generation with verification metadata',
      'Post-training survey collection & reporting system',
      'Candidate lifecycle management & reassignment workflows',
      'Admin analytics dashboard for organization-wide training metrics'
    ],
    challenges: [
      'Managing state transitions and conditional prerequisites across complex assessment workflows.',
      'Ensuring consistent certificate generation formatting across diverse operating environments.',
      'Resolving live hosting database timeouts during peak candidate testing windows.'
    ],
    whatILearned: [
      'Deepened practical full-stack Laravel & PHP architecture patterns.',
      'Learned relational database normalization and query tuning for high-volume transactions.',
      'Gained valuable hands-on experience in production server troubleshooting and deployment workflows.'
    ]
  },
  {
    id: 'ticket-management-system',
    number: '02',
    title: 'TICKET MANAGEMENT SYSTEM',
    subtitle: 'Internal Business Support & Routing Application',
    category: 'Business Application',
    description: 'An internal helpdesk and ticket tracking system built on Zoho Creator and Deluge, designed to streamline employee support requests, department routing, SLAs, priority queues, and executive reporting.',
    technologies: ['Zoho Creator', 'Deluge Scripting', 'Zoho CRM', 'Workflow Automation'],
    role: 'Custom Application Developer & Workflow Architect',
    visualType: 'ticket',
    accentColor: '#818cf8',
    contributions: [
      'Designed relational schema for tickets, departments, employees, priorities, and audit logs in Zoho Creator.',
      'Authored Deluge scripts for automated unique ticket number sequencing (e.g., TKT-2026-XXXX).',
      'Implemented automated employee lookup and department routing rules based on category and urgency.',
      'Constructed priority matrix (Urgent / High / Medium / Low) with dynamic SLA reminders.',
      'Built executive reporting dashboards providing real-time resolution metrics and open ticket volume.'
    ],
    features: [
      'Instant ticket submission portal for internal employees',
      'Automated sequential ticket ID generation with zero collision',
      'Department-based auto routing and technician assignment',
      'Priority classification matrix (Urgent, High, Medium, Low)',
      'Status lifecycle tracking (Open, In-Progress, Pending, Resolved, Closed)',
      'Interactive executive dashboards with status breakdowns and SLA analytics'
    ],
    challenges: [
      'Building robust fallback routing logic when primary department handlers are absent.',
      'Creating dynamic UI forms in Zoho Creator that change fields according to selected category.'
    ],
    whatILearned: [
      'Mastered Deluge scripting syntax, webhook events, and relational form scripting.',
      'Gained deep understanding of enterprise IT service management (ITSM) workflows.'
    ]
  },
  {
    id: 'digital-workflow-automation',
    number: '03',
    title: 'DIGITAL WORKFLOW AUTOMATION',
    subtitle: 'Enterprise CRM & Data Management Pipelines',
    category: 'Automation / Business Systems',
    description: 'A suite of custom digital workflows and integrations developed to eliminate repetitive manual data entry, streamline customer records, and automate document storage across business platforms.',
    technologies: ['Zoho CRM', 'Zoho Creator', 'Deluge Scripting', 'Zoho WorkDrive', 'REST APIs'],
    role: 'Automation & CRM Configuration Specialist',
    visualType: 'workflow',
    accentColor: '#34d399',
    contributions: [
      'Customized Zoho CRM layout rules, custom fields, pipeline stages, and multi-criteria views.',
      'Engineered automated task assignment and follow-up email triggers powered by Deluge scripts.',
      'Configured role-based folder provisioning in Zoho WorkDrive linked directly to CRM records.',
      'Automated attachment archival, client notes, and status transition audit trails.'
    ],
    features: [
      'CRM customization with conditional fields and stage gating',
      'Automated task creation & deadline reminders on deal progression',
      'Dynamic email template population using record merge tags',
      'Role-based folder hierarchy generation in Zoho WorkDrive',
      'Clean data sanitation pipelines reducing duplicate customer entries'
    ],
    challenges: [
      'Synchronizing multi-step API payloads between Zoho CRM and WorkDrive without rate-limit errors.',
      'Ensuring strict role-based access permissions so confidential files remain secure.'
    ],
    whatILearned: [
      'Understood how cloud business ecosystems integrate via webhooks and Deluge APIs.',
      'Learned how thoughtful automation directly saves dozens of operational hours for non-technical teams.'
    ]
  },
  
];
