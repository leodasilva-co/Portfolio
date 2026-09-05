'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { DarkModeToggle } from '@/components/shared/DarkModeToggle'
import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { WorkSection } from '@/components/sections/Work'
import { AboutSection } from '@/components/sections/About'
import { TestimonialsSection } from '@/components/sections/Testimonials'
import { ContactSection } from '@/components/sections/Contact'
import { FooterSection } from '@/components/sections/Footer'

const process = [
  ['01', 'Entender', 'A pergunta certa vem antes da solução. Imersão nos objectivos do negócio e necessidades reais dos utilizadores.'],
  ['02', 'Estruturar', 'Transformo complexidade em direção partilhada através de arquitetura de informação, fluxos e design tokens.'],
  ['03', 'Construir', 'Prototipo, desenho e desenvolvo directamente em código de produção com testes e validação contínua.'],
  ['04', 'Aprender', 'Medimos o que realmente importa (Core Web Vitals, conversão, NPS) e iteramos com velocidade e intenção.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      {/* Fixed/Sticky Frosted Glass Header */}
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <img src="/apple-icon.png" alt="Leo da Silva" width={40} height={40} />
        </a>

        <nav
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          aria-label="Navegação principal"
        >
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#trabalho" onClick={closeMenu}>Trabalho</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#testemunhos" onClick={closeMenu}>Testemunhos</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <div className="header-actions">
          <DarkModeToggle />
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <HeroSection />

      {/* Authority Ticker */}
      <section className="authority section-wrap">
        <p>
          Pensamento estratégico.<br />
          <strong>Design preciso. Tecnologia aplicada.</strong>
        </p>
        <div className="authority-list">
          <span>Produto</span>
          <span>Experiência</span>
          <span>Engenharia</span>
          <span>Sistemas</span>
        </div>
      </section>

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Work Section with Filter & Modal */}
      <WorkSection />

      {/* In Progress / Now Section */}
      <section className="section-wrap now-section">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">03 — Construindo agora</p>
            <h2>O próximo capítulo<br /><em>já começou.</em></h2>
          </div>
          <p className="section-note">
            Projectos em diferentes estágios de exploração. O processo também faz parte do resultado.
          </p>
        </div>
        <div className="now-list">
          {[
            ['Pesquisa', 'Mapeando como a IA pode melhorar ferramentas de trabalho e acelerar o desenvolvimento front-end.'],
            ['Em construção', 'Uma biblioteca aberta de padrões de UI acessíveis para produtos digitais modernos.'],
            ['Testando', 'Novos formatos interativos para tornar a estratégia de produto tangível e colaborativa.'],
            ['Lançado', 'Este portfólio — um sistema vivo em Next.js 16 com React 19, sempre em evolução.'],
          ].map(([label, text], i) => (
            <div className="now-row" key={label}>
              <span className={`now-dot dot-${i}`} />
              <div>
                <h3>{label}</h3>
                <p>{text}</p>
              </div>
              <span className="now-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto Callout Banner */}
      <section className="manifesto">
        <div className="section-wrap manifesto-inner">
          <p className="eyebrow">04 — De problema a Projecto</p>
          <h2>
            Se há algo importante<br />
            para <em>resolver,</em> vamos falar.
          </h2>
          <a className="button button-light" href="#contacto">
            Começar uma conversa <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="section-wrap process-section" id="processo">
        <div className="section-intro">
          <p className="eyebrow">05 — Como eu penso</p>
          <h2>Menos ruído.<br /><em>Mais direção.</em></h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <div className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. About Section (Bento Grid) */}
      <AboutSection />

      {/* 6. How We Work / Engagement Models */}
      <section className="offers-section">
        <div className="section-wrap">
          <div className="section-intro">
            <p className="eyebrow">07 — Como podemos trabalhar</p>
            <h2>Escolha o ponto<br /><em>de partida.</em></h2>
          </div>
          <div className="offers-grid">
            {[
              ['START', 'Uma direção clara para começar.', 'Para startups e Projectos que precisam de transformar uma ideia em MVP rápido e funcional.'],
              ['GROW', 'Um sistema que acompanha o crescimento.', 'Para equipas a evoluir produto, design system, escala e performance frontend.'],
              ['TRANSFORM', 'Mudança com intenção e escala.', 'Para organizações prontas para redesenhar a arquitetura técnica e experiência dos seus produtos.'],
            ].map(([name, title, text]) => (
              <article className="offer" key={name}>
                <span className="offer-name">{name}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contacto">
                  Saber mais <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <TestimonialsSection />

      {/* 8. Modern Contact Section */}
      <ContactSection />

      {/* 9. Footer Section */}
      <FooterSection />
    </main>
  )
}
