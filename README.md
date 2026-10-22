# Kavya — Personal Portfolio Website

A modern, responsive, dark-themed personal portfolio website for **Kavya**, Computer Science and Engineering student specializing in **Artificial Intelligence & Machine Learning** at A.J. Institute of Engineering and Technology, Mangalore.

Built strictly against `Kavya_Resume.pdf` and the blueprint defined in `implementation.md`.

---

## 🚀 Key Highlights & Resume Fidelity

- **Zero Fabricated Content:** Every piece of experience, education, coursework, strength, certification, and project description strictly corresponds to `Kavya_Resume.pdf`.
- **Verified Internship Records:** Accurately features the **Thiranex** Data Science Internship (Sep – Oct 2026, 30-day remote project-based internship) and all five resume-backed deliverables.
- **Featured Projects & Modals:**
  - *Predictive Modeling Using Machine Learning* (Logistic Regression, Decision Tree, Random Forest)
  - *Exploratory Data Analysis — Roller Coaster Dataset* (Cleaning, anomaly checks, correlations)
  - *Real-World Retail Analytics* (Transaction data, KPI generation, sales insights)
  - Accessible modal dialogs with escape key handling, methodology breakdowns, and illustrative architectural workflows.
- **Genuine Social Channels & Contacts:**
  - Email: `khujarati@gmail.com` with one-click clipboard copy + direct `mailto:` handler
  - Phone: `+91-6363254632` with `tel:` protocol link
  - LinkedIn: `https://linkedin.com/in/kavya-h-205752392`
  - GitHub: `https://github.com/kavya-cod`
  - Resume PDF: Downloadable link directly referencing authentic `public/Kavya_Resume.pdf`
- **Transparent Form Validation:** Client-side input validation clearly alerts the user that direct dispatch is unconfigured without an external API server, preventing deceptive "message sent" states.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 with custom dark editorial tokens
- **Typography:** Space Grotesk (Headings) & Inter (Body)
- **Icons:** Lucide React & custom SVG brand icons
- **Architecture:** Centralized configuration in `src/data/portfolio.ts`

---

## 📁 Project Structure

```text
kavya-portfolio/
├── implementation.md          # Implementation blueprint & source of truth
├── Kavya_Resume.pdf           # Original resume document
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration with Tailwind CSS plugin
├── public/
│   ├── favicon.svg            # Custom geometric high-tech monogram favicon
│   └── Kavya_Resume.pdf       # Public asset for resume viewing & downloading
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile menu drawer & status
│   │   ├── Hero.tsx           # Hero section with interactive SVG neural visualization
│   │   ├── About.tsx          # Educational context, specialization & competencies
│   │   ├── Experience.tsx     # Thiranex Data Science internship timeline
│   │   ├── Projects.tsx       # 3 featured project cards with detail interactions
│   │   ├── ProjectModal.tsx   # Accessible deep-dive modal dialog
│   │   ├── Skills.tsx         # Categorized skills matrix (no arbitrary percentage bars)
│   │   ├── Education.tsx      # Formal degree records (A.J. Institute)
│   │   ├── Certifications.tsx # Simplilearn certifications with certificate codes
│   │   ├── Coursework.tsx     # Academic coursework & core strengths
│   │   ├── Contact.tsx        # Direct contact channels, copy-email, and message form
│   │   ├── Footer.tsx         # Text logo, links, dynamic copyright year
│   │   └── Icons.tsx          # Brand SVG icons (LinkedIn, GitHub)
│   ├── data/
│   │   └── portfolio.ts       # Centralized single source of truth for portfolio data
│   ├── App.tsx                # Main container & scroll tracking
│   ├── index.css              # Global styles, fonts, design tokens, and scrollbars
│   └── main.tsx               # Entry root
└── README.md                  # Project overview and instructions
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18+ recommended; tested on v22.14)
- npm (v9+ recommended; tested on v10.9)

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit the local development URL (typically `http://localhost:5173/`).

### 3. Build for Production

```bash
npm run build
```

The optimized static assets will be emitted to the `dist/` directory, ready to deploy.

### 4. Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Customization & Updating

To customize or add new projects, skills, or certifications, edit `src/data/portfolio.ts`:

- **Update Profile & Socials:** Modify `portfolioData.profile`.
- **Toggle Opportunities Status:** Change `portfolioData.profile.isOpenToOpportunities` (`true` or `false`).
- **Add / Edit Projects:** Append to the `portfolioData.projects` array. If an authentic GitHub repository URL becomes available, assign it to `githubUrl` and the button will automatically appear.
- **Add Certifications:** Add to `portfolioData.certifications` with genuine certificate codes.

---

## 🚢 Deployment

The output in `dist/` can be deployed directly to:
- **Vercel:** `npx vercel`
- **Netlify:** `npx netlify deploy --prod --dir=dist`
- **GitHub Pages:** Deploy `dist` directory to `gh-pages` branch.
