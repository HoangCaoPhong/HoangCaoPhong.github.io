---
layout: archive
title: "Works"
permalink: /works/
author_profile: true
---

<style>
  .works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }
  
  /* Light mode */
  .work-card {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 1.5rem;
    background: #fff;
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
    color: #1a1a1a;
    font-weight: 600;
  }
  
  .work-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin: 0.75rem 0;
  }
  
  .work-tech {
    font-size: 0.85rem;
    color: #666;
    font-family: "Monaco", monospace;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e8e8e8;
  }
  
  .tech-tag {
    display: inline-block;
    background: #f5f5f5;
    color: #333;
    padding: 0.25rem 0.6rem;
    margin: 0.25rem 0.25rem 0.25rem 0;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  /* Sidebar styles - Light mode */
  .project-sidebar {
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background: #fff;
    border-left: 1px solid #ddd;
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
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
    color: #333;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar-close:hover {
    color: #000;
  }

  .sidebar-title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #1a1a1a;
    font-weight: 600;
    padding-right: 2rem;
  }

  .sidebar-section {
    margin-bottom: 1.5rem;
  }

  .sidebar-section-title {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: #666;
    font-weight: 600;
    margin-bottom: 0.75rem;
    letter-spacing: 0.05em;
  }

  .sidebar-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .sidebar-tech {
    font-size: 0.85rem;
    color: #666;
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

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .work-card {
      background: #333;
      border-color: #555;
    }

    .work-card:hover {
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
      border-color: #666;
    }

    .work-card h3 {
      color: #f0f0f0;
    }

    .work-description {
      color: #bbb;
    }

    .work-tech {
      color: #999;
      border-top-color: #555;
    }

    .tech-tag {
      background: #444;
      color: #ddd;
    }

    /* Dark mode sidebar */
    .project-sidebar {
      background: #2a2a2a;
      border-left: 1px solid #444;
      box-shadow: -2px 0 8px rgba(0,0,0,0.4);
    }

    .sidebar-close {
      color: #bbb;
    }

    .sidebar-close:hover {
      color: #fff;
    }

    .sidebar-title {
      color: #f0f0f0;
    }

    .sidebar-section-title {
      color: #999;
    }

    .sidebar-description {
      color: #bbb;
    }

    .sidebar-tech {
      color: #999;
    }

    .sidebar-link {
      background: #0ea1c5;
      color: #fff;
    }

    .sidebar-link:hover {
      background: #0d7a94;
    }
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .project-sidebar {
      width: 100%;
    }
  }
</style>

## Projects

<div class="works-grid">

  <div class="work-card" data-project="windyai">
    <h3>WindyAI  Smart Travel Planner</h3>
    <p class="work-description">
      Generate optimal travel itineraries under multiple constraints (time, budget, spatial, preferences).
    </p>
    <div class="work-tech">
      PyTorch  ResNet  CNN  Optimization  Heuristics
    </div>
  </div>

  <div class="work-card" data-project="emotion">
    <h3>Vietnamese Facial Emotion Recognition</h3>
    <p class="work-description">
      Facial emotion recognition system optimized for Vietnamese subjects, addressing dataset bias in Western-centric models.
    </p>
    <div class="work-tech">
      CNN  OpenCV  Transfer Learning  Computer Vision
    </div>
  </div>

  <div class="work-card" data-project="mindmeeting">
    <h3>MindMeetingAI  Intelligent Meeting Assistant</h3>
    <p class="work-description">
      Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis.
    </p>
    <div class="work-tech">
      Whisper  RAG  ChromaDB  LLaMA3  NLP
    </div>
  </div>

  <div class="work-card" data-project="rtsp">
    <h3>RTSP/RTP Real-Time Video Streaming Server</h3>
    <p class="work-description">
      Real-time video streaming system handling network constraints and variable bandwidth conditions.
    </p>
    <div class="work-tech">
      RTSP  RTP  UDP/TCP  Network Protocols  Streaming
    </div>
  </div>

  <div class="work-card" data-project="maybao">
    <h3>MAYBAO  E-commerce Clothing Website</h3>
    <p class="work-description">
      Complete e-commerce platform for clothing retail with secure transactions and content protection.
    </p>
    <div class="work-tech">
      WordPress  WooCommerce  SSL  Payment Integration
    </div>
  </div>

  <div class="work-card" data-project="poker">
    <h3>Poker Simulator Game</h3>
    <p class="work-description">
      Multi-mode poker game with functional AI opponents and core game mechanics.
    </p>
    <div class="work-tech">
      C++  Game Development  Algorithms  AI Logic
    </div>
  </div>

  <div class="work-card" data-project="reverseng">
    <h3>Reverse Engineering  Cracking Project</h3>
    <p class="work-description">
      Analyze and crack CrackMe binaries to extract serial validation algorithms through reverse engineering.
    </p>
    <div class="work-tech">
      OllyDbg  IDA Pro  x86 Assembly  Binary Analysis
    </div>
  </div>

