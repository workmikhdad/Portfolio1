## some changes done 
# Mohammed Mikhdad &bull; Personal AI/ML Portfolio Website

A modern, responsive, high-performance personal portfolio built exclusively with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**. No external frameworks (No React, Vue, Angular, Bootstrap, or Tailwind), zero build steps, and zero server dependencies &mdash; perfectly optimized for immediate deployment on **GitHub Pages**.

Designed with a **dark navy / charcoal theme**, **electric cyan, blue, and violet accents**, **subtle glassmorphism**, and **smooth interactive animations**.

---

## 🚀 Live Demo & Preview
- **Target GitHub Pages URL**: `https://<your-username>.github.io/<repository-name>/`
- **Offline / Local Execution**: Compatible with any modern web browser without internet access (all icons and fonts are embedded or gracefully fall back).

---

## ✨ Features & Architecture

### 1. Visual Design & Theme
- **Theme Palette**: Deep Navy / Charcoal (`#0a0e17`) with vibrant Electric Cyan (`#38bdf8`), Electric Blue (`#3b82f6`), and Electric Violet (`#8b5cf6`).
- **Glassmorphism**: Backdrop blur with translucent gradients, borders, and ambient glow meshes.
- **Theme Switcher**: Instant Dark Mode / Light Mode toggle with `localStorage` preference persistence.
- **Smooth Animations**: IntersectionObserver scroll-reveal animations respecting `prefers-reduced-motion` for accessibility.

### 2. Navigation & Experience
- **Sticky Glass Header**: Elevated blurred navbar on scroll with active section scrollspy.
- **Scroll Progress Ring & Bar**: Real-time reading progress indicators at the top and on the back-to-top floating button.
- **Dynamic Hero Typewriter**: Animated typing effects showcasing key specializations.
- **Interactive Modals**: Accessible dialog modals for detailed project case studies and resume preview with focus-trapping and `Escape` key listeners.

### 3. Categorized Technical Competencies
- **AI & Machine Learning**: Scikit-Learn, Supervised/Unsupervised Learning, Ensemble Methods, XGBoost, Model Evaluation (ROC-AUC).
- **Deep Learning & NLP**: PyTorch, TensorFlow, CNNs, Transfer Learning, NLTK, TF-IDF, Cosine Similarity, Grad-CAM.
- **Computer Vision & MediaPipe**: OpenCV (`cv2`), 21-hand landmark detection, real-time video processing, gesture tracking.
- **Data Analytics & Mathematics**: NumPy, Pandas, Matplotlib, Seaborn, EDA, Statistical Hypothesis Testing.
- **Languages & Developer Tooling**: Python, C++, Java, Linux / Bash, Git, GitHub, VS Code.

### 4. 6 Featured Core Projects
1. **AI-Based Medical Image Classification**: Convolutional Neural Network pipeline for diagnostic radiology screening with Grad-CAM interpretability heatmaps.
2. **Medicine Recommendation System**: Intelligent healthcare assistant using NLP symptom extraction and collaborative candidate medication matching.
3. **Air Canvas using OpenCV and MediaPipe**: Touchless real-time virtual canvas tracking 21 hand landmarks for gesture-based drawing and color selection.
4. **Flood Detection and Alert System**: Machine learning time-series platform assessing environmental and sensor telemetry to trigger early warning disaster notifications.
5. **Data Analysis and Visualization**: Statistical exploratory data analysis and visualization dashboard uncovering complex multivariate patterns.
6. **Machine Learning Prediction System**: Modular end-to-end predictive pipeline with automated scaling, cross-validation, and serialized Joblib model serving.

### 5. Open Source GitHub API Integration
- Public GitHub REST API integration with real-time repository card rendering.
- Intelligent fallback mechanism displaying curated projects when offline, rate-limited, or when using placeholder usernames.

