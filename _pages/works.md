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
  
  .work-card {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 1.5rem;
    background: #fafafa;
    transition: box-shadow 0.2s;
  }
  
  .work-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .work-card h3 {
    margin-top: 0;
    font-size: 1.15rem;
    line-height: 1.4;
    color: #222;
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
    border-top: 1px solid #e0e0e0;
  }
  
  .tech-tag {
    display: inline-block;
    background: #f0f0f0;
    padding: 0.25rem 0.6rem;
    margin: 0.25rem 0.25rem 0.25rem 0;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .work-card {
      background: #2d2d2d;
      border-color: #444;
    }

    .work-card h3 {
      color: #222;
    }

    .work-description {
      color: #999;
    }

    .work-tech {
      color: #888;
      border-top-color: #444;
    }

    .tech-tag {
      background: #444;
      color: #aaa;
    }
  }
</style>

## Works

<div class="works-grid">

  <div class="work-card">
    <h3>WindyAI  Smart Travel Planner</h3>
    <p class="work-description">
      Generate optimal travel itineraries under multiple constraints (time, budget, spatial, preferences).
    </p>
    <div class="work-tech">
      PyTorch  ResNet  CNN  Optimization  Heuristics
    </div>
  </div>

  <div class="work-card">
    <h3>Vietnamese Facial Emotion Recognition</h3>
    <p class="work-description">
      Facial emotion recognition system optimized for Vietnamese subjects, addressing dataset bias in Western-centric models.
    </p>
    <div class="work-tech">
      CNN  OpenCV  Transfer Learning  Computer Vision
    </div>
  </div>

  <div class="work-card">
    <h3>MindMeetingAI  Intelligent Meeting Assistant</h3>
    <p class="work-description">
      Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis.
    </p>
    <div class="work-tech">
      Whisper  RAG  ChromaDB  LLaMA3  NLP
    </div>
  </div>

  <div class="work-card">
    <h3>RTSP/RTP Real-Time Video Streaming Server</h3>
    <p class="work-description">
      Real-time video streaming system handling network constraints and variable bandwidth conditions.
    </p>
    <div class="work-tech">
      RTSP  RTP  UDP/TCP  Network Protocols  Streaming
    </div>
  </div>

  <div class="work-card">
    <h3>MAYBAO  E-commerce Clothing Website</h3>
    <p class="work-description">
      Complete e-commerce platform for clothing retail with secure transactions and content protection.
    </p>
    <div class="work-tech">
      WordPress  WooCommerce  SSL  Payment Integration
    </div>
  </div>

  <div class="work-card">
    <h3>Poker Simulator Game</h3>
    <p class="work-description">
      Multi-mode poker game with functional AI opponents and core game mechanics.
    </p>
    <div class="work-tech">
      C++  Game Development  Algorithms  AI Logic
    </div>
  </div>

  <div class="work-card">
    <h3>Reverse Engineering  Cracking Project</h3>
    <p class="work-description">
      Analyze and crack CrackMe binaries to extract serial validation algorithms through reverse engineering.
    </p>
    <div class="work-tech">
      OllyDbg  IDA Pro  x86 Assembly  Binary Analysis
    </div>
  </div>

</div>

---

## Detailed Project Descriptions

### WindyAI  Smart Travel Planner

**Technical Approach:** 
Constrained optimization formulation solved via greedy heuristic with lookahead. Multi-factor POI scoring function. ResNet-based CNN (PyTorch) for image-based landmark recognition. Integration of auxiliary services for route estimation and weather adjustment.

**Contribution:** 
Formulated optimization problem. Designed heuristic algorithm. Implemented image recognition module with computer vision inference pipeline. Integrated AI decision support system architecture.

---

### Vietnamese Facial Emotion Recognition

**Technical Approach:** 
CNN with OpenCV. Transfer learning with layer freezing and low learning-rate fine-tuning. Bias analysis of FER2013. Performance evaluation via accuracy and confusion matrices.

**Contribution:** 
Designed real-time recognition system. Analyzed dataset bias. Implemented transfer learning pipeline. Evaluated model performance.

---

### MindMeetingAI  Intelligent Meeting Assistant

**Technical Approach:** 
Vietnamese ASR using Whisper. Transcript normalization. Retrieval-Augmented Generation (RAG) with sentence embeddings. Vector database (ChromaDB). Local LLM inference (LLaMA3 via Ollama).

**Contribution:** 
Architected system pipeline. Integrated Vietnamese ASR with preprocessing. Designed RAG system with semantic search. Implemented privacy-preserving LLM analysis.

---

### RTSP/RTP-Based Real-Time Video Streaming Server

**Technical Approach:** 
RTSP over TCP for session control with state machine (SETUP, PLAY, PAUSE, TEARDOWN). RTP over UDP for media delivery. MJPEG frame fragmentation. Client-side frame buffering.

**Contribution:** 
Designed clientserver architecture. Implemented RTSP state machine. Engineered RTP packet encoding. Developed MJPEG frame fragmentation. Designed frame buffering mechanism.

---

### MAYBAO  E-commerce Clothing Website

**Technical Approach:** 
WordPress with WooCommerce. Responsive design. User authentication. Product catalog and shopping cart. QR code payment integration. SSL encryption. Security plugins. Invisible watermark for content protection.

**Contribution:** 
Developed e-commerce website with core features. Enhanced security infrastructure. Implemented content protection.

---

### Poker Simulator Game

**Technical Approach:** 
C++ implementation with multiple game modes (PvP, PvE, Single Card Duel, Three Card Poker). Card shuffling algorithm. Hand ranking algorithm. AI opponent logic. Git version control.

**Contribution:** 
Designed and implemented game mechanics. Engineered card shuffling and hand ranking algorithms. Developed AI opponent logic.

---

### Reverse Engineering  Cracking Project

**Technical Approach:** 
Binary disassembly using OllyDbg. Static analysis with IDA Pro. x86 assembly analysis. Serial validation algorithm reconstruction. C++ keygen development.

**Contribution:** 
Disassembled and analyzed CrackMe executables. Reconstructed serial validation algorithms. Developed keygen tools. Documented x86 disassembly and debugging workflows.

---

## Research Interests

- Computer Vision: facial analysis and representation learning in diverse, real-world settings
- Deep Learning: training on underrepresented and Vietnamese-centric datasets with data efficiency focus
- Multimodal AI: VisionLanguage and SpeechText systems for information fusion
- Applied Optimization: heuristic and learning-based methods for AI-driven decision-making and planning
- AI Systems: robustness, bias analysis, and societal impact considerations
