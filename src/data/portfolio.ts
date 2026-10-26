// Portfolio data — all personal info for Tejas Satpute
// Edit this file to update your portfolio content

export const PERSONAL = {
  name: 'Tejas Satpute',
  role: 'Software Developer',
  tagline: 'AI/ML Enthusiast',
  email: 'tejas.satpute24@sanjivani.edu.in',
  phone: '9359584743',
  location: 'Nalegaon, Tq. Vaijapur',
  github: 'https://github.com/', // ← Replace with your GitHub URL
  linkedin: 'https://linkedin.com/', // ← Replace with your LinkedIn URL
  leetcode: 'https://leetcode.com/', // ← Replace with your LeetCode URL
  bio: `I'm a Third-Year B.Tech Computer Science Engineering student at Sanjivani University with a strong interest in software development, AI/ML, and web technologies. I have hands-on experience with Java, Python, C++, JavaScript, HTML, CSS, SQL, and databases. I'm eager to learn new technologies, improve my programming skills, and apply my knowledge to real-world projects.`,
  shortBio: `Building intelligent applications and solving real-world problems through code — one commit at a time.`,
  typingRoles: [
    'Java Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Python Developer',
    'DSA Explorer',
  ],
};

export const SKILLS = {
  languages: [
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'C++', level: 60, icon: '⚙️' },
    { name: 'JavaScript', level: 65, icon: '🟨' },
    { name: 'SQL', level: 70, icon: '🗃️' },
    { name: 'HTML/CSS', level: 75, icon: '🌐' },
  ],
  core: [
    { name: 'Data Structures & Algorithms', icon: '🧩' },
    { name: 'Object-Oriented Programming', icon: '🏗️' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Database Management (DBMS)', icon: '🗄️' },
    { name: 'Operating Systems', icon: '🖥️' },
    { name: 'Web Development', icon: '🌐' },
  ],
  aiml: [
    { name: 'NumPy', icon: '🔢' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Seaborn', icon: '📈' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'ML Fundamentals', icon: '🧠' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'MySQL', icon: '🐬' },
  ],
  soft: [
    { name: 'Leadership & Collaboration', icon: '🤝' },
    { name: 'Problem-Solving', icon: '🎯' },
    { name: 'Time Management', icon: '⏱️' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Exam Guardian',
    subtitle: 'AI-Powered Proctoring System',
    description:
      'A secure online examination platform designed to detect suspicious exam activity and support real-time exam monitoring using AI-based behavioral analysis. Built to ensure academic integrity.',
    longDescription:
      'Exam Guardian uses computer vision and machine learning to monitor exam-takers in real-time, flagging anomalies such as unusual movements, multiple faces, or unauthorized materials. The platform integrates a React frontend with a Python/ML backend.',
    tech: ['React', 'TypeScript', 'Python', 'Supabase', 'AI/ML'],
    color: 'violet',
    icon: '🛡️',
    github: '#', // ← Replace with actual GitHub URL
    demo: '#', // ← Replace with actual demo URL
    featured: true,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Safety & Security',
    subtitle: 'School Institution System',
    description:
      'A comprehensive safety and security management system for school institutions, enabling real-time monitoring, emergency alerts, and access control.',
    longDescription:
      'Designed to improve security in school campuses through automated entry/exit logging, alert systems, and dashboards for administrators.',
    tech: ['Python', 'Database', 'Web Development'],
    color: 'blue',
    icon: '🏫',
    github: '#',
    demo: '#',
    featured: true,
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Smart Community',
    subtitle: 'Early Warning System for Water-Borne Diseases',
    description:
      'An early warning system that uses data analysis to detect and predict water-borne disease outbreaks in communities, enabling proactive health interventions.',
    longDescription:
      'Leverages data from multiple sources to detect anomalies in water quality and health records, generating alerts and visualizations for community health workers.',
    tech: ['Python', 'Pandas', 'NumPy', 'ML', 'Data Analysis'],
    color: 'cyan',
    icon: '💧',
    github: '#',
    demo: '#',
    featured: false,
    status: 'Completed',
  },
  {
    id: 4,
    title: 'ML Prediction System',
    subtitle: 'Machine Learning Application',
    description:
      'A machine learning application that analyzes datasets and predicts outcomes using trained models. Demonstrates the end-to-end ML pipeline from data preprocessing to evaluation.',
    longDescription:
      'Built using Scikit-learn, Pandas, and NumPy. Covers feature engineering, model training, hyperparameter tuning, and performance visualization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    color: 'emerald',
    icon: '🤖',
    github: '#',
    demo: '#',
    featured: false,
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Student Management System',
    subtitle: 'Full-Stack Academic Platform',
    description:
      'A comprehensive student management system that streamlines academic operations — handling student records, attendance tracking, grade management, and fee processing in a single unified platform.',
    longDescription:
      'Built with a Java backend and MySQL database, this system supports CRUD operations for student profiles, automated attendance reports, result calculation with GPA tracking, and role-based access for administrators, teachers, and students. Features a clean dashboard with real-time analytics on class performance and attendance trends.',
    tech: ['Java', 'MySQL', 'JDBC', 'SQL', 'OOP', 'DBMS'],
    color: 'amber',
    icon: '🎓',
    github: '#', // ← Replace with actual GitHub URL
    demo: '#',   // ← Replace with actual demo URL
    featured: true,
    status: 'Completed',
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: 'Sanjivani University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2024 – 2028',
    grade: 'CGPA: 6.82',
    description: 'Pursuing B.Tech in CSE with focus on software development, algorithms, and AI/ML. Engaged in academic projects and technical workshops.',
    icon: '🎓',
    type: 'university',
    current: true,
  },
  {
    id: 2,
    institution: 'B.M.V.N Junior College',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    period: '2023 – 2024',
    grade: '72.67%',
    description: 'Completed HSC with Science stream, building a strong foundation in Mathematics and Physics.',
    icon: '🏫',
    type: 'college',
    current: false,
  },
  {
    id: 3,
    institution: 'Progressive School',
    degree: 'SSC (Class X) — Maharashtra State Board',
    period: '2021 – 2022',
    grade: '75.80%',
    description: 'Completed secondary education with distinction.',
    icon: '🏫',
    type: 'school',
    current: false,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Ethara AI',
    role: 'AI Intern — LLM Training',
    period: '2026 – 2027',
    type: 'Internship',
    description: [
      'Contributed to Large Language Model (LLM) training and AI workflow optimization using multilingual datasets.',
      'Worked with AI-driven systems to support model enhancement and content evaluation processes.',
    ],
    tech: ['Python', 'LLM', 'AI/ML', 'Multilingual NLP'],
    icon: '🧠',
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: 'NPTEL Certificate',
    issuer: 'NPTEL — IIT',
    period: '2024 – 2026',
    score: '54%',
    icon: '📜',
    color: 'violet',
  },
  {
    id: 2,
    name: 'Generative AI Fluency',
    issuer: 'NASSCOM',
    period: '2024 – 2026',
    score: null,
    icon: '🤖',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Web Development Certificate',
    issuer: 'Online Platform',
    period: '2024 – 2026',
    score: null,
    icon: '🌐',
    color: 'cyan',
  },
  {
    id: 4,
    name: 'Workshop Certificate',
    issuer: 'Technical Workshop',
    period: '2024 – 2026',
    score: null,
    icon: '🛠️',
    color: 'emerald',
  },
];

export const LANGUAGES = ['English', 'Hindi', 'Marathi'];
