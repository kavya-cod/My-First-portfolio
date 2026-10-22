export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: string[];
  keyHighlights: string[];
  fullDescription: string;
  workflowSteps: { title: string; detail: string }[];
  visualType: 'ml-pipeline' | 'eda-distribution' | 'retail-funnel';
  githubUrl?: string; // Hidden if empty or undefined per specification
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certificateCode: string;
  skillsCovered: string[];
  verificationUrl?: string; // Hidden if undefined per specification
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  format: string;
  type: string;
  responsibilities: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    textLogo: string;
    title: string;
    rolePositioning: string;
    location: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    linkedin: string;
    github: string;
    resumePdfPath: string;
    isOpenToOpportunities: boolean;
    opportunityStatusText: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    pills: string[];
  };
  summary: string;
  about: {
    heading: string;
    paragraphs: string[];
    focusAreas: { title: string; description: string; icon: string }[];
  };
  education: {
    degree: string;
    institution: string;
    duration: string;
    specialization: string;
    location: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  coursework: string[];
  certifications: Certification[];
  strengths: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Kavya',
    textLogo: 'KAVYA.DEV',
    title: 'CSE (AI & ML) Student',
    rolePositioning: 'Aspiring Data Scientist / Machine Learning Developer',
    location: 'Mangalore, Karnataka, India',
    email: 'khujarati@gmail.com',
    phone: '+916363254632',
    phoneDisplay: '+91-6363254632',
    linkedin: 'https://linkedin.com/in/kavya-h-205752392',
    github: 'https://github.com/kavya-cod',
    resumePdfPath: '/Kavya_Resume.pdf',
    isOpenToOpportunities: true,
    opportunityStatusText: 'Open to Opportunities',
  },
  hero: {
    eyebrow: 'COMPUTER SCIENCE • AI & MACHINE LEARNING',
    headline: 'Turning Data Into Meaningful Insights.',
    supportingCopy:
      'I’m Kavya, a Computer Science and Engineering student specializing in AI & ML, exploring machine learning, data analysis, and solutions to real-world problems.',
    pills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
  },
  summary:
    'Motivated CSE (AI & ML) student with practical experience in Python, machine learning, and data analysis, including a completed Data Science internship covering the full pipeline from raw data to insights. Worked on predictive modeling, exploratory data analysis, and retail analytics projects. Seeking an entry-level opportunity to apply technical skills and contribute to real-world projects.',
  about: {
    heading: 'Curious by Nature. Analytical by Approach.',
    paragraphs: [
      'Currently pursuing a Bachelor of Engineering in Computer Science and Engineering (Artificial Intelligence & Machine Learning) at A.J. Institute of Engineering and Technology, Mangalore.',
      'My technical focus centers on practical machine learning workflows, data preprocessing, exploratory data analysis, and extracting structured insights from complex datasets using Python and standard scientific computing libraries.',
      'Through hands-on projects and remote internship experience, I focus on building reliable classification models, diagnosing dataset anomalies, and translating raw transaction or operational records into clear analytical summaries.'
    ],
    focusAreas: [
      {
        title: 'Machine Learning & Modeling',
        description:
          'Supervised classification using Logistic Regression, Decision Trees, and Random Forests with rigorous metric evaluation.',
        icon: 'Cpu',
      },
      {
        title: 'Data Cleaning & Preprocessing',
        description:
          'Handling missing values, outlier detection, duplicate remediation, and feature preparation using Pandas.',
        icon: 'Layers',
      },
      {
        title: 'Exploratory & Retail Analytics',
        description:
          'Investigating distributions, correlations, and business KPIs using Seaborn, Matplotlib, and SQL queries.',
        icon: 'BarChart3',
      },
    ],
  },
  education: {
    degree: 'B.E. — Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
    institution: 'A.J. Institute of Engineering and Technology',
    location: 'Mangalore, Karnataka',
    duration: '2023 – Present',
    specialization: 'Artificial Intelligence & Machine Learning',
  },
  experience: [
    {
      role: 'Data Science Intern',
      company: 'Thiranex',
      duration: 'Sep – Oct 2026',
      format: 'Online / Remote',
      type: '30-day project-based internship',
      responsibilities: [
        'Completed a project-based Data Science internship covering the full pipeline from raw data to insights, across four evaluated project tasks.',
        'Cleaned and preprocessed raw datasets — handled missing values, duplicates, and outliers using Pandas, and visualized findings with Matplotlib and Seaborn.',
        'Built and evaluated classification models (Logistic Regression, Decision Tree, Random Forest), assessed using accuracy, precision, recall, F1-score, and ROC-AUC.',
        'Performed exploratory data analysis to identify statistical patterns, correlations, and key influencing factors in a real dataset.',
        'Delivered an end-to-end analysis of a real-world retail dataset, producing KPIs and visualizations to communicate business insights.',
      ],
    },
  ],
  projects: [
    {
      id: 'predictive-modeling',
      title: 'Predictive Modeling Using Machine Learning',
      shortDescription:
        'Classification models built and evaluated using Logistic Regression, Decision Trees, and Random Forests across comprehensive evaluation metrics.',
      category: 'Machine Learning',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      keyHighlights: [
        'Built classification models using Logistic Regression, Decision Tree, and Random Forest',
        'Evaluated models using accuracy, precision, recall, F1-score, confusion matrix, ROC curve, and AUC',
        'Analyzed decision boundaries and model trade-offs between linear and tree-based ensemble approaches',
      ],
      fullDescription:
        'An end-to-end machine learning project emphasizing methodical model construction and thorough evaluation. The project compares baseline linear classification with decision tree partitioning and ensemble random forest techniques to assess predictive performance and generalizability across standard classification benchmarks.',
      workflowSteps: [
        {
          title: 'Data Ingestion & Preprocessing',
          detail: 'Feature scaling, missing value imputation, and categorical feature encoding using Pandas and Scikit-learn.',
        },
        {
          title: 'Model Training',
          detail: 'Training Logistic Regression, Decision Tree, and Random Forest classifiers on structured training splits.',
        },
        {
          title: 'Evaluation & Diagnostic Curves',
          detail: 'Generating confusion matrices, classification reports (precision, recall, F1-score), and ROC curves with AUC calculation.',
        },
      ],
      visualType: 'ml-pipeline',
      // No repository URL was provided in the resume. Hidden per specification.
    },
    {
      id: 'exploratory-data-analysis',
      title: 'Exploratory Data Analysis — Roller Coaster Dataset',
      shortDescription:
        'Systematic exploration of roller coaster specifications, investigating distributions, anomalies, outlier profiles, and statistical correlations.',
      category: 'Data Analysis',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      keyHighlights: [
        'Performed comprehensive data cleaning, missing-value analysis, and duplicate detection',
        'Conducted outlier analysis and generated statistical summary tables',
        'Built univariate and bivariate visualizations, as well as correlation heatmaps to uncover structural relationships',
      ],
      fullDescription:
        'A thorough exploratory study analyzing a multi-attribute roller coaster dataset. The analysis systematically cleans raw anomalies, standardizes numerical features, detects extreme values, and visualizes relationships such as speed versus height and manufacturer distributions across operating eras.',
      workflowSteps: [
        {
          title: 'Data Hygiene & Audit',
          detail: 'Auditing null percentages, removing duplicate entries, and casting data types for analysis.',
        },
        {
          title: 'Univariate & Bivariate Distribution',
          detail: 'Plotting histograms, box plots for speed/height outliers, and count plots across coaster types.',
        },
        {
          title: 'Correlation & Multivariable Patterns',
          detail: 'Computing Pearson correlation matrices and producing annotated Seaborn heatmaps for attribute cross-analysis.',
        },
      ],
      visualType: 'eda-distribution',
    },
    {
      id: 'retail-analytics',
      title: 'Real-World Retail Analytics',
      shortDescription:
        'End-to-end transaction analysis delivering business KPIs, sales trends, customer patterns, and product combination insights.',
      category: 'Business Analytics',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      keyHighlights: [
        'Performed end-to-end analysis of retail transaction data across revenue, orders, and customer groups',
        'Analyzed revenue trends, products, categories, payment methods, discounts, and item combinations',
        'Created executive KPIs and intuitive visualizations to clearly communicate actionable business findings',
      ],
      fullDescription:
        'An analytics workflow applied to multi-faceted retail transactional records. The investigation tracks revenue velocity, identifies top-performing product categories, evaluates discount elasticity, and assesses customer payment behavior to formulate data-grounded summaries for operational decisions.',
      workflowSteps: [
        {
          title: 'Transactional Aggregation',
          detail: 'Synthesizing line-item transactions into customer and temporal aggregates using Pandas groupby and pivot operations.',
        },
        {
          title: 'Sales & Category Dynamics',
          detail: 'Evaluating seasonal revenue peaks, discount distribution effects, and category margin contributions.',
        },
        {
          title: 'KPI Reporting & Visualization',
          detail: 'Visualizing basket size distributions, popular payment gateways, and recurring product combinations.',
        },
      ],
      visualType: 'retail-funnel',
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: ['Python', 'C', 'Java'],
    },
    {
      category: 'Database',
      items: ['SQL', 'DBMS'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code'],
    },
    {
      category: 'Machine Learning & Data Analysis',
      items: [
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'Logistic Regression',
        'Decision Tree',
        'Random Forest',
        'Data cleaning & preprocessing',
        'Exploratory data analysis',
        'Model evaluation',
      ],
    },
  ],
  coursework: [
    'Data Structures & Algorithms',
    'DBMS',
    'Machine Learning',
    'Artificial Intelligence',
    'Python Programming',
    'Web Development',
  ],
  certifications: [
    {
      id: 'cyber-security',
      title: 'Introduction to Cyber Security',
      issuer: 'Simplilearn (SkillUp)',
      issueDate: '28 November 2025',
      certificateCode: '9486037',
      skillsCovered: ['Cyber Security Fundamentals', 'Network Defense Principles', 'Security Best Practices'],
    },
    {
      id: 'python-beginners',
      title: 'Python for Beginners',
      issuer: 'Simplilearn (SkillUp)',
      issueDate: '27 November 2025',
      certificateCode: '9480161',
      skillsCovered: ['Python Syntax', 'Control Flow', 'Data Structures', 'Functions & Modules'],
    },
    {
      id: 'ms-excel',
      title: 'Introduction to MS Excel',
      issuer: 'Simplilearn (SkillUp)',
      issueDate: '26 November 2025',
      certificateCode: '9474412',
      skillsCovered: ['Spreadsheet Modeling', 'Data Organization', 'Formulas & Functions', 'Summary Tables'],
    },
  ],
  strengths: [
    'Problem Solving',
    'Quick Learning',
    'Teamwork',
    'Communication',
    'Willingness to Learn',
  ],
};
