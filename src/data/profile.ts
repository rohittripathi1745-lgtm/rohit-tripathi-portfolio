import { ProfileData, StatItem, Capability, TimelineItem, TechItem } from '../types';

export const PROFILE: ProfileData = {
  name: 'Rohit Tripathi',
  displayName: 'ROHIT TRIPATHI',
  roles: [
    'Computer Science Student',
    'Web Developer',
    'Software Developer',
    'Digital Technology Professional',
    'Technical Support & Website Maintenance',
    'Automation Enthusiast',
    'LMS / Business Application Developer'
  ],
  location: 'Panvel, Navi Mumbai',
  locationState: 'Maharashtra, India',
  tagline: 'Computer Science Student • Developer • Digital Technology',
  heroPitch: 'I build modern web applications, digital systems and automation solutions that turn real-world problems into practical technology.',
  aboutEditorial: [
    "I'm Rohit Tripathi, a Computer Science student and developer from Panvel, Navi Mumbai. I enjoy building practical digital solutions, exploring modern web technologies and turning manual processes into efficient software systems.",
    "My experience spans frontend development, backend systems, LMS platforms, business applications, automation and technical support. I enjoy working on projects where technology has a clear purpose — improving workflows, reducing manual effort and creating better digital experiences.",
    "I am continuously learning and improving my skills across software development, web technologies, databases, cloud tools and automation."
  ],
  statusText: 'OPEN TO DEVELOPMENT OPPORTUNITIES',
  isAvailable: true,
  socials: {
    // Editable placeholders - update with your actual handles
    email: 'rohittripathi1745@gmail.com', // Placeholder - update as needed
    github: 'https://github.com/rohittripathi1745-lgtm', // Placeholder
    linkedin: 'https://www.linkedin.com/in/rohit-tripathi-2744482b4', // Placeholder
    location: 'Panvel, Navi Mumbai, India'
  },
  resumeUrl: '/resume.pdf',
  hasResumePdf: true // Set to true once public/resume.pdf is added
};

export const QUICK_STATS: StatItem[] = [
  {
    id: 'cgpa',
    value: '9.21',
    numericValue: 9.21,
    suffix: ' CGPA',
    label: 'Average CGPA',
    sublabel: 'Academic Excellence',
    description: 'B.Sc. Computer Science at Pillai College of Arts, Commerce and Science.'
  },
  {
    id: 'degree',
    value: 'B.Sc.',
    label: 'Computer Science',
    sublabel: 'Undergraduate Program',
    description: 'Core focus on software engineering, database management, and web technologies.'
  },
  {
    id: 'internship',
    value: '3+',
    numericValue: 3,
    suffix: '+ Mos',
    label: 'Internship Experience',
    sublabel: 'Website Development',
    description: 'Practical project-based internship with modern Web Development Technologies.'
  },
  {
    id: 'systems',
    value: '5+',
    numericValue: 5,
    suffix: '+ Mos',
    label: 'Work Experience',
    sublabel: 'IT Executive and Website Maintenance',
    description: 'Maintaining LMS Website and developing applications to automate workflow.'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    tagline: 'Modern, responsive, full-stack applications',
    description: 'Build responsive and interactive web applications using modern frontend and backend technologies with clean architecture and maintainable code.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Java',],
    icon: 'Globe'
  },
  
 
  {
    id: 'lms-development',
    number: '02',
    title: 'LMS Development',
    tagline: 'Learning Management System workflows',
    description: 'Work with Learning Management Systems, assessment engines, certificates, automated surveys, candidate reassignment logic, and course progression.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs'],
    icon: 'GraduationCap'
  },
  
  {
    id: 'business-applications',
    number: '03',
    title: 'Business Applications',
    tagline: 'CRM customization & tailored workflows',
    description: 'Configure and extend platforms such as Zoho CRM and Zoho Creator to build custom applications, forms, department routing, role-based views, and reporting dashboards.',
    technologies: ['Zoho CRM', 'Zoho Creator', 'Deluge', 'Dashboard Reporting'],
    icon: 'Briefcase'
  }
];

export const JOURNEY_TIMELINE: TimelineItem[] = [
  {
  period: 'CURRENT — 4+ MONTHS',
  title: 'IT Executive — Website Maintenance & Application Development',
  subtitle: 'Charismight Consultancy Pvt. Ltd.',
  description: 'Working full-time on LMS development and website maintenance, including new feature development, bug fixing, system troubleshooting, and ongoing platform improvements. Also developing custom internal business applications and automations using Zoho Creator, Deluge, and Zoho CRM.',
  highlights: [
    'LMS Development & Bug Fixing — PHP, Laravel, Blade & MySQL',
    'New Feature Development & Website Maintenance',
    'Custom Internal Applications — Zoho Creator & Deluge',
    'Zoho CRM Management & Workflow Automation'
  ],
  badge: 'Current Role',
  type: 'focus'
},
  {
  period: '1 MONTH INTERNSHIP',
  title: 'Data Analyst Intern',
  subtitle: 'AGNext Technologies — Kharghar, Navi Mumbai',
  description: 'Gained hands-on experience in data analysis, data cleaning, and working with structured datasets to support data-driven business insights and reporting.',
  highlights: [
    'Data Cleaning & Preprocessing',
    'Data Analysis & Interpretation',
    'Excel-Based Data Handling & Reporting',
    'Data Visualization & Insight Generation'
  ],
  badge: 'Internship',
  type: 'experience'
},
  {
    period: '1 MONTH INTERNSHIP',
    title: 'Frontend Development Internship',
    subtitle: 'React Web Develope - Code Alpha Technologies',
    description: 'Hands-on practical development building interactive user interfaces, component-driven layouts, and responsive web experiences with React, JavaScript, HTML5, and CSS.',
    highlights: ['Component-based UI Architecture', 'State Management & Lifecycle', 'Responsive Design Across Viewports', 'Details available on request'],
    badge: 'Internship',
    type: 'internship'
  },
  {
    period: 'EDUCATION',
    title: 'B.Sc. Computer Science',
    subtitle: 'Pillai College of Arts, Commerce and Science, New Panvel',
    description: 'Rigorous computer science curriculum covering data structures, database management systems, web technologies, software development methodologies, and algorithms.',
    highlights: ['9.21 Average CGPA', 'New Panvel, Maharashtra', 'Active student & system builder', 'Solid theoretical & practical base'],
    badge: 'Education',
    type: 'education'
  }
];

