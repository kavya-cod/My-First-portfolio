# Portfolio Website — Implementation Specification

## 1. Project Objective
Build a complete, polished, responsive personal portfolio website for Kavya, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning.
Primary instruction: Treat Kavya_Resume.pdf as the source of truth for personal, education, internship, project, skills, and certification details. Do not invent experience, results, metrics, repository URLs, verification links, awards, grades, or credentials.
This file is the implementation blueprint. After creating and reviewing this file, implement the website in the current workspace, run it, test it, and fix issues. Do not stop after writing documentation or presenting a plan.

## 2. Resume-Based Content

### Profile
- **Name:** Kavya
- **Title:** CSE (AI & ML) Student
- **Professional positioning:** Aspiring Data Scientist / Machine Learning Developer
- **Location:** Mangalore, Karnataka, India
- **Email:** khujarati@gmail.com
- **Phone:** +91-6363254632
- **LinkedIn:** https://linkedin.com/in/kavya-h-205752392
- **GitHub:** https://github.com/kavya-cod

### Professional Summary
Motivated CSE (AI & ML) student with practical experience in Python, machine learning, and data analysis, including a completed Data Science internship covering the workflow from raw data to insights. Experience includes predictive modeling, exploratory data analysis, and retail analytics. Interested in applying technical skills and contributing to real-world projects.

### Education
- **Institution:** A.J. Institute of Engineering and Technology, Mangalore
- **Degree:** B.E. — Computer Science and Engineering (Artificial Intelligence & Machine Learning)
- **Duration:** 2023–Present
*(No invented graduation date, CGPA, awards, or grades)*

### Internship Experience
- **Role:** Data Science Intern — Thiranex
- **Duration:** September–October 2026 (Resume specifies: Sep – Oct 2026)
- **Format:** Online / Remote
- **Type:** 30-day project-based internship
- **Resume-supported work:**
  - Completed a project-based Data Science internship covering the full pipeline from raw data to insights, across four evaluated project tasks.
  - Cleaned and preprocessed raw datasets — handled missing values, duplicates, and outliers using Pandas, and visualized findings with Matplotlib and Seaborn.
  - Built and evaluated classification models (Logistic Regression, Decision Tree, Random Forest), assessed using accuracy, precision, recall, F1-score, and ROC-AUC.
  - Performed exploratory data analysis to identify statistical patterns, correlations, and key influencing factors in a real dataset.
  - Delivered an end-to-end analysis of a real-world retail dataset, producing KPIs and visualizations to communicate business insights.

### Personal Projects
1. **Predictive Modeling Using Machine Learning**
   - Built classification models using Logistic Regression, Decision Tree, and Random Forest.
   - Evaluated models using accuracy, precision, recall, F1-score, confusion matrix, ROC curve, and AUC.
   - Technologies: Python, Pandas, Scikit-learn, Matplotlib, Seaborn.
2. **Exploratory Data Analysis — Roller Coaster Dataset**
   - Performed data cleaning, missing-value analysis, duplicate detection, outlier analysis, statistical summaries, visualizations, and correlation analysis.
   - Technologies: Python, Pandas, Matplotlib, Seaborn.
3. **Real-World Retail Analytics**
   - Performed end-to-end analysis of retail transaction data, including revenue trends, products, categories, customers, payments, discounts, and product combinations.
   - Created KPIs and visualizations to communicate business insights.
   - Technologies: Python, Pandas, Matplotlib, Seaborn.
*(No fabricated repository URLs; repository buttons remain hidden until genuine URLs are added)*

### Technical Skills
- **Programming:** Python, C, Java
- **Database:** SQL, DBMS
- **Tools:** Git, GitHub, VS Code
- **Machine Learning & Data Analysis (from resume internship & projects):** Pandas, Matplotlib, Seaborn, Logistic Regression, Decision Tree, Random Forest, Data cleaning & preprocessing, Exploratory data analysis, Model evaluation.
*(Editable data; no arbitrary proficiency percentages)*

### Relevant Coursework
- Data Structures & Algorithms
- DBMS
- Machine Learning
- Artificial Intelligence
- Python Programming
- Web Development

### Certifications
1. **Introduction to Cyber Security** — Simplilearn (SkillUp), 28 Nov 2025 · Certificate code: 9486037
2. **Python for Beginners** — Simplilearn (SkillUp), 27 Nov 2025 · Certificate code: 9480161
3. **Introduction to MS Excel** — Simplilearn (SkillUp), 26 Nov 2025 · Certificate code: 9474412
*(Verification buttons only when genuine URLs supplied; codes placed in secondary details area)*

### Strengths
- Problem Solving
- Quick Learning
- Teamwork
- Communication
- Willingness to Learn

---

## 3. Design Direction & Visual Identity
- **Theme:** Dark, futuristic editorial design with subtle AI and data-inspired details.
- **Palette:**
  - Background: Near-black / deep charcoal (`#090A0F`, `#0F121C`, `#161B2E`)
  - Primary text: Warm white (`#F8FAFC`, `#F1F5F9`)
  - Secondary text: Muted slate / gray (`#94A3B8`, `#64748B`)
  - Primary accent: Electric violet / soft lavender (`#8B5CF6`, `#A78BFA`)
  - Secondary accent: Restrained cyan (`#06B6D4`, `#22D3EE`)
  - Border & glass styling: Thin translucent borders (`rgba(255, 255, 255, 0.08)`), subtle glow effects
- **Typography:**
  - Headings: Space Grotesk
  - Body: Inter
- **Visual Features:**
  - Abstract AI/data neural network / node graph created with SVG & canvas/CSS
  - Generous whitespace, clear hierarchy, high readability
  - Fully accessible (WCAG AA compliant contrast, prefers-reduced-motion support, keyboard focus states)

---

## 4. Architecture & Technology Stack
- **Framework:** React 18 / 19 with Vite + TypeScript
- **Styling:** Tailwind CSS + custom keyframes / gradients in `index.css`
- **Icons:** Lucide React
- **Animations:** Lucide icons + CSS micro-animations / transitions respecting reduced motion
- **Centralized Data:** `src/data/portfolio.ts` for clean configuration and maintainability
- **Public Assets:** PDF resume in `public/Kavya_Resume.pdf`, modern SVG favicon in `public/favicon.svg`

---

## 5. Functional Requirements
1. Sticky, responsive navigation with mobile drawer and active section indicator.
2. Hero section with interactive abstract data/neural visual, CTA buttons, and key tags.
3. Accessible project detail modals (ESC key, backdrop click, focus trap, screen-reader friendly).
4. Interactive copy-email button with clear visual success/error states.
5. Client-validated contact form with explicit notice that message delivery is not configured unless connected to a live backend.
6. Real PDF resume download linking to `public/Kavya_Resume.pdf`.
7. Production build (`npm run build`) verification with zero TypeScript or packaging errors.
