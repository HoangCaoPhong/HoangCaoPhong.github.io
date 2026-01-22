---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

## AI & Systems Projects

---

### WindyAI: Constrained Travel Optimization System

**Problem:** Generate optimal travel itineraries that satisfy multiple constraints including time, budget, spatial preferences, and user interests.

**Technical Approach:** 
Formulated as a constrained optimization problem solved via greedy heuristic with lookahead mechanism. Implemented multi-factor POI scoring function integrating preference signals. Developed ResNet-based CNN (PyTorch) for image-based landmark recognition with complete computer vision inference pipeline (preprocessing, model inference, top-K prediction). Integrated auxiliary AI services for route estimation, weather-aware adjustment, and LLM-powered chatbot assistance.

**Contribution:** 
Led team of five under Scrum methodology. Designed optimization formulation and heuristic algorithm. Implemented image recognition module. Developed end-to-end AI decision support system architecture. Analyzed heuristic limitations with potential extensions toward reinforcement learning approaches.

**Keywords:** Constrained Optimization  Computer Vision  Deep Learning  PyTorch  AI Systems  Heuristic Search  Decision Support

**Timeline:** Sep 2025  Dec 2025

---

### Vietnamese Facial Emotion Recognition System

**Problem:** Develop real-time facial emotion recognition optimized for Vietnamese subjects while addressing dataset bias inherent in Western-centric emotion recognition models (FER2013).

**Technical Approach:** 
CNN architecture with OpenCV for real-time inference. Applied transfer learning with selective layer freezing and low learning-rate optimization for fine-tuning. Implemented Vietnamese facial dataset preprocessing and bias analysis pipeline. Evaluated performance via accuracy metrics and confusion matrices across emotion classes.

**Contribution:** 
Designed and implemented real-time FER system. Conducted systematic analysis of dataset bias in existing FER models. Developed fine-tuning pipeline accounting for distribution shift. Applied transfer learning techniques for dataset-limited training. Identified limitations related to dataset scale and cultural expression variance.

**Keywords:** Computer Vision  Deep Learning  Transfer Learning  Dataset Bias  Facial Analysis  Real-Time Systems

**Timeline:** Dec 2025  Ongoing

---

### MindMeetingAI: Multimodal Meeting Intelligence Platform

**Problem:** Automate meeting transcription, summarization, and semantic question-answering with privacy-preserving analysis for Vietnamese meetings.

**Technical Approach:** 
Vietnamese ASR using OpenAI Whisper with transcript normalization pipeline. Implemented Retrieval-Augmented Generation (RAG) using sentence embeddings and vector database (ChromaDB). Integrated local LLM inference (LLaMA3 via Ollama) for privacy-preserving semantic analysis. Designed system for end-to-end meeting intelligence with embedded knowledge retrieval.

**Contribution:** 
Architected complete AI system pipeline. Integrated Vietnamese ASR with preprocessing normalization. Designed RAG system with semantic search over meeting transcripts. Implemented privacy-preserving local LLM analysis. Framed system as applied research study of RAG effectiveness in meeting intelligence context.

**Keywords:** Automatic Speech Recognition  NLP Pipelines  Retrieval-Augmented Generation  LLM Systems  Semantic Search  Sentence Transformers  Vector Databases  Privacy-Preserving AI

**Timeline:** Sep 2025  Dec 2025

---

### RTSP/RTP Real-Time Video Streaming Server

**Problem:** Design and implement robust real-time video streaming system handling network constraints and ensuring stable playback under variable bandwidth conditions.

**Technical Approach:** 
Implemented RTSP (Real Time Streaming Protocol) over TCP for session control with state machine supporting SETUP, PLAY, PAUSE, TEARDOWN commands (RFC 2326 compliance). Developed RTP (Real-time Transport Protocol) over UDP for media delivery with RFC 3550-compliant 12-byte headers. Designed MJPEG frame fragmentation to handle HD video under UDP MTU constraints. Implemented client-side frame buffering mechanism for latency-stability trade-off.

**Contribution:** 
Designed clientserver architecture. Implemented RTSP state machine and session control. Engineered bit-level RTP packet encoding and packetization. Developed MJPEG frame fragmentation algorithm. Designed adaptive frame buffering mechanism. Analyzed latency-buffering trade-offs and playback stability constraints.

**Keywords:** RTSP  RTP  Real-Time Streaming  Network Protocols  ClientServer Architecture  Bit-Level Encoding  UDP/TCP  Media Delivery

**Timeline:** Sep 2025  Dec 2025

---

### MAYBAO: E-Commerce Platform

**Problem:** Build a complete e-commerce platform for clothing retail with secure transaction processing and content protection.

**Technical Approach:** 
Built on WordPress with WooCommerce for e-commerce foundation. Implemented responsive design, user authentication, product catalog, and shopping cart. Integrated QR code payment system. Applied SSL encryption for secure communication. Integrated Sucuri Security plugin and invisible watermark technology for content protection.

**Contribution:** 
Led team of four using Scrum methodology. Developed complete e-commerce website with core features. Enhanced security infrastructure with SSL and security plugins. Implemented content protection mechanisms.

**Keywords:** Web Development  E-Commerce  WordPress  WooCommerce  Security  Payment Integration

**Timeline:** Sep 2024  Dec 2024

---

### Poker Simulator Game

**Problem:** Develop multi-mode poker game with functional AI opponents and core game mechanics.

**Technical Approach:** 
Implemented in C++ with modular architecture supporting multiple game modes: PvP, PvE, Single Card Duel, Three Card Poker. Developed card shuffling algorithm and hand ranking algorithm. Designed AI-driven opponent logic. Applied version control via Git.

**Contribution:** 
Led team of three. Designed and implemented complete game mechanics. Engineered card shuffling and hand ranking algorithms. Developed AI opponent logic. Applied SCRUM methodology with weekly coordination.

**Keywords:** C++  Game Development  AI Logic  Algorithms  Software Architecture

**Timeline:** Oct 2024  Nov 2024

---

### Reverse Engineering & Binary Analysis Project

**Problem:** Analyze and crack CrackMe binaries through reverse engineering to extract serial validation algorithms.

**Technical Approach:** 
Binary disassembly using OllyDbg and static analysis with IDA Pro. Reconstructed serial validation algorithms through x86 assembly analysis. Developed C++ keygen tools implementing extracted validation logic.

**Contribution:** 
Led team of two. Disassembled and analyzed CrackMe executables. Reconstructed proprietary serial validation algorithms. Developed functional keygen tools. Authored technical documentation on x86 disassembly and debugging workflows.

**Keywords:** Reverse Engineering  Binary Analysis  x86 Assembly  System Security  Executable Analysis

**Timeline:** Aug 2025  Sep 2025

---

## Research Interests

Current research focus areas:

- **Computer Vision:** Facial analysis and representation learning for culturally diverse, real-world settings
- **Deep Learning on Limited Data:** Training on underrepresented and Vietnamese-centric datasets with emphasis on data efficiency and generalization
- **Multimodal AI:** VisionLanguage and SpeechText systems for information fusion and human-centered applications
- **Applied Optimization:** Heuristic and learning-based methods for AI-driven decision-making, planning, and resource allocation
- **AI Systems Ethics:** Robustness, bias analysis, and societal impact considerations in production AI systems