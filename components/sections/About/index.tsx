'use client'

import { Check, FileDown, FileText, Sparkles, Code2, Layers } from 'lucide-react'
import Image from 'next/image'
import './About.css'

export function AboutSection() {
  return (
    <section className="section-wrap about-section" id="sobre">
      <div className="about-intro-split">
        <div>
          <p className="eyebrow">06 — Sobre Leo da Silva</p>
          <h2>Design preciso.<br /><em>Engenharia com propósito.</em></h2>
        </div>
        <div className="about-intro-right">
          <p className="about-lead-text">
            Trabalho na interseção entre estratégia de produto, design de interface e engenharia de software para ajudar equipas e empresas a criarem produtos memoráveis.
          </p>
          <a
            className="about-cv-header-btn"
            href="/cv-leo-da-silva.pdf"
            download="Leo-da-Silva-CV.pdf"
            target="_blank"
            rel="noreferrer"
            title="Descarregar Curriculum Vitae em PDF"
          >
            <FileDown size={15} />
            <span>Descarregar CV (PDF)</span>
          </a>
        </div>
      </div>

      <div className="about-bento-grid">
        {/* Card 1: Profile with Photo */}
        <article className="about-bento-card about-card-profile">
          <div className="about-profile-header">
            <span className="about-card-tag">01 / Perfil & Visão</span>
            <div className="about-location-badge">
              <span className="status-pulse-dot" />
              <span>Luanda · Remoto Global</span>
            </div>
          </div>

          {/* Profile Photo + Name Row */}
          <div className="about-profile-identity">
            <div className="about-profile-photo-wrap">
              <Image
                src="/images/perfil.png"
                alt="Leo da Silva — Product Designer & Front-end Engineer"
                width={80}
                height={80}
                className="about-profile-photo"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
              <span className="about-profile-photo-ring" />
            </div>
            <div>
              <h3>Leo da Silva</h3>
              <p className="about-profile-role">Product Designer & Front-end Engineer</p>
            </div>
          </div>

          <p>
            Com 3 anos a desenhar e construir sistemas digitais, actuo desde a fase de descoberta e prototipagem até à implementação de ponta a ponta em React e Next.js. O meu foco é transformar desafios complexos em produtos intuitivos, rápidos e sustentáveis.
          </p>
          <div className="about-quote-box">
            &ldquo;A simplicidade não é ausência de funcionalidade, mas sim o domínio e a redução da complexidade.&rdquo;
          </div>

          <div className="about-profile-footer">
            <div className="about-skill-pills">
              <span>#ProductDesign</span>
              <span>#DesignSystems</span>
              <span>#React19</span>
              <span>#Nextjs</span>
              <span>#TypeScript</span>
              <span>#A11yWCAG</span>
              <span>#Performance</span>
            </div>
            <a
              className="about-profile-cv-badge"
              href="/cv-leo-da-silva.pdf"
              download="Leo-da-Silva-CV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Descarregar Curriculum Vitae em PDF"
            >
              <FileText size={13} />
              <span>CV em PDF</span>
              <FileDown size={13} />
            </a>
          </div>
        </article>

        {/* Card 2: Stats */}
        <article className="about-bento-card about-card-stats">
          <span className="about-card-tag">02 / Impacto em Números</span>
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <span className="about-stat-number">3<span>anos</span></span>
              <span className="about-stat-label">Anos de experiência em produto digital</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">+10</span>
              <span className="about-stat-label">Produtos e sistemas entregues</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">99.8<span>%</span></span>
              <span className="about-stat-label">Média Lighthouse & Performance</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">100<span>%</span></span>
              <span className="about-stat-label">Foco em Design Systems & Frontend</span>
            </div>
          </div>
          <div className="about-status-note">
            <Check size={14} />
            <span>Foco rigoroso em qualidade técnica e escalabilidade</span>
          </div>
        </article>

        {/* Card 3: Principles */}
        <article className="about-bento-card about-card-principles">
          <span className="about-card-tag">03 / Princípios de Trabalho</span>
          <div className="about-principles-list">
            <div className="about-principle-row">
              <span className="about-principle-num">01</span>
              <div className="about-principle-content">
                <h4>Clareza antes da velocidade</h4>
                <p>Diagnóstico profundo do utilizador e do modelo de negócio antes de qualquer linha de código ou layout final.</p>
              </div>
            </div>
            <div className="about-principle-row">
              <span className="about-principle-num">02</span>
              <div className="about-principle-content">
                <h4>Design Systems Vivos</h4>
                <p>Design tokens conectados directamente do Figma ao código em produção, garantindo consistência sem atritos.</p>
              </div>
            </div>
            <div className="about-principle-row">
              <span className="about-principle-num">03</span>
              <div className="about-principle-content">
                <h4>Fazer, não apenas apresentar</h4>
                <p>Prototipagem rápida, testes reais e código funcional desde os primeiros ciclos de desenvolvimento.</p>
              </div>
            </div>
            <div className="about-principle-row">
              <span className="about-principle-num">04</span>
              <div className="about-principle-content">
                <h4>Performance & Acessibilidade</h4>
                <p>Interfaces fluidas a 60fps, conformidade com WCAG 2.2 e tempos de resposta inferiores a 100ms.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Card 4: Stack */}
        <article className="about-bento-card about-card-stack">
          <span className="about-card-tag">04 / Stack & Especialidades</span>
          <div className="about-stack-groups">
            <div className="about-stack-group">
              <h4><Sparkles size={16} style={{ color: '#f9c970' }} /> Design de Produto & UX</h4>
              <p>Figma, Prototipagem Avançada, UX Research, Arquitetura de Informação, Design Tokens & Design Systems.</p>
            </div>
            <div className="about-stack-group">
              <h4><Code2 size={16} style={{ color: '#10b981' }} /> Engenharia Front-end</h4>
              <p>Next.js 16, React 19, TypeScript, Tailwind CSS, Turbopack, REST/GraphQL, State Management & Web APIs.</p>
            </div>
            <div className="about-stack-group">
              <h4><Layers size={16} style={{ color: '#6366f1' }} /> Estratégia & Qualidade</h4>
              <p>SEO Técnico, Core Web Vitals, Acessibilidade WCAG 2.2, CRO (Conversion Rate Optimization) & Testes Automatizados.</p>
            </div>
          </div>
        </article>

        {/* Card 5: CTA */}
        <article className="about-bento-card about-card-cta">
          <div className="about-cta-copy">
            <div className="about-cta-kicker">
              <FileText size={13} />
              <span>Curriculum Vitae & Disponibilidade</span>
            </div>
            <h3>Pronto para transformar a sua visão em realidade?</h3>
            <p>Consulte o meu currículo completo em PDF ou vamos conversar directamente sobre o seu projecto.</p>
          </div>
          <div className="about-cta-actions">
            <a
              className="button button-cv-download"
              href="/cv-leo-da-silva.pdf"
              download="Leo-da-Silva-CV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Descarregar Curriculum Vitae em PDF"
            >
              <FileDown size={16} />
              <span>Descarregar CV (PDF)</span>
            </a>
            <a className="button button-primary" href="#contacto">
              Começar conversa <Check size={16} />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
