---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

## Projects

---

### WindyAI  Smart Travel Planner

**Problem:** Generate optimal travel itineraries under multiple constraints (time, budget, spatial, preferences).

**Technical Approach:** 
Constrained optimization formulation solved via greedy heuristic with lookahead. Multi-factor POI scoring function. ResNet-based CNN (PyTorch) for image-based landmark recognition. Integration of auxiliary services for route estimation and weather adjustment.

**Contribution:** 
Formulated optimization problem. Designed heuristic algorithm. Implemented image recognition module with computer vision inference pipeline. Integrated AI decision support system architecture.

---

### Vietnamese Facial Emotion Recognition

**Problem:** Develop facial emotion recognition system optimized for Vietnamese subjects, addressing dataset bias in existing Western-centric models.

**Technical Approach:** 
CNN with OpenCV. Transfer learning with layer freezing and low learning-rate fine-tuning. Bias analysis of FER2013. Performance evaluation via accuracy and confusion matrices.

**Contribution:** 
Designed real-time recognition system. Analyzed dataset bias. Implemented transfer learning pipeline. Evaluated model performance.

---

### MindMeetingAI  Intelligent Meeting Assistant

**Problem:** Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis.

**Technical Approach:** 
Vietnamese ASR using Whisper. Transcript normalization. Retrieval-Augmented Generation (RAG) with sentence embeddings. Vector database (ChromaDB). Local LLM inference (LLaMA3 via Ollama).

**Contribution:** 
Architected system pipeline. Integrated Vietnamese ASR with preprocessing. Designed RAG system with semantic search. Implemented privacy-preserving LLM analysis.

---

### RTSP/RTP-Based Real-Time Video Streaming Server

**Problem:** Implement real-time video streaming system handling network constraints and variable bandwidth conditions.

**Technical Approach:** 
RTSP over TCP for session control with state machine (SETUP, PLAY, PAUSE, TEARDOWN). RTP over UDP for media delivery. MJPEG frame fragmentation. Client-side frame buffering.

**Contribution:** 
Designed clientserver architecture. Implemented RTSP state machine. Engineered RTP packet encoding. Developed MJPEG frame fragmentation. Designed frame buffering mechanism.

---

### MAYBAO  E-commerce Clothing Website

**Problem:** Build complete e-commerce platform for clothing retail with secure transactions and content protection.

**Technical Approach:** 
WordPress with WooCommerce. Responsive design. User authentication. Product catalog and shopping cart. QR code payment integration. SSL encryption. Security plugins. Invisible watermark for content protection.

**Contribution:** 
Developed e-commerce website with core features. Enhanced security infrastructure. Implemented content protection.

---

### Poker Simulator Game

**Problem:** Develop multi-mode poker game with functional AI opponents.

**Technical Approach:** 
C++ implementation with multiple game modes (PvP, PvE, Single Card Duel, Three Card Poker). Card shuffling algorithm. Hand ranking algorithm. AI opponent logic. Git version control.

**Contribution:** 
Designed and implemented game mechanics. Engineered card shuffling and hand ranking algorithms. Developed AI opponent logic.

---

### Reverse Engineering  Cracking Project

**Problem:** Analyze and crack CrackMe binaries to extract serial validation algorithms.

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