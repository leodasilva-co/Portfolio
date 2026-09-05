'use client'

import { ArrowUpRight, ChevronRight, Sparkles, Layers, Code2, Check, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import './Hero.css'

export function HeroSection() {
  return (
    <section className="hero-chrono-wrap" id="top">
      <div className="hero-main-panel">
        {/* Subtle Dot Grid Background */}
        <div className="hero-dot-bg" aria-hidden="true" />

        {/* Central Hero Content */}
        <div className="hero-center-content">
          <div className="hero-top-badge-wrap">
            <div className="hero-app-icon" title="Leo da Silva Studio">
              <img src="/apple-icon.png" alt="Leo da Silva" />
            </div>
            <div className="hero-status-pill">
              <span className="status-pulse-dot" />
              <span>Disponível para projectos · 2026</span>
            </div>
          </div>

          <h1>
            Ideias claras.
            <span className="hero-highlight">Sistemas que funcionam.</span>
          </h1>

          <p className="hero-subtitle">
            Desenho e construo produtos digitais que transformam problemas complexos em experiências simples, úteis e memoráveis.
          </p>

          <div className="hero-actions-row">
            <a className="hero-btn-primary" href="#trabalho">
              Explorar trabalho <ArrowUpRight size={16} />
            </a>
            <a className="hero-btn-secondary" href="#contacto">
              Vamos conversar <ChevronRight size={16} />
            </a>
          </div>

          <div className="hero-trust-bar">
            <span><Sparkles size={13} style={{ color: '#f9c970' }} /> Design de Produto</span>
            <span><Layers size={13} style={{ color: '#6366f1' }} /> Design Systems</span>
            <span><Code2 size={13} style={{ color: '#10b981' }} /> Engenharia Front-end</span>
          </div>
        </div>

        {/* Hero Image — Right Side */}
        <div className="hero-image-wrap">
          <div className="hero-image-glow" aria-hidden="true" />
          <div className="hero-image-container">
            <Image
              src="/images/leo-hero2.png"
              alt="Leo da Silva — Product Designer & Front-end Engineer"
              width={620}
              height={780}
              priority
              className="hero-photo"
              style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
            />
          </div>
          {/* Floating badge on image */}
          <div className="hero-image-badge">
            <span className="status-pulse-dot" />
            <span>Leo da Silva</span>
          </div>
        </div>

        {/* Floating Graphic Elements Layer */}
        <div className="hero-floating-elements-layer">
          {/* 1. LADO ESQUERDO (Top-Left): Post-it Note */}
          <div className="hero-floating-card float-card-postit">
            <div className="postit-pin" />
            <div className="postit-content">
              <span className="postit-tag">Filosofia</span>
              <span>"A formação é a capacidade de reagir a situações da vida!"</span>
              <span className="postit-signature">— Dr. Jonh G. Hibber</span>
            </div>
          </div>

          {/* 2. LADO ESQUERDO (Mid-Left): Card Branco Sobreposto */}
          <div className="hero-floating-card float-card-ui-sync">
            <div className="ui-sync-inner">
              <div className="ui-sync-icon">
                <Layers size={18} />
              </div>
              <div className="ui-sync-text">
                <h4>Design Tokens</h4>
                <p>100% Componentes em Sync</p>
              </div>
            </div>
            <div className="ui-sync-badge">
              <Check size={11} /> v2.4 Pronto
            </div>
          </div>

          {/* 3. LADO DIREITO (Top-Right): Reminder / Deep Work Card */}
          <div className="hero-floating-card float-card-reminder">
            <div className="reminder-header">
              <div className="mini-clock-icon">
                <div className="mini-clock-face">
                  <div className="clock-hand-h" />
                  <div className="clock-hand-m" />
                </div>
              </div>
              <div className="reminder-header-text">
                <span>Sessão de Foco</span>
                <strong>09:30 — 12:00</strong>
              </div>
            </div>
            <div className="reminder-task-box">
              <div className="reminder-task-title">Arquitetura Frontend & Next.js</div>
              <div className="reminder-status-row">
                <span className="reminder-dot" />
                <span>Em execução · 25m restantes</span>
              </div>
            </div>
          </div>

          {/* 4. PARTE INFERIOR ESQUERDA: Mini Dashboard */}
          <div className="hero-floating-card float-card-dashboard">
            <div className="dash-window-header">
              <div className="dash-window-dots">
                <span /><span /><span />
              </div>
              <span className="dash-label">Lighthouse Score</span>
            </div>
            <div className="dash-metric-row">
              <span className="dash-metric-big">99.8%</span>
              <span className="dash-metric-badge">
                <TrendingUp size={11} /> +42% Speed
              </span>
            </div>
            <p className="dash-metric-desc">Performance & Core Web Vitals</p>
            <div className="dash-progress-track">
              <div className="dash-progress-bar" />
            </div>
            <div className="dash-tags-row">
              <span>LCP 0.4s</span>
              <span>FID 2ms</span>
              <span>A11y 100%</span>
            </div>
          </div>

          {/* 5. PARTE INFERIOR DIREITA: Integrations */}
          <div className="hero-floating-card float-card-integrations">
            <div className="integrations-top">
              <span className="integrations-pill-tag">+15 Stacks & Tools</span>
            </div>
            <p className="integrations-title">Ecossistema integrado de ponta a ponta</p>
            <div className="integrations-icons-stack">
              {/* React */}
              <div className="tech-icon-pill" title="React 19">
                <svg width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                  <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
                  <g stroke="#00d8ff" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
              {/* Next.js */}
              <div className="tech-icon-pill" title="Next.js">
                <svg width="17" height="17" viewBox="0 0 180 180" fill="none">
                  <circle cx="90" cy="90" r="90" fill="#101417" />
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.299V69.333L139.565 164.538C143.084 162.387 146.408 160.038 149.508 157.52Z" fill="white" />
                  <rect x="115" y="54" width="12" height="72" fill="white" />
                </svg>
              </div>
              {/* TypeScript */}
              <div className="tech-icon-pill" title="TypeScript">
                <svg width="18" height="18" viewBox="0 0 128 128">
                  <rect width="128" height="128" rx="20" fill="#3178c6" />
                  <path d="M70.5 73.8h11.2c1.7 0 3.3.4 4.7 1.3 1.4.9 2.1 2.3 2.1 4.2 0 1.2-.4 2.2-1.2 3.1-.8.9-1.8 1.6-3 2.1-1.2.5-2.6.9-4.2 1.2-1.6.3-3.4.6-5.4 1-2.2.4-4.2.9-6 1.6-1.8.7-3.3 1.6-4.5 2.7-1.2 1.1-2.1 2.5-2.7 4.1-.6 1.6-.9 3.5-.9 5.8 0 2.6.5 4.9 1.6 7 1.1 2.1 2.5 3.8 4.4 5.2 1.9 1.4 4.1 2.4 6.7 3.1 2.6.7 5.3 1 8.3 1 3.2 0 6.2-.4 9.1-1.3 2.9-.9 5.5-2.1 7.8-3.7l-4.5-9.6c-2 1.3-4.1 2.3-6.4 3-2.3.7-4.6 1.1-7 1.1-1.7 0-3.3-.3-4.8-1-1.5-.7-2.3-1.9-2.3-3.7 0-1.2.4-2.2 1.2-3 .8-.8 1.9-1.5 3.2-2 1.3-.5 2.8-.9 4.5-1.3 1.7-.4 3.5-.7 5.4-1.1 2.2-.4 4.3-.9 6.2-1.6 1.9-.7 3.5-1.6 4.8-2.8 1.3-1.2 2.3-2.6 3-4.3.7-1.7 1.1-3.7 1.1-6.1 0-2.6-.5-4.8-1.5-6.8-1-2-2.4-3.6-4.2-4.9-1.8-1.3-3.9-2.2-6.4-2.9-2.5-.7-5.2-1-8.1-1-3 0-5.8.4-8.4 1.1-2.6.7-5 1.8-7.2 3.1l4.2 9.2zM28.4 108.9h13.2V58.7H58V48.1H12v10.6h16.4v50.2z" fill="#fff" transform="scale(0.85) translate(10, 10)" />
                </svg>
              </div>
              {/* Figma */}
              <div className="tech-icon-pill" title="Figma">
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                </svg>
              </div>
              {/* Tailwind */}
              <div className="tech-icon-pill" title="Tailwind CSS">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M9 13.5C10.5 7.5 15 6 18 10.5C16.5 13.5 15 15 13.5 15C10.5 15 9.75 18 9 22.5C7.5 28.5 3 30 0 25.5C1.5 22.5 3 21 4.5 21C7.5 21 8.25 18 9 13.5ZM21 4.5C22.5 -1.5 27 -3 30 1.5C28.5 4.5 27 6 25.5 6C22.5 6 21.75 9 21 13.5C19.5 19.5 15 21 12 16.5C13.5 13.5 15 12 16.5 12C19.5 12 20.25 9 21 4.5Z" fill="#38bdf8" transform="scale(0.8) translate(4, 4)" />
                </svg>
              </div>
              {/* +9 More */}
              <div className="tech-icon-pill tech-more" title="+9 outras tecnologias">+9</div>
            </div>
            <div className="integrations-footer">
              <Check size={11} />
              <span>Figma ao deploy na Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
