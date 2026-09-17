---
layout: archive
title: "Projects"
permalink: /project/
author_profile: true
---

<style>
  .works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }
  
  /* Cards */
  .work-card {
    border: 1px solid var(--global-border-color);
    border-radius: 6px;
    padding: 1.5rem;
    background: var(--global-bg-color);
    transition: all 0.2s ease;
    cursor: pointer;
  }
  
  .work-card:hover {
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    border-color: #ccc;
  }
  
  .work-card h3 {
    margin-top: 0;
    font-size: 1.15rem;
    line-height: 1.4;
    color: var(--global-text-color);
    font-weight: 600;
  }
  
  .work-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--global-text-color);
    margin: 0.75rem 0;
  }
  
  .work-tech {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    font-family: "Monaco", monospace;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--global-border-color);
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  
  .tech-tag {
    display: inline-block;
    background: var(--global-code-background-color);
    color: var(--global-code-text-color);
    padding: 0.25rem 0.6rem;
    margin: 0.25rem 0.25rem 0.25rem 0;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  /* Project details sidebar */
  .project-sidebar {
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background: var(--global-bg-color);
    border-left: 1px solid var(--global-border-color);
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
    padding: 2rem 1.5rem;
  }

  .project-sidebar.active {
    transform: translateX(0);
  }

  .sidebar-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--global-text-color);
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .sidebar-close:hover {
    color: var(--global-link-color-hover);
  }

  .sidebar-title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: var(--global-text-color);
    font-weight: 600;
    padding-right: 2rem;
  }

  .sidebar-section {
    margin-bottom: 1.5rem;
  }

  .sidebar-section-title {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--global-text-color-light);
    font-weight: 600;
    margin-bottom: 0.75rem;
    letter-spacing: 0.05em;
  }

  .sidebar-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--global-text-color);
    margin-bottom: 1.5rem;
  }

  .sidebar-tech {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  .sidebar-link {
    display: inline-block;
    background: #2f7f93;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
    transition: background 0.2s ease;
  }

  .sidebar-link:hover {
    background: #1e5a6d;
  }

  .sidebar-link[hidden] {
    display: none;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    z-index: 999;
  }

  .sidebar-overlay.active {
    background: rgba(0,0,0,0.3);
    opacity: 1;
    visibility: visible;
  }

  html[data-theme="dark"] .work-card:hover {
    box-shadow: 0 6px 16px rgba(0,0,0,0.3);
  }

  .work-tech .tech-tag {
    margin: 0;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .project-sidebar {
      width: 100%;
    }
  }
</style>

<div class="works-grid">

  <div class="work-card" data-project="breast-cancer" role="button" tabindex="0">
    <h3>Breast Cancer Classification</h3>
    <p class="work-description">
      Interpretable breast cancer classification with a from-scratch Decision Tree and an interactive FastAPI-React demo.
    </p>
    <div class="work-tech">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Decision Trees</span>
      <span class="tech-tag">scikit-learn</span>
      <span class="tech-tag">FastAPI</span>
      <span class="tech-tag">React</span>
    </div>
  </div>

  <div class="work-card" data-project="windyai" role="button" tabindex="0">
    <h3>WindyAI - Smart Travel Planner</h3>
    <p class="work-description">
      Generate optimal travel itineraries under multiple constraints (time, budget, spatial, preferences).
    </p>
    <div class="work-tech">
      <span class="tech-tag">PyTorch</span>
      <span class="tech-tag">ResNet</span>
      <span class="tech-tag">CNN</span>
      <span class="tech-tag">Optimization</span>
      <span class="tech-tag">Heuristics</span>
    </div>
  </div>

  <div class="work-card" data-project="emotion" role="button" tabindex="0">
    <h3>Vietnamese Facial Emotion Recognition</h3>
    <p class="work-description">
      Facial emotion recognition system optimized for Vietnamese subjects, addressing dataset bias in Western-centric models.
    </p>
    <div class="work-tech">
      <span class="tech-tag">CNN</span>
      <span class="tech-tag">OpenCV</span>
      <span class="tech-tag">Transfer Learning</span>
      <span class="tech-tag">Computer Vision</span>
    </div>
  </div>

  <div class="work-card" data-project="mindmeeting" role="button" tabindex="0">
    <h3>MindMeetingAI - Intelligent Meeting Assistant</h3>
    <p class="work-description">
      Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis.
    </p>
    <div class="work-tech">
      <span class="tech-tag">Whisper</span>
      <span class="tech-tag">RAG</span>
      <span class="tech-tag">LLM Systems</span>
      <span class="tech-tag">NLP</span>
    </div>
  </div>

  <div class="work-card" data-project="rtsp" role="button" tabindex="0">
    <h3>RTSP/RTP Real-Time Video Streaming Server</h3>
    <p class="work-description">
      Real-time video streaming system handling network constraints and variable bandwidth conditions.
    </p>
    <div class="work-tech">
      <span class="tech-tag">RTSP</span>
      <span class="tech-tag">RTP</span>
      <span class="tech-tag">UDP/TCP</span>
      <span class="tech-tag">Streaming</span>
    </div>
  </div>

  <div class="work-card" data-project="maybao" role="button" tabindex="0">
    <h3>MAYBAO  E-commerce Clothing Website</h3>
    <p class="work-description">
      Complete e-commerce platform for clothing retail with secure transactions and content protection.
    </p>
    <div class="work-tech">
      <span class="tech-tag">WordPress</span>
      <span class="tech-tag">WooCommerce</span>
      <span class="tech-tag">SSL</span>
      <span class="tech-tag">Payments</span>
    </div>
  </div>

  <div class="work-card" data-project="poker" role="button" tabindex="0">
    <h3>Poker Simulator Game</h3>
    <p class="work-description">
      Multi-mode poker game with functional AI opponents and core game mechanics.
    </p>
    <div class="work-tech">
      <span class="tech-tag">C++</span>
      <span class="tech-tag">Game Development</span>
      <span class="tech-tag">Algorithms</span>
      <span class="tech-tag">AI Logic</span>
    </div>
  </div>

  <div class="work-card" data-project="reverseng" role="button" tabindex="0">
    <h3>Reverse Engineering  Cracking Project</h3>
    <p class="work-description">
      Analyze and crack CrackMe binaries to extract serial validation algorithms through reverse engineering.
    </p>
    <div class="work-tech">
      <span class="tech-tag">OllyDbg</span>
      <span class="tech-tag">IDA Pro</span>
      <span class="tech-tag">x86 Assembly</span>
      <span class="tech-tag">Binary Analysis</span>
    </div>
  </div>

</div>

<!-- Sidebar Overlay -->
<div class="sidebar-overlay" id="sidebarOverlay"></div>

<!-- Project Sidebar -->
<aside class="project-sidebar" id="projectSidebar">
  <button class="sidebar-close" id="sidebarClose" aria-label="Close project details">&times;</button>
  <h2 class="sidebar-title" id="sidebarTitle">Project Title</h2>
  
  <div class="sidebar-section">
    <div class="sidebar-section-title">Description</div>
    <p class="sidebar-description" id="sidebarDescription">Description goes here</p>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-title">Technologies</div>
    <div class="tech-list" id="sidebarTechList"></div>
  </div>

  <div class="sidebar-section">
    <a href="#" id="sidebarGithubLink" class="sidebar-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    <a href="#" id="sidebarWebsiteLink" class="sidebar-link" target="_blank" rel="noopener noreferrer" hidden>Visit Website</a>
  </div>
</aside>

<script>
  // Project data
  const projectData = {
    'breast-cancer': {
      title: 'Breast Cancer Classification',
      description: 'Led a five-person team in building an interpretable breast cancer classification system and interactive ML demo. Implemented Decision Trees from scratch with Gini and entropy splitting, evaluated depth-performance trade-offs with stratified 5-fold cross-validation on 569 samples, and helped deliver 93.86% accuracy on 114 held-out samples with 16.7% fewer leaves than the baseline.',
      tech: ['Python', 'Decision Trees', 'Gini/Entropy', 'scikit-learn', 'FastAPI', 'React'],
      github: 'https://github.com/HoangCaoPhong/breast-cancer-machine-learning',
      website: 'http://bc-ml.zapto.org'
    },
    windyai: {
      title: 'WindyAI - Smart Travel Planner',
      description: 'Led a five-person team in designing an end-to-end AI decision support system for travel planning. The system models time, budget, spatial, and preference constraints; combines a Greedy + Lookahead heuristic with multi-factor POI scoring; and feeds ResNet-based landmark recognition into downstream planning decisions.',
      tech: ['PyTorch', 'ResNet', 'CNN', 'Optimization', 'Heuristics', 'Computer Vision'],
      github: 'https://github.com/HoangCaoPhong/WindyAI-Smart_Travel_Planner'
    },
    emotion: {
      title: 'Vietnamese Facial Emotion Recognition',
      description: 'Developed a real-time CNN and OpenCV facial emotion recognition system for Vietnamese faces. The project studies cross-cultural generalization and FER2013 dataset bias, then adapts pre-trained models through transfer learning, layer freezing, and low learning-rate fine-tuning.',
      tech: ['CNN', 'OpenCV', 'Transfer Learning', 'Computer Vision', 'FER2013'],
      github: 'https://github.com/HoangCaoPhong/realtime-facial-emotion-recognition-vietnamese-faces'
    },
    mindmeeting: {
      title: 'MindMeetingAI - Intelligent Meeting Assistant',
      description: 'Designed an end-to-end NLP system for Vietnamese meeting transcription, structured summarization, and semantic question answering. It combines Whisper ASR, transcript normalization, sentence embeddings, a vector database, RAG, and local LLM inference for privacy-preserving analysis.',
      tech: ['Whisper', 'RAG', 'LLM Systems', 'Sentence Transformers', 'Vector Databases', 'NLP'],
      github: 'https://github.com/HoangCaoPhong/MindMeetingAI'
    },
    rtsp: {
      title: 'RTSP/RTP Real-Time Video Streaming Server',
      description: 'Real-time video streaming system handling network constraints and variable bandwidth. Implements RTSP state machine, RTP packet encoding, and adaptive frame buffering.',
      tech: ['RTSP', 'RTP', 'UDP/TCP', 'Network Protocols', 'Streaming', 'MJPEG'],
      github: null
    },
    maybao: {
      title: 'MAYBAO  E-commerce Clothing Website',
      description: 'Complete e-commerce platform for clothing retail with secure transactions and content protection. Features responsive design, SSL encryption, payment integration, and invisible watermarking.',
      tech: ['WordPress', 'WooCommerce', 'SSL', 'Payment Integration', 'Security'],
      github: null
    },
    poker: {
      title: 'Poker Simulator Game',
      description: 'Multi-mode poker game implementation with functional AI opponents and core game mechanics. Includes card shuffling algorithms, hand ranking logic, and AI decision-making.',
      tech: ['C++', 'Game Development', 'Algorithms', 'AI Logic', 'Git'],
      github: null
    },
    reverseng: {
      title: 'Reverse Engineering  Cracking Project',
      description: 'Binary analysis and CrackMe disassembly to extract serial validation algorithms. Includes static analysis, x86 assembly reconstruction, and keygen tool development.',
      tech: ['OllyDbg', 'IDA Pro', 'x86 Assembly', 'Binary Analysis', 'C++'],
      github: null
    }
  };

  const sidebar = document.getElementById('projectSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const closeBtn = document.getElementById('sidebarClose');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarDescription = document.getElementById('sidebarDescription');
  const sidebarTechList = document.getElementById('sidebarTechList');
  const sidebarGithubLink = document.getElementById('sidebarGithubLink');
  const sidebarWebsiteLink = document.getElementById('sidebarWebsiteLink');

  // Move fixed layers outside the page stacking context so they stay above the masthead.
  document.body.appendChild(overlay);
  document.body.appendChild(sidebar);

  // Add click listeners to all project cards
  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const project = projectData[projectId];
      
      if (project) {
        // Update sidebar content
        sidebarTitle.textContent = project.title;
        sidebarDescription.textContent = project.description;
        
        // Update tech list
        sidebarTechList.innerHTML = project.tech
          .map(tech => `<span class="tech-tag">${tech}</span>`)
          .join('');
        
        // Show a repository link only when a real project URL is available
        if (project.github) {
          sidebarGithubLink.href = project.github;
          sidebarGithubLink.hidden = false;
        } else {
          sidebarGithubLink.hidden = true;
        }

        // Show a live demo link when the project provides one
        if (project.website) {
          sidebarWebsiteLink.href = project.website;
          sidebarWebsiteLink.hidden = false;
        } else {
          sidebarWebsiteLink.hidden = true;
        }
        
        // Show sidebar
        sidebar.classList.add('active');
        overlay.classList.add('active');
      }
    });

    card.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  });

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Close on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeSidebar();
    }
  });
