// ─────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH
//  Edit only this file when your resume changes; the page updates
//  automatically. Use **double asterisks** to bold text in bullets/summary.
//  Any contact field left as "" is hidden.
//  Replace public/resume.pdf with your latest PDF.
// ─────────────────────────────────────────────────────────────
const resume = {
  name: "Saish Sawant",
  title: "Software Developer",
  location: "Pune",

  contact: {
    email: "saishsawant141@gmail.com",
    phone: "+91 8692017691",
    linkedin: "https://www.linkedin.com/in/saish-sawant1/",
  },

  resumePdf: "resume.pdf",

  summary:
    "Software Developer with 5+ years of experience at Tata Consultancy Services, specializing in **Python**, **Generative AI**, **AI Agents**, **RAG**, and **LLM-based applications**. Experienced in developing **AI-driven applications**, **automation solutions**, REST APIs, and Django-based applications, with strong expertise in data processing and database management. Proficient in C/C++, Git, Docker, Jenkins, Pytest, MySQL, MongoDB, Pandas, and NumPy, with strong experience in software development, process automation, debugging, code optimization and root cause analysis.",

  // Quick-glance numbers shown on the Overview tab (all taken from the resume).
  highlights: [
    { value: "5+ yrs", label: "at Tata Consultancy Services" },
    { value: "90%", label: "less manual analysis time with the Vehicle Log Analysis Tool" },
    { value: "6 months", label: "fast-track promotion, Level 1 to Level 3" },
  ],

  experience: {
    role: "Software Developer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: "May’2021 – Current",
    sections: [
      {
        title: "Generative AI / AI Application Development",
        points: [
          "Developed **AI Agents** to generate textual notation code for UML diagrams based on stakeholder requirements, helping translate textual requirements into structured model notation.",
          "Designed and developed a **RAG** (Retrieval-Augmented Generation) framework for a requirement-aware Chatbot capable of understanding stakeholder requirements and responding to user queries related to requirements and their interdependencies.",
          "Developed **LLM-based workflows** to process and interpret complex stakeholder requirements for AI-assisted requirement analysis.",
          "Developed Python components for integrating LLM-based capabilities into AI application workflows.",
          "Analyzed stakeholder requirements and translated them into application workflows and AI-assisted solutions.",
        ],
      },
      {
        title: "Vehicle Log Analysis Tool",
        points: [
          "**Developed a Python-based application** to analyse ADAS vehicle log data and extract key performance indicators, **reducing manual analysis time by 90%** using Tkinter, Pandas, NumPy, Matplotlib, and OpenPyXL.",
          "Performed comprehensive **testing and debugging using Pytest**, improving software reliability and analytical accuracy; integrated the application with **MySQL** for structured data management.",
          "**Optimized and refactored Python code** to improve application performance and maintainability while adapting to evolving project requirements.",
          "Participated in **code reviews** and managed source code using **Git and GitLab**, contributing to coding standards, software quality, version control, and collaborative development.",
        ],
      },
      {
        title: "Root Cause Analysis",
        points: [
          "Investigated failures in ADAS vehicle components by analyzing logged vehicle data and identifying faulty signals associated with system issues.",
          "Performed in-depth debugging of **C/C++** codebases and internal tools to isolate component-level failures and determine root causes.",
          "Collaborated with cross-functional teams to validate root-cause findings, support corrective actions, and document analysis results.",
          "Applied C/C++ debugging and software-analysis skills to investigate complex embedded-system behavior and improve diagnostic coverage.",
        ],
      },
    ],
  },

  skills: [
    { group: "Generative AI", items: ["Generative AI", "AI Agents", "RAG", "LLM Applications", "Prompt Engineering", "AI Chatbots"] },
    { group: "Programming", items: ["Python", "C", "C++"] },
    { group: "Frameworks & APIs", items: ["Django", "Flask", "REST API", "Tkinter"] },
    { group: "Data & Analytics", items: ["Pandas", "NumPy", "Matplotlib", "OpenPyXL"] },
    { group: "Databases", items: ["MySQL", "MongoDB"] },
    { group: "Testing", items: ["Pytest", "Selenium"] },
    { group: "DevOps & Version Control", items: ["Git", "GitLab", "Docker", "Jenkins", "CI/CD"] },
    { group: "Software Engineering", items: ["Debugging", "Root Cause Analysis", "Code Optimization"] },
  ],

  education: [
    {
      degree: "MCA (Masters of Computer Application)",
      school: "CDOE, University of Mumbai, Mumbai",
      score: "CGPA: 8.17",
      period: "Apr’23 – Jun’25",
    },
    {
      degree: "BSc. Information Technology",
      school: "Mumbai University",
      score: "CGPA: 8.75",
      period: "Jun’18 – May’21",
    },
  ],

  awards: [
    "Achieved fast-track promotion from Graduate Trainee (Level 1) to System Engineer (Level 3) within 6 months by successfully clearing internal evaluations and demonstrating strong performance.",
    "Received the Contextual Master Award for demonstrating leadership and serving as a role model for fellow associates.",
    "Recognized with multiple awards, including Emerging Leader Rising Nova, Service & Commitment, On the Spot, Special Initiative, and other recognitions for leadership, performance, and impactful contributions.",
  ],
};

export default resume;
