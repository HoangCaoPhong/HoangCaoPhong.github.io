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
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
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
    height: 1100px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    background: white;
    overflow: hidden;
  }
  
  .cv-embed-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .cv-fallback {
    background-color: #f9f9f9;
    border-left: 4px solid #222;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 3px;
  }
</style>

{% capture cv_path %}{{ site.baseurl }}/files/HoangCaoPhong_CV.pdf{% endcapture %}

<div class="cv-viewer-container">
  <h1>Curriculum Vitae</h1>
  
  <div class="cv-controls">
    <a href="{{ cv_path }}" download class="cv-btn"> Download PDF</a>
    <a href="{{ cv_path }}" target="_blank" class="cv-btn"> Open Fullscreen</a>
  </div>

  <div class="cv-embed-wrapper">
    <iframe 
      src="{{ cv_path }}#toolbar=1&navpanes=0&zoom=77"
      allow="fullscreen">
    </iframe>
  </div>

  <div class="cv-fallback">
    <p><strong>Lýu ?:</strong> N?u PDF không hi?n th?, vui l?ng <a href="{{ cv_path }}" target="_blank">t?i xu?ng tr?c ti?p</a>.</p>
  </div>
</div>