</div>

<!-- Sidebar Overlay -->
<div class="sidebar-overlay" id="sidebarOverlay"></div>

<!-- Project Sidebar -->
<aside class="project-sidebar" id="projectSidebar">
  <button class="sidebar-close" id="sidebarClose">&times;</button>
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
    <a href="#" id="sidebarGithubLink" class="sidebar-link" target="_blank">View on GitHub</a>
  </div>
</aside>

<script>
  // Project data
  const projectData = {
    windyai: {
      title: 'WindyAI  Smart Travel Planner',
      description: 'Generate optimal travel itineraries under multiple constraints (time, budget, spatial, preferences). Leverages constrained optimization with greedy heuristics, ResNet-based landmark recognition, and auxiliary service integration.',
      tech: ['PyTorch', 'ResNet', 'CNN', 'Optimization', 'Heuristics', 'Computer Vision'],
      github: 'https://github.com'
    },
    emotion: {
      title: 'Vietnamese Facial Emotion Recognition',
      description: 'CNN-based facial emotion recognition system optimized for Vietnamese subjects. Addresses dataset bias in Western-centric models through transfer learning and comprehensive bias analysis.',
      tech: ['CNN', 'OpenCV', 'Transfer Learning', 'Computer Vision', 'TensorFlow'],
      github: 'https://github.com'
    },
    mindmeeting: {
      title: 'MindMeetingAI  Intelligent Meeting Assistant',
      description: 'Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis. Integrates Vietnamese ASR, RAG with vector embeddings, and local LLM inference.',
      tech: ['Whisper', 'RAG', 'ChromaDB', 'LLaMA3', 'NLP', 'Ollama'],
      github: 'https://github.com'
    },
    rtsp: {
      title: 'RTSP/RTP Real-Time Video Streaming Server',
      description: 'Real-time video streaming system handling network constraints and variable bandwidth. Implements RTSP state machine, RTP packet encoding, and adaptive frame buffering.',
      tech: ['RTSP', 'RTP', 'UDP/TCP', 'Network Protocols', 'Streaming', 'MJPEG'],
      github: 'https://github.com'
    },
    maybao: {
      title: 'MAYBAO  E-commerce Clothing Website',
      description: 'Complete e-commerce platform for clothing retail with secure transactions and content protection. Features responsive design, SSL encryption, payment integration, and invisible watermarking.',
      tech: ['WordPress', 'WooCommerce', 'SSL', 'Payment Integration', 'Security'],
      github: 'https://github.com'
    },
    poker: {
      title: 'Poker Simulator Game',
      description: 'Multi-mode poker game implementation with functional AI opponents and core game mechanics. Includes card shuffling algorithms, hand ranking logic, and AI decision-making.',
      tech: ['C++', 'Game Development', 'Algorithms', 'AI Logic', 'Git'],
      github: 'https://github.com'
    },
    reverseng: {
      title: 'Reverse Engineering  Cracking Project',
      description: 'Binary analysis and CrackMe disassembly to extract serial validation algorithms. Includes static analysis, x86 assembly reconstruction, and keygen tool development.',
      tech: ['OllyDbg', 'IDA Pro', 'x86 Assembly', 'Binary Analysis', 'C++'],
      github: 'https://github.com'
    }
  };

  const sidebar = document.getElementById('projectSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const closeBtn = document.getElementById('sidebarClose');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarDescription = document.getElementById('sidebarDescription');
  const sidebarTechList = document.getElementById('sidebarTechList');
  const sidebarGithubLink = document.getElementById('sidebarGithubLink');

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
          .map(tech => \<span class="tech-tag">\</span>\)
          .join('');
        
        // Update GitHub link
        sidebarGithubLink.href = project.github;
        
        // Show sidebar
        sidebar.classList.add('active');
        overlay.classList.add('active');
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
