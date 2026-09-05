'use client'

import { useState } from 'react'
import { ArrowUpRight, X, Sparkles, Check } from 'lucide-react'
import './Services.css'

export const services = [
  'Estratégia digital',
  'Design de produto',
  'Engenharia front-end',
  'Sistemas de marca',
  'Workshops & diagnóstico',
]

export const serviceDetails = [
  {
    title: 'Estratégia digital',
    kicker: 'Direção antes da execução',
    description: 'Alinho visão, contexto e prioridades para transformar ambição em um plano digital que a equipa consegue realmente usar.',
    points: ['Pesquisa e síntese de negócio', 'Posicionamento estratégico e roadmap', 'Workshops de alinhamento com stakeholders', 'Definição de métricas de impacto (OKRs/KPIs)'],
    visual: '01',
    tone: 'blue',
  },
  {
    title: 'Design de produto',
    kicker: 'Experiências que fazem sentido',
    description: 'Desenho fluxos intuitivos, interfaces modernas e sistemas que reduzem fricção e tornam cada decisão mais clara para as pessoas.',
    points: ['Arquitetura de informação & wireframes', 'Design UI/UX em alta fidelidade no Figma', 'Prototipagem interativa e testes com utilizadores', 'Design system escalável e documentado'],
    visual: '02',
    tone: 'lime',
  },
  {
    title: 'Engenharia front-end',
    kicker: 'Do conceito ao browser',
    description: 'Construo interfaces ultra-rápidas, acessíveis e fiéis ao design, com uma base técnica moderna preparada para evoluir.',
    points: ['Desenvolvimento em React 19 e Next.js 16', 'TypeScript rigoroso e tipagem robusta', 'Performance extrema (Core Web Vitals 99%+)', 'Acessibilidade WCAG 2.2 AA & micro-interações'],
    visual: '03',
    tone: 'violet',
  },
  {
    title: 'Sistemas de marca',
    kicker: 'Consistência com espaço para respirar',
    description: 'Crio identidades vivas e flexíveis, capazes de orientar produto, comunicação e experiência sem engessar o trabalho.',
    points: ['Identidade visual & manual de marca', 'Design tokens (cores, tipografia, espaçamento)', 'Biblioteca de componentes e assets digitais', 'Guidelines de tom de voz e aplicações'],
    visual: '04',
    tone: 'orange',
  },
  {
    title: 'Workshops & diagnóstico',
    kicker: 'Clareza partilhada',
    description: 'Facilito conversas e exercícios práticos que ajudam equipas a ver o problema de outro ângulo e decidir o próximo passo com segurança.',
    points: ['Mapeamento de desafios e dores de utilizador', 'Sessões colaborativas de ideação e co-criação', 'Auditoria de usabilidade e tecnologia', 'Síntese executiva e plano de ação prioritário'],
    visual: '05',
    tone: 'cyan',
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section className="section-wrap services-section" id="servicos">
      <div className="section-intro">
        <p className="eyebrow">01 — O que faço</p>
        <h2>Entre a visão e a execução, <em>há método.</em></h2>
        <p className="services-subtitle">
          Soluções completas que combinam pensamento estratégico, design rigoroso e código de alta performance.
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <button
            className="service-row"
            key={service}
            onClick={() => setSelectedService(index)}
            aria-haspopup="dialog"
          >
            <span className="service-number">0{index + 1}</span>
            <div className="service-content-preview">
              <h3>{service}</h3>
              <p className="service-tagline">{serviceDetails[index].kicker}</p>
            </div>
            <div className="service-action-badge">
              <span className="service-action-badge">Saber mais</span>
              <ArrowUpRight size={18} />
            </div>
          </button>
        ))}
      </div>

      {/* Service Details Modal */}
      {selectedService !== null && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedService(null)}
        >
          <article
            className="project-modal service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Fechar detalhe do serviço"
              onClick={() => setSelectedService(null)}
            >
              <X size={20} />
            </button>

            <div className="service-detail-visual">
              <span>{serviceDetails[selectedService].visual}</span>
              <div className="detail-grid" />
              <b>{serviceDetails[selectedService].title.slice(0, 2).toUpperCase()}</b>
            </div>

            <div className="service-detail-copy">
              <p className="eyebrow">{serviceDetails[selectedService].kicker}</p>
              <h2 id="service-modal-title">{serviceDetails[selectedService].title}</h2>
              <p>{serviceDetails[selectedService].description}</p>
              
              <div className="detail-points">
                {serviceDetails[selectedService].points.map((point) => (
                  <span key={point}>
                    <Check size={14} className="point-check-icon" /> {point}
                  </span>
                ))}
              </div>

              <div className="service-modal-actions">
                <a
                  className="button button-primary"
                  href="#contacto"
                  onClick={() => setSelectedService(null)}
                >
                  Falar sobre este serviço <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