export const TECH_STACK: TechItem[] = [
  // FRONTEND
  { name: 'React', category: 'frontend', level: 'Comfortable', description: 'Building component-based interactive user interfaces with clean state flow.', isFavorite: true },
  { name: 'JavaScript', category: 'frontend', level: 'Proficient', description: 'Core ES6+ JavaScript, DOM manipulation, asynchronous programming, and event handling.', isFavorite: true },
  { name: 'HTML5', category: 'frontend', level: 'Proficient', description: 'Semantic structure, accessible markup, and modern web document standards.' },
  { name: 'CSS3', category: 'frontend', level: 'Proficient', description: 'Modern layout systems (Flexbox, Grid), animations, transitions, and responsive styling.' },
  { name: 'Bootstrap', category: 'frontend', level: 'Proficient', description: 'Rapid responsive prototyping and standard grid systems.' },

  // BACKEND
  { name: 'PHP', category: 'backend', level: 'Comfortable', description: 'Server-side application logic, database querying, and API endpoints.', isFavorite: true },
  { name: 'Laravel', category: 'backend', level: 'Working Knowledge', description: 'PHP MVC web framework for structured LMS and business application features.' },
  { name: 'Node.js', category: 'backend', level: 'Working Knowledge', description: 'JavaScript runtime environment for lightweight backend services and scripting.' },
  { name: 'Java', category: 'backend', level: 'Working Knowledge', description: 'Object-oriented programming language for building robust applications and backend systems.' },

  // DATABASE
  { name: 'MySQL', category: 'database', level: 'Comfortable', description: 'Relational database design, table relationships, indexing, and SQL queries.', isFavorite: true },
  { name: 'MongoDB', category: 'database', level: 'Working Knowledge', description: 'NoSQL document database for flexible JSON-like schema storage.' },

  // TOOLS & PLATFORMS
  { name: 'Git', category: 'tools', level: 'Comfortable', description: 'Version control, branch management, collaborative workflows, and code hygiene.' },
  { name: 'GitHub', category: 'tools', level: 'Comfortable', description: 'Repository hosting, project tracking, issue triage, and open collaboration.' },
  { name: 'VS Code', category: 'tools', level: 'Proficient', description: 'Primary IDE customized for rapid full-stack development and debugging.' },
  { name: 'XAMPP', category: 'tools', level: 'Comfortable', description: 'Local server environment for PHP, Apache, and MySQL development and testing.' },
  { name: 'Hostinger', category: 'tools', level: 'Learning', description: 'Live deployment, domain configuration, DNS records, and hosting administration.' },
  { name: 'Docker', category: 'tools', level: 'Learning', description: 'Containerization basics for predictable development and deployment environments.' },

  // BUSINESS & DIGITAL
  { name: 'Zoho Creator', category: 'business', level: 'Comfortable', description: 'Low-code platform for custom business apps, relational forms, and dashboards.', isFavorite: true },
  { name: 'Zoho CRM', category: 'business', level: 'Comfortable', description: 'CRM customization, lead/contact workflows, custom modules, and layout rules.' },
  { name: 'Deluge', category: 'business', level: 'Comfortable', description: 'Zoho proprietary scripting language for automated tasks, webhooks, and integrations.' },
  { name: 'Zoho WorkDrive', category: 'business', level: 'Comfortable', description: 'Team document management, role-based folder structures, and permissions.' },

  // OTHER
  { name: 'REST APIs', category: 'other', level: 'Comfortable', description: 'API integration, JSON data consumption, endpoint design, and status handling.' },
  { name: 'Responsive Design', category: 'other', level: 'Proficient', description: 'Mobile-first layout strategies ensuring pixel-perfect fidelity from 320px to 4K.' },
  { name: 'Website Maintenance', category: 'other', level: 'Experience', description: 'Routine system updates, patch management, performance checks, and live fixes.' },
  { name: 'Process Automation', category: 'other', level: 'Comfortable', description: 'Streamlining manual business tasks with programmatic triggers and scripts.' }
];

export const CURRENTLY_EXPLORING = [
  { name: 'Full-Stack Backend Systems', description: 'Scalable API design, authentication flows, and relational schema optimization.' },
  { name: 'Cloud & Production Deployment', description: 'CI/CD pipelines, containerization, DNS setup, and production monitoring.' },
  { name: 'MySQL Database', description: 'Relational schema design, query optimization, and data modeling for real-world applications.' },
  { name: 'AI Agents & Automation', description: 'Building autonomous workflows, prompt-driven agents, and intelligent task pipelines.' },
  { name: 'Git & GitHub Advanced Features', description: 'Branching strategies, rebasing, GitHub Actions, and collaborative version control workflows.' }
];