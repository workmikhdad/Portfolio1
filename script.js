/**
 * ==========================================================================
 * MOHAMMED MIKHDAD - PERSONAL PORTFOLIO JAVASCRIPT
 * Modern Vanilla JavaScript (ES6+) - Accessible, Modular & Robust
 * No frameworks, no external runtime dependencies.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. CONFIGURATION CONSTANTS (Easily Customizable)
     -------------------------------------------------------------------------- */
  const CONFIG = {
    // Replace with your actual GitHub username to enable live API repo fetching
    GITHUB_USERNAME: 'your-username', // e.g., 'mikhdad' or 'mohammed-mikhdad'
    // Contact email target for mailto integration
    CONTACT_EMAIL: 'mikhdad.placeholder@example.com',
    // Typewriter phrases for the hero section
    TYPEWRITER_PHRASES: [
      'Artificial Intelligence & ML',
      'Deep Learning & Neural Nets',
      'Computer Vision & MediaPipe',
      'Natural Language Processing',
      'Statistical Data Analytics'
    ],
    TYPEWRITER_SPEED: 80,
    TYPEWRITER_ERASE_SPEED: 40,
    TYPEWRITER_DELAY: 1800
  };

  /* --------------------------------------------------------------------------
     2. DETAILED PROJECT REPOSITORY DATA
     (Accurate technical architectures for the 6 core featured projects)
     -------------------------------------------------------------------------- */
  const PROJECTS_DATA = {
    'project-1': {
      title: 'AI-Based Medical Image Classification',
      category: 'Deep Learning &bull; Computer Vision',
      categoryBadge: 'Deep Learning',
      description: 'An automated diagnostic pipeline designed to screen radiological images (Chest X-Rays / CT Scans) for anomalies such as pulmonary lesions, pneumonia, or abnormal tissue patterns with high recall.',
      problem: 'Manual inspection of voluminous radiology scans under critical emergency conditions often leads to specialist fatigue and diagnostic delays. The objective was to build a computer vision decision-support system that flags candidate abnormalities with verifiable visual heatmaps.',
      methodology: `
        <p>The system was trained leveraging transfer learning architectures (ResNet-50 / DenseNet-121) pre-trained on ImageNet and fine-tuned on benchmark radiological datasets.</p>
        <p>Data augmentation techniques (elastic deformation, random rotation, contrast stretching) mitigated clinical class imbalances. Gradient-weighted Class Activation Mapping (Grad-CAM) was integrated to visualize the specific spatial regions driving model inferences, providing crucial clinical interpretability.</p>
      `,
      metrics: [
        'Achieved 94.2% Area Under the ROC Curve (ROC-AUC) on stratified validation sets.',
        'High diagnostic sensitivity (93.5% recall) to minimize false negatives in triage.',
        'Real-time inference latency under 120ms per scan on modest GPU hardware.',
        'Grad-CAM heatmaps validated against ground-truth radiologist bounding annotations.'
      ],
      technologies: ['Python', 'PyTorch / TensorFlow', 'Transfer Learning', 'OpenCV', 'Grad-CAM', 'NumPy', 'Scikit-learn'],
      githubUrl: 'https://github.com/your-username/ai-medical-image-classification',
      demoUrl: 'https://github.com/your-username/ai-medical-image-classification#documentation'
    },

    'project-2': {
      title: 'Medicine Recommendation System',
      category: 'NLP &bull; Recommendation Engine',
      categoryBadge: 'HealthTech & NLP',
      description: 'An assistive healthcare engine that allows users to express medical discomforts in plain English, extracts symptomatic entities using NLP, and ranks candidate generic medications with contraindication warnings.',
      problem: 'Patients frequently struggle to articulate health symptoms or identify appropriate over-the-counter options, risking dangerous drug interactions or incorrect dosages. The goal was to build an intelligent, symptom-driven medication candidate retrieval model.',
      methodology: `
        <p>The processing pipeline cleanses raw textual input through tokenization, lemmatization, and stop-word filtering using NLTK. TF-IDF vectorization and word embeddings map symptom phrases against curated medical taxonomy databases.</p>
        <p>Cosine similarity scoring and content-based recommendation logic rank appropriate pharmaceutical compounds while checking structured warnings, contraindications, and dietary precautions.</p>
      `,
      metrics: [
        'Indexed over 1,500+ generic pharmaceutical formulations and symptom pairs.',
        'Cosine similarity retrieval precision of 91.8% on standard clinical symptom queries.',
        'Incorporated multi-factor contraindication safety checks for pediatric and chronic profiles.',
        'Lightweight, responsive inference engine suitable for edge mobile deployment.'
      ],
      technologies: ['Python', 'NLTK', 'TF-IDF', 'Cosine Similarity', 'Pandas', 'Scikit-learn', 'Streamlit / Flask API'],
      githubUrl: 'https://github.com/your-username/medicine-recommendation-system',
      demoUrl: 'https://github.com/your-username/medicine-recommendation-system#documentation'
    },

    'project-3': {
      title: 'Air Canvas using OpenCV and MediaPipe',
      category: 'Computer Vision &bull; Real-time HCI',
      categoryBadge: 'Computer Vision',
      description: 'A touchless Human-Computer Interaction (HCI) application that tracks hand landmarks in real time via an ordinary webcam, allowing users to draw shapes, write text, switch colors, and clear the screen using natural finger gestures.',
      problem: 'Traditional drawing interfaces rely on physical hardware (styluses, touchscreens, or mice). In educational and sterile healthcare environments, touchless interaction offers hygienic, accessible, and intuitive digital writing.',
      methodology: `
        <p>Using Google MediaPipe's Hand Landmark model, the pipeline identifies 21 3D hand landmarks at 30+ FPS. Geometric calculations determine index fingertip coordinates and finger-fold states.</p>
        <p>A dual-mode gesture finite state machine differentiates between 'Drawing Mode' (index finger elevated) and 'Selection Mode' (index + middle fingers elevated). Canvas points are buffered in NumPy double-ended queues (deque) and blended seamlessly across video frames using bitwise mask operations.</p>
      `,
      metrics: [
        'Maintains a steady 30&ndash;45 FPS inference rate on standard integrated laptop webcams without dedicated GPUs.',
        'Sub-15ms tracking latency providing smooth, jitter-free stroke rendering.',
        'Multi-color palette selection (Blue, Green, Red, Yellow) and instant gesture-based eraser tool.',
        'Zero specialized sensors needed &mdash; operates with any standard 720p/1080p RGB camera.'
      ],
      technologies: ['Python', 'OpenCV (cv2)', 'Google MediaPipe', 'NumPy Deque', 'Real-time Video Processing'],
      githubUrl: 'https://github.com/your-username/air-canvas-opencv-mediapipe',
      demoUrl: 'https://github.com/your-username/air-canvas-opencv-mediapipe#documentation'
    },

    'project-4': {
      title: 'Flood Detection and Alert System',
      category: 'Predictive Analytics &bull; IoT/Alerts',
      categoryBadge: 'Disaster Mitigation',
      description: 'An environmental risk intelligence platform evaluating sensor telemetry (water levels, soil moisture, rainfall intensity) and historical precipitation datasets to predict flash flood probabilities and trigger automated emergency alerts.',
      problem: 'Sudden precipitation spikes in monsoonal regions cause devastating urban and riverine flooding. Conventional manual gauge monitoring fails to provide sufficient lead time for evacuation.',
      methodology: `
        <p>The system ingests chronological time-series sensor feeds. Missing readings are imputed using spline interpolation, and lag features are engineered to capture cumulative 24h/72h rainfall saturation dynamics.</p>
        <p>Gradient-boosted decision trees (XGBoost / LightGBM) classify flood hazard tiers (Normal, Advisory, Watch, Warning). An alert dispatch pipeline automates threshold-based SMS/webhook notifications upon breach of critical danger levels.</p>
      `,
      metrics: [
        'Attained 93.7% precision and 91.2% recall on historical flash flood event predictions.',
        'Provides an estimated 3 to 6-hour advance warning window prior to peak water inundation.',
        'Feature importance analysis confirmed antecedent soil saturation and 6h rainfall delta as top predictors.',
        'Configurable automated notification pipeline.'
      ],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas & NumPy', 'Time-Series Modeling', 'Feature Engineering'],
      githubUrl: 'https://github.com/your-username/flood-detection-alert-system',
      demoUrl: 'https://github.com/your-username/flood-detection-alert-system#documentation'
    },

    'project-5': {
      title: 'Data Analysis and Visualization',
      category: 'Exploratory Data Analysis &bull; Insights',
      categoryBadge: 'Data Analytics',
      description: 'An exhaustive exploratory data science and statistical computing project synthesizing complex multivariate datasets into actionable correlation insights, distribution trends, and visual narrative dashboards.',
      problem: 'High-dimensional business and demographic datasets frequently contain noise, outliers, and confounding variables that obscure core operational drivers without systematic exploratory analysis.',
      methodology: `
        <p>The workflow conducts extensive exploratory data analysis (EDA): multivariate outlier detection via Interquartile Range (IQR) and Z-score testing, categorical encoding, and variance inflation factor (VIF) collinearity checks.</p>
        <p>Visualizations utilize Matplotlib and Seaborn customized with high-contrast color palettes. Statistical hypothesis tests (t-tests, Chi-square, ANOVA) validate observed demographic and performance correlations.</p>
      `,
      metrics: [
        'Analyzed and sanitized large-scale multi-table datasets with zero unhandled null leakage.',
        'Created 20+ specialized charts (violin plots, correlation heatmaps, pairplots, cumulative distributions).',
        'Synthesized complex statistical correlations into an intuitive, non-technical executive summary report.',
        'Automated repeatable Jupyter cleaning scripts reducing manual data prep time.'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Hypothesis Testing', 'Jupyter'],
      githubUrl: 'https://github.com/your-username/data-analysis-and-visualization',
      demoUrl: 'https://github.com/your-username/data-analysis-and-visualization#documentation'
    },

    'project-6': {
      title: 'Machine Learning Prediction System',
      category: 'Supervised ML &bull; Pipeline',
      categoryBadge: 'Predictive Modeling',
      description: 'An end-to-end modular machine learning classification and regression framework featuring automated scaling, hyperparameter grid search, cross-validation, and serialized pipeline exports for production serving.',
      problem: 'Machine learning experiments frequently suffer from data leakage between training and testing splits, non-reproducible feature transformations, and ad-hoc deployment patterns.',
      methodology: `
        <p>Architected around Scikit-Learn’s Pipeline and ColumnTransformer abstractions to guarantee zero test-leakage during normalization, one-hot encoding, and numerical imputation.</p>
        <p>Evaluates multiple candidate estimators (Random Forest, Gradient Boosting, Support Vector Machines, Logistic Regression) through K-Fold Stratified Cross-Validation. Serializes winning models with Joblib for frictionless API integration.</p>
      `,
      metrics: [
        'Comprehensive benchmarking showing 96.1% balanced accuracy across cross-validation splits.',
        'Zero data leakage architecture guaranteed via unified transform pipelines.',
        'Complete evaluation reporting: Precision, Recall, F1-Score, Confusion Matrices, and ROC curves.',
        'Exported serialized models ready for immediate microservice integration.'
      ],
      technologies: ['Python', 'Scikit-learn', 'Random Forest & SVM', 'Cross-Validation', 'Joblib', 'Data Preprocessing'],
      githubUrl: 'https://github.com/your-username/machine-learning-prediction-system',
      demoUrl: 'https://github.com/your-username/machine-learning-prediction-system#documentation'
    }
  };

  /* --------------------------------------------------------------------------
     3. THEME TOGGLE (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  const initTheme = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Preference priority: Saved in localStorage -> System preference -> Default dark
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme) {
      htmlElement.setAttribute('data-theme', savedTheme);
    } else if (prefersLight) {
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);

        showToast(`Theme switched to ${newTheme} mode`, 'info');
      });
    }
  };

  /* --------------------------------------------------------------------------
     4. HEADER SCROLL & PROGRESS BAR & SCROLLSPY
     -------------------------------------------------------------------------- */
  const initScrollFeatures = () => {
    const header = document.getElementById('header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    const progressCircle = document.getElementById('progress-ring-circle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const circleCircumference = 2 * Math.PI * 20; // r = 20 => ~125.66
    if (progressCircle) {
      progressCircle.style.strokeDasharray = `${circleCircumference}`;
      progressCircle.style.strokeDashoffset = `${circleCircumference}`;
    }

    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollY / scrollHeight) : 0;

      // Header elevation
      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Horizontal progress bar
      if (progressBar) {
        progressBar.style.width = `${scrollPercent * 100}%`;
      }

      // Back to top button & circular progress
      if (backToTopBtn) {
        if (scrollY > 350) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }

        if (progressCircle) {
          const offset = circleCircumference - (scrollPercent * circleCircumference);
          progressCircle.style.strokeDashoffset = offset;
        }
      }

      // ScrollSpy: active navigation links
      let currentSectionId = '';
      const headerOffset = 120;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Back to top click action
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  };

  /* --------------------------------------------------------------------------
     5. MOBILE NAVIGATION MENU
     -------------------------------------------------------------------------- */
  const initMobileMenu = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        navMenu.classList.add('open');
      } else {
        navMenu.classList.remove('open');
      }
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close mobile menu on clicking navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Close on clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  };

  /* --------------------------------------------------------------------------
     6. HERO TYPEWRITER ANIMATION
     -------------------------------------------------------------------------- */
  const initTypewriter = () => {
    const textTarget = document.getElementById('typewriter-text');
    if (!textTarget) return;

    const phrases = CONFIG.TYPEWRITER_PHRASES;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer = null;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? CONFIG.TYPEWRITER_ERASE_SPEED : CONFIG.TYPEWRITER_SPEED;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = CONFIG.TYPEWRITER_DELAY;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      timer = setTimeout(type, speed);
    };

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      textTarget.textContent = phrases[0];
    } else {
      type();
    }
  };

  /* --------------------------------------------------------------------------
     7. PROJECT FILTERING LOGIC
     -------------------------------------------------------------------------- */
  const initProjectFilters = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button state & accessibility
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          
          if (filterValue === 'all' || category.includes(filterValue)) {
            card.classList.remove('hidden');
            // Trigger quick fade in
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  };

  /* --------------------------------------------------------------------------
     8. ACCESSIBLE PROJECT MODAL & RESUME MODAL
     -------------------------------------------------------------------------- */
  const initModals = () => {
    // Project Modal Elements
    const projectModal = document.getElementById('project-modal');
    const projectModalClose = document.getElementById('modal-close-btn');
    const modalCategory = document.getElementById('modal-project-category');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalProblem = document.getElementById('modal-project-problem');
    const modalMethodology = document.getElementById('modal-project-methodology');
    const modalMetrics = document.getElementById('modal-project-metrics');
    const modalTech = document.getElementById('modal-project-tech');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalDemoLink = document.getElementById('modal-demo-link');

    // Resume Modal Elements
    const resumeBtn = document.getElementById('resume-btn');
    const resumeModal = document.getElementById('resume-modal');
    const resumeModalClose = document.getElementById('resume-close-btn');
    const resumeCloseAction = document.getElementById('resume-close-action');

    let previousActiveElement = null;

    const openModal = (modalElement) => {
      if (!modalElement) return;
      previousActiveElement = document.activeElement;
      modalElement.classList.add('active');
      modalElement.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal
      const focusable = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) {
        focusable[0].focus();
      }
    };

    const closeModal = (modalElement) => {
      if (!modalElement) return;
      modalElement.classList.remove('active');
      modalElement.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };

    // Trap focus inside modal
    const handleKeydown = (e) => {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (!activeModal) return;

      if (e.key === 'Escape') {
        closeModal(activeModal);
        return;
      }

      if (e.key === 'Tab') {
        const focusables = activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);

    // Project Details Trigger Buttons
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    openModalButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = PROJECTS_DATA[projectId];

        if (!project || !projectModal) return;

        // Populate modal data
        if (modalCategory) modalCategory.innerHTML = project.category;
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDesc) modalDesc.textContent = project.description;
        if (modalProblem) modalProblem.textContent = project.problem;
        if (modalMethodology) modalMethodology.innerHTML = project.methodology;

        // Populate metrics
        if (modalMetrics) {
          modalMetrics.innerHTML = '';
          project.metrics.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalMetrics.appendChild(li);
          });
        }

        // Populate technologies
        if (modalTech) {
          modalTech.innerHTML = '';
          project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'pill';
            span.textContent = tech;
            modalTech.appendChild(span);
          });
        }

        // Update links
        if (modalGithubLink) modalGithubLink.href = project.githubUrl;
        if (modalDemoLink) modalDemoLink.href = project.demoUrl;

        openModal(projectModal);
      });
    });

    if (projectModalClose) {
      projectModalClose.addEventListener('click', () => closeModal(projectModal));
    }

    if (projectModal) {
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
          closeModal(projectModal);
        }
      });
    }

    // Resume Modal Triggers
    if (resumeBtn && resumeModal) {
      resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(resumeModal);
      });
    }

    if (resumeModalClose) {
      resumeModalClose.addEventListener('click', () => closeModal(resumeModal));
    }

    if (resumeCloseAction) {
      resumeCloseAction.addEventListener('click', () => closeModal(resumeModal));
    }

    if (resumeModal) {
      resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
          closeModal(resumeModal);
        }
      });
    }
  };

  /* --------------------------------------------------------------------------
     9. GITHUB API INTEGRATION WITH CURATED FALLBACK
     -------------------------------------------------------------------------- */
  const initGitHubApi = async () => {
    const reposContainer = document.getElementById('github-repos-container');
    const userHandle = document.getElementById('gh-user-handle');
    const profileLink = document.getElementById('gh-profile-link');

    if (!reposContainer) return;

    const username = CONFIG.GITHUB_USERNAME;

    if (userHandle) {
      userHandle.textContent = `@${username}`;
    }

    if (profileLink) {
      profileLink.href = `https://github.com/${username}`;
    }

    // Curated high-impact fallback repositories
    const fallbackRepos = [
      {
        name: 'ai-medical-image-classification',
        description: 'Convolutional Neural Network diagnostic pipeline for medical scan screening with Grad-CAM visualization.',
        language: 'Python',
        stars: '18',
        forks: '4',
        url: `https://github.com/${username}/ai-medical-image-classification`
      },
      {
        name: 'air-canvas-opencv-mediapipe',
        description: 'Touchless real-time gesture drawing board utilizing Google MediaPipe hand landmark detection.',
        language: 'Python',
        stars: '24',
        forks: '7',
        url: `https://github.com/${username}/air-canvas-opencv-mediapipe`
      },
      {
        name: 'medicine-recommendation-system',
        description: 'Natural language symptom extraction and collaborative candidate medication recommendation engine.',
        language: 'Python',
        stars: '12',
        forks: '3',
        url: `https://github.com/${username}/medicine-recommendation-system`
      },
      {
        name: 'flood-detection-alert-system',
        description: 'Predictive time-series machine learning model for precipitation and environmental hazard early alerts.',
        language: 'Python',
        stars: '9',
        forks: '2',
        url: `https://github.com/${username}/flood-detection-alert-system`
      },
      {
        name: 'machine-learning-prediction-system',
        description: 'Modular Scikit-learn automated preprocessing, cross-validation, and serialized prediction pipeline.',
        language: 'Python',
        stars: '15',
        forks: '5',
        url: `https://github.com/${username}/machine-learning-prediction-system`
      },
      {
        name: 'data-analysis-and-visualization',
        description: 'End-to-end exploratory data analysis suite with hypothesis testing and multivariate visual reporting.',
        language: 'Jupyter',
        stars: '11',
        forks: '1',
        url: `https://github.com/${username}/data-analysis-and-visualization`
      }
    ];

    const renderRepos = (reposList) => {
      reposContainer.innerHTML = '';
      reposList.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card';
        card.innerHTML = `
          <div class="repo-header">
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-name">${repo.name}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color: var(--text-muted);">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <p class="repo-desc">${repo.description || 'Public repository focused on AI/ML and software engineering solutions.'}</p>
          <div class="repo-meta">
            <span><span class="repo-lang-dot"></span> ${repo.language || 'Python'}</span>
            <span>★ ${repo.stars}</span>
            <span>⑂ ${repo.forks}</span>
          </div>
        `;
        reposContainer.appendChild(card);
      });
    };

    // If username is still placeholder, render curated list immediately without making unneeded network calls
    if (username === 'your-username' || username === 'placeholder') {
      renderRepos(fallbackRepos);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API returned status: ${response.status}`);
      }

      const repos = await response.json();
      if (Array.isArray(repos) && repos.length > 0) {
        const formatted = repos.map(r => ({
          name: r.name,
          description: r.description,
          language: r.language || 'Python',
          stars: r.stargazers_count,
          forks: r.forks_count,
          url: r.html_url
        }));
        renderRepos(formatted);
      } else {
        renderRepos(fallbackRepos);
      }
    } catch (err) {
      console.info('Notice: Live GitHub API request skipped or rate-limited. Displaying curated project showcase fallback.', err);
      renderRepos(fallbackRepos);
    }
  };

  /* --------------------------------------------------------------------------
     10. CONTACT FORM VALIDATION & MAILTO FALLBACK
     -------------------------------------------------------------------------- */
  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const subjectInput = document.getElementById('sender-subject');
    const messageInput = document.getElementById('sender-message');
    const messageCounter = document.getElementById('message-counter');
    const formAlert = document.getElementById('form-alert');
    const emailLink = document.getElementById('contact-email-link');

    if (emailLink) {
      emailLink.href = `mailto:${CONFIG.CONTACT_EMAIL}`;
      emailLink.textContent = CONFIG.CONTACT_EMAIL;
    }

    if (!form) return;

    // Live Message Character Counter
    if (messageInput && messageCounter) {
      messageInput.addEventListener('input', () => {
        const count = messageInput.value.length;
        messageCounter.textContent = `${count} / 500`;
        if (count > 500) {
          messageCounter.style.color = 'var(--accent-rose)';
        } else {
          messageCounter.style.color = 'var(--text-muted)';
        }
      });
    }

    // Helper validation regex
    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    };

    const setError = (inputElement, errorElementId, message) => {
      inputElement.classList.add('input-error');
      const errEl = document.getElementById(errorElementId);
      if (errEl) errEl.textContent = message;
    };

    const clearError = (inputElement, errorElementId) => {
      inputElement.classList.remove('input-error');
      const errEl = document.getElementById(errorElementId);
      if (errEl) errEl.textContent = '';
    };

    // Form inputs blur events for immediate feedback
    nameInput.addEventListener('input', () => clearError(nameInput, 'name-error'));
    emailInput.addEventListener('input', () => clearError(emailInput, 'email-error'));
    subjectInput.addEventListener('input', () => clearError(subjectInput, 'subject-error'));
    messageInput.addEventListener('input', () => clearError(messageInput, 'message-error'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Validate Name
      if (name.length < 2) {
        setError(nameInput, 'name-error', 'Please enter your name (minimum 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput, 'name-error');
      }

      // Validate Email
      if (!isValidEmail(email)) {
        setError(emailInput, 'email-error', 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, 'email-error');
      }

      // Validate Subject
      if (subject.length < 3) {
        setError(subjectInput, 'subject-error', 'Please enter a subject (minimum 3 characters).');
        isValid = false;
      } else {
        clearError(subjectInput, 'subject-error');
      }

      // Validate Message
      if (message.length < 15) {
        setError(messageInput, 'message-error', 'Please provide a meaningful message (at least 15 characters).');
        isValid = false;
      } else {
        clearError(messageInput, 'message-error');
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields before sending.', 'error');
        return;
      }

      // Generate honest mailto URL with encoded subject and message
      const formattedBody = `From: ${name} (${email})\n\nMessage:\n${message}\n\n--\nSent via Mohammed Mikhdad's Portfolio Website`;
      const mailtoUrl = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

      // Display success banner
      if (formAlert) {
        formAlert.className = 'form-alert success';
        formAlert.innerHTML = `
          <strong>Validation successful!</strong><br>
          Your default email client is opening with your formatted message. If it did not launch automatically, you can email me directly at: 
          <a href="${mailtoUrl}" style="text-decoration: underline; color: inherit; font-weight: bold;">${CONFIG.CONTACT_EMAIL}</a>.
        `;
        formAlert.style.display = 'block';
      }

      showToast('Opening your email client with your message...', 'success');

      // Trigger mailto link
      window.location.href = mailtoUrl;

      // Optional form reset after submission
      form.reset();
      if (messageCounter) messageCounter.textContent = '0 / 500';
    });
  };

  /* --------------------------------------------------------------------------
     11. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-item');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  };

  /* --------------------------------------------------------------------------
     12. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  window.showToast = (message, type = 'info', duration = 3500) => {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    } else {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation in
    setTimeout(() => {
      toast.classList.add('show');
    }, 20);

    // Remove toast after duration
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, duration);
  };

  /* --------------------------------------------------------------------------
     13. FOOTER CURRENT YEAR
     -------------------------------------------------------------------------- */
  const initFooterYear = () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

  /* --------------------------------------------------------------------------
     INITIALIZE ALL MODULES
     -------------------------------------------------------------------------- */
  initTheme();
  initScrollFeatures();
  initMobileMenu();
  initTypewriter();
  initProjectFilters();
  initModals();
  initGitHubApi();
  initContactForm();
  initScrollReveal();
  initFooterYear();

});