</script>

---

# EXPERIENCES & ACTIVITIES

1) Google Developer Group on Campus – HCMUS | MC & Graphic Designer | Oct 2024 – Ongoing
   - Served as MC for technical workshops and community events, introducing sessions and coordinating program flow.
   - Designed visuals for events, workshops, and social media using Illustrator, Photoshop, GIMP, and Premiere.
   - Collaborated with developers and organizers to align technical presentations with branding and audience engagement.

2) Library of University of Science – VNUHCM | Member of Technical Department | Oct 2024 – Ongoing
   - Set up audiovisual systems and online streaming for library events.
   - Produced videos, newsletters, and social media updates to boost student engagement.
   - Conducted data analysis and research to improve library services.

3) Strong PC – Student Laptop Service & Optimization | Co-founder, Management Board | Sep 2025 – Ongoing
   - Co-founded and led a student-run laptop support project providing maintenance and optimization services.
   - Managed operations, task assignments, and financial planning across technical and communication teams.
   - Directed internal documentation, workflow development, and collaboration planning with the University Library.

---

## Research Interests

- Computer Vision: facial analysis and representation learning in diverse, real-world settings
- Deep Learning: training on underrepresented and Vietnamese-centric datasets with data efficiency focus
- Multimodal AI: VisionLanguage and SpeechText systems for information fusion
- Applied Optimization: heuristic and learning-based methods for AI-driven decision-making and planning
- AI Systems: robustness, bias analysis, and societal impact considerations
