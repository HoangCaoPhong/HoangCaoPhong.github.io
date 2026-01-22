---
layout: default
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<style>
  .cv-viewer-container {
    width: 100%;
    margin: 2rem 0;
  }
  
  .cv-controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  
  .cv-btn {
    padding: 0.75rem 1.5rem;
    background-color: #222;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
  }
  
  .cv-btn:hover {
    background-color: #444;
  }
  
  .cv-embed-wrapper {
    width: 100%;
    height: 900px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background: white;
  }
  
  .cv-embed-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
  }
  
  .cv-fallback {
    background-color: #f9f9f9;
    border-left: 4px solid #222;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 3px;
  }
</style>

<div class="cv-viewer-container">
  <h1>Curriculum Vitae</h1>
  
  <div class="cv-controls">
    <a href="/files/HoangCaoPhong_CV.pdf" download class="cv-btn"> Download PDF</a>
    <a href="/files/HoangCaoPhong_CV.pdf" target="_blank" class="cv-btn"> Open Fullscreen</a>
  </div>

  <div class="cv-embed-wrapper">
    <iframe 
      src="/files/HoangCaoPhong_CV.pdf#toolbar=1&navpanes=0&view=FitH"
      allow="fullscreen">
    </iframe>
  </div>

  <div class="cv-fallback">
    <p><strong>Lưu ý:</strong> Nếu PDF không hiển thị, vui lòng <a href="/files/HoangCaoPhong_CV.pdf" target="_blank">tải xuống trực tiếp</a>.</p>
  </div>
</div>