### 6. Interactive Contact System
- Comprehensive client-side form validation (name, RFC-compliant email, subject, message length).
- Honest, privacy-friendly `mailto:` generator that pre-fills formatted emails into the user's native email client.
- Direct contact cards and professional profile links (GitHub, LinkedIn, Kaggle).

---

## 📁 File Structure

```plaintext
profalio/
├── index.html                           # Semantic HTML5 structure & SEO metadata
├── style.css                            # Modular CSS3 styling, design tokens & responsive media queries
├── script.js                            # Pure Vanilla JS (ES6+) interactivity & API handlers
├── README.md                            # Documentation, customization guide & deployment instructions
└── assets/
    ├── Mohammed_Mikhdad_Resume.pdf      # Sample resume PDF (replace with your official copy)
    └── og-preview.png                   # (Optional) Social media preview card
```

---

## 🛠️ Customization Guide

Personalizing your portfolio takes just a few minutes:

### 1. Update Contact Details & GitHub Username
Open [`script.js`](file:///home/mikhdadmiku/Desktop/intern/tasks/task6/profalio/script.js) and edit the `CONFIG` object at the top of the file:
```javascript
const CONFIG = {
  GITHUB_USERNAME: 'your-actual-github-username', // Enter your real GitHub handle
  CONTACT_EMAIL: 'your-email@example.com',        // Enter your primary email
  ...
};
```

### 2. Update Social & Education Placeholders
In [`index.html`](file:///home/mikhdadmiku/Desktop/intern/tasks/task6/profalio/index.html):
- Search for `your-username` and replace with your profile handles (GitHub, LinkedIn, Kaggle).
- Search for `[Location Placeholder]` and `[2021 – 2024 Placeholder]` to update your Bachelor's degree and location details.

### 3. Add Your Official Resume PDF
Save your official resume as `assets/Mohammed_Mikhdad_Resume.pdf` (or update the filename in `index.html` and `script.js`).

---

## 🌐 How to Run Locally

You can run the portfolio in any of the following simple ways:

### Option A: Using Python (Recommended)
Open your terminal in this directory and start a local HTTP server:
```bash
cd /home/mikhdadmiku/Desktop/intern/tasks/task6/profalio
python3 -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

### Option B: Direct File Open
You can also open [`index.html`](file:///home/mikhdadmiku/Desktop/intern/tasks/task6/profalio/index.html) directly in any modern browser:
```bash
xdg-open index.html
# Or open file:///home/mikhdadmiku/Desktop/intern/tasks/task6/profalio/index.html
```

---

## 🚀 GitHub Pages Deployment Guide

Deploying your portfolio to GitHub Pages is completely free and takes less than 2 minutes:

1. **Initialize Git & Commit**:
   ```bash
   cd /home/mikhdadmiku/Desktop/intern/tasks/task6/profalio
   git init
   git add .
   git commit -m "Initial commit: Mohammed Mikhdad Portfolio"
   ```

2. **Push to GitHub**:
   - Create a new public repository on GitHub (e.g., `portfolio` or `<your-username>.github.io`).
   - Run:
     ```bash
     git remote add origin https://github.com/<your-username>/<your-repo-name>.git
     git branch -M main
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - Navigate to **Settings** &gt; **Pages** in your GitHub repository.
   - Under **Build and deployment** &gt; **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Your website will be live in ~60 seconds at `https://<your-username>.github.io/<your-repo-name>/`!

---

## ♿ Accessibility & Performance Standards
- **WCAG 2.1 AA Compliant**: High contrast ratios in both dark and light modes.
- **Screen Reader Friendly**: Semantic elements (`<main>`, `<header>`, `<section>`, `<article>`, `<nav>`) with ARIA roles and labels.
- **Keyboard Navigable**: Visible focus indicators, skip-to-content link, and modal focus trapping.
- **Reduced Motion**: Full support for users with vestibular motion sensitivity via `@media (prefers-reduced-motion: reduce)`.
- **Zero Horizontal Overflow**: Guaranteed across viewports from 320px smartphones to 4K displays.
