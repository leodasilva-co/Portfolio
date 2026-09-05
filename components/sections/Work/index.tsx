'use client'

import { useState } from 'react'
import { ArrowUpRight, X, ExternalLink, Palette, Code2, TrendingUp, Share2, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { GitHubIcon } from '@/components/shared/SocialIcons'
import './Work.css'

type WorkCategory = 'design' | 'programacao' | 'marketing' | 'redes'

interface WorkProject {
  id: number
  title: string
  type: string
  description: string
  fullDescription: string
  category: WorkCategory
  tags: string[]
  images: string[]
  results?: string[]
  link?: string
  github?: string
  year: string
  color: string
}

const workProjects: WorkProject[] = [
  // Design
  {
    id: 1,
    title: 'Nexo Finance — Design System',
    type: 'Design de Produto',
    description: 'Clareza para decisões financeiras complexas.',
    fullDescription: 'Criei um design system completo para a plataforma Nexo Finance, incluindo mais de 120 componentes, tokens de design e guidelines de uso. O sistema reduziu o tempo de desenvolvimento em 60% e aumentou a consistência visual em 100%.',
    category: 'design',
    tags: ['Figma', 'Design System', 'UI/UX', 'Tokens'],
    images: ['/images/hero-design-01.png', '/images/hero-design-02.png', '/images/hero-finance-01.png'],
    results: ['120+ componentes criados', '60% redução no tempo de dev', 'Consistência visual 100%'],
    year: '2025',
    color: '#2079f5',
  },
  {
    id: 2,
    title: 'Lume Health — UX Redesign',
    type: 'Experiência de Utilizador',
    description: 'Uma experiência mais humana para o cuidado.',
    fullDescription: 'Redesenhei toda a experiência da aplicação Lume Health, focando em acessibilidade e clareza para pacientes. O NPS passou de 42 para 78 após o lançamento.',
    category: 'design',
    tags: ['UX Research', 'Prototyping', 'Accessibility', 'WCAG'],
    images: ['/images/hero-design-02.png', '/images/hero-design-01.png'],
    results: ['NPS de 42 → 78', 'A11y WCAG 2.2 AA', 'Satisfação +86%'],
    year: '2025',
    color: '#10b981',
  },
  {
    id: 3,
    title: 'Atelier 27 — Brand Identity',
    type: 'Identidade Visual',
    description: 'Do catálogo disperso a uma loja que converte.',
    fullDescription: 'Criação de identidade visual completa para a marca de moda Atelier 27, incluindo logo, paleta de cores, tipografia, e guidelines para aplicação digital e física.',
    category: 'design',
    tags: ['Branding', 'Logo', 'Typography', 'Guidelines'],
    images: ['/images/hero-design-01.png', '/images/hero-design-02.png'],
    results: ['Identidade completa', 'Guia de marca 40pg', 'Vendas +120%'],
    year: '2024',
    color: '#f59e0b',
  },
  // Programação
  {
    id: 4,
    title: 'Atlas Ops — Plataforma Interna',
    type: 'Front-end Engineering',
    description: 'Operações mais rápidas, visíveis e confiáveis.',
    fullDescription: 'Desenvolvi a plataforma de gestão interna Atlas Ops usando Next.js 16, React 19, TypeScript e um design system personalizado. Integração com APIs REST e GraphQL para dados em tempo real.',
    category: 'programacao',
    tags: ['Next.js', 'React 19', 'TypeScript', 'GraphQL'],
    images: ['/images/hero-tech-01.png', '/images/hero-tech-02.png', '/images/hero-finance-01.png'],
    results: ['Performance 99.8%', 'LCP < 0.4s', 'Deploy na Vercel'],
    link: 'https://github.com',
    github: 'https://github.com',
    year: '2024',
    color: '#6366f1',
  },
  {
    id: 5,
    title: 'Portfólio Leo da Silva',
    type: 'Next.js & Design',
    description: 'Um sistema vivo, sempre em evolução.',
    fullDescription: 'Este portfólio foi construído com Next.js 16, React 19, TypeScript, CSS vanilla e design system próprio. Foco em performance, acessibilidade e dark mode.',
    category: 'programacao',
    tags: ['Next.js', 'TypeScript', 'CSS', 'Dark Mode'],
    images: ['/images/hero-tech-02.png', '/images/hero-tech-01.png'],
    results: ['Lighthouse 100%', 'A11y 100%', 'Deploy Vercel'],
    github: 'https://github.com',
    year: '2025',
    color: '#0ea5e9',
  },
  // Marketing Digital
  {
    id: 6,
    title: 'Campanha Google Ads — E-commerce',
    type: 'Tráfego Pago',
    description: 'ROI de 380% em campanha de Search.',
    fullDescription: 'Gestão completa de campanhas Google Ads para e-commerce de moda portuguesa. Estratégia de Search, Shopping e Performance Max. Otimização contínua com testes A/B.',
    category: 'marketing',
    tags: ['Google Ads', 'Search', 'Shopping', 'Performance Max'],
    images: ['/images/hero-finance-01.png', '/images/hero-finance-02.png'],
    results: ['ROI 380%', 'CPC -42%', 'Conversões +215%'],
    year: '2025',
    color: '#ef4444',
  },
  {
    id: 7,
    title: 'Meta Ads — Lançamento de Produto',
    type: 'Facebook & Instagram Ads',
    description: 'Lançamento viral com 50K leads em 30 dias.',
    fullDescription: 'Estratégia completa de Meta Ads para o lançamento de produto SaaS. Funil completo desde awareness até conversão, com retargeting avançado e lookalike audiences.',
    category: 'marketing',
    tags: ['Facebook Ads', 'Instagram', 'Funnel', 'Retargeting'],
    images: ['/images/hero-finance-02.png', '/images/hero-design-01.png'],
    results: ['50K leads qualificados', 'CPL €0.38', 'ROAS 6.2x'],
    year: '2024',
    color: '#8b5cf6',
  },
  // Redes Sociais
  {
    id: 8,
    title: 'Gestão Instagram — Marca de Lifestyle',
    type: 'Social Media Management',
    description: 'De 2K para 45K seguidores em 8 meses.',
    fullDescription: 'Gestão completa da presença no Instagram para marca de lifestyle portuguesa. Estratégia de conteúdo, copywriting, design dos posts, stories, reels e interação com a comunidade.',
    category: 'redes',
    tags: ['Instagram', 'Content Strategy', 'Reels', 'Copywriting'],
    images: ['/images/hero-design-01.png', '/images/hero-design-02.png'],
    results: ['2K → 45K seguidores', 'Engagement 8.4%', 'Reach +920%'],
    year: '2025',
    color: '#ec4899',
  },
  {
    id: 9,
    title: 'LinkedIn B2B — SaaS Company',
    type: 'LinkedIn Strategy',
    description: 'Leads B2B qualificados via conteúdo orgânico.',
    fullDescription: 'Estratégia de conteúdo e gestão de presença no LinkedIn para empresa SaaS B2B. Foco em thought leadership, artigos técnicos e geração de leads qualificados.',
    category: 'redes',
    tags: ['LinkedIn', 'B2B', 'Thought Leadership', 'Lead Gen'],
    images: ['/images/hero-tech-01.png', '/images/hero-finance-01.png'],
    results: ['120 leads/mês', 'Impressões +340%', 'Pipeline €180K'],
    year: '2024',
    color: '#0a66c2',
  },
  // Premium
  {
    id: 10,
    title: 'Gestão Instagram — Marca de Lifestyle',
    type: 'Social Media Management',
    description: 'De 2K para 45K seguidores em 8 meses.',
    fullDescription: 'Gestão completa da presença no Instagram para marca de lifestyle portuguesa. Estratégia de conteúdo, copywriting, design dos posts, stories, reels e interação com a comunidade.',
    category: 'premium',
    tags: ['Instagram', 'Content Strategy', 'Reels', 'Copywriting'],
    images: ['/images/hero-design-01.png', '/images/hero-design-02.png'],
    results: ['2K → 45K seguidores', 'Engagement 8.4%', 'Reach +920%'],
    year: '2025',
    color: '#ec4899',
  },
  {
    id: 11,
    title: 'LinkedIn B2B — SaaS Company',
    type: 'LinkedIn Strategy',
    description: 'Leads B2B qualificados via conteúdo orgânico.',
    fullDescription: 'Estratégia de conteúdo e gestão de presença no LinkedIn para empresa SaaS B2B. Foco em thought leadership, artigos técnicos e geração de leads qualificados.',
    category: 'premium',
    tags: ['LinkedIn', 'B2B', 'Thought Leadership', 'Lead Gen'],
    images: ['/images/hero-tech-01.png', '/images/hero-finance-01.png'],
    results: ['120 leads/mês', 'Impressões +340%', 'Pipeline €180K'],
    year: '2024',
    color: '#0a66c2',
  },
    {
    id: 12,
    title: 'Atlas Ops — Plataforma Interna',
    type: 'Front-end Engineering',
    description: 'Operações mais rápidas, visíveis e confiáveis.',
    fullDescription: 'Desenvolvi a plataforma de gestão interna Atlas Ops usando Next.js 16, React 19, TypeScript e um design system personalizado. Integração com APIs REST e GraphQL para dados em tempo real.',
    category: 'premium',
    tags: ['Next.js', 'React 19', 'TypeScript', 'GraphQL'],
    images: ['/images/hero-tech-01.png', '/images/hero-tech-02.png', '/images/hero-finance-01.png'],
    results: ['Performance 99.8%', 'LCP < 0.4s', 'Deploy na Vercel'],
    link: 'https://github.com',
    github: 'https://github.com',
    year: '2024',
    color: '#6366f1',
  },
  {
    id: 13,
    title: 'Portfólio Leo da Silva',
    type: 'Next.js & Design',
    description: 'Um sistema vivo, sempre em evolução.',
    fullDescription: 'Este portfólio foi construído com Next.js 16, React 19, TypeScript, CSS vanilla e design system próprio. Foco em performance, acessibilidade e dark mode.',
    category: 'premium',
    tags: ['Next.js', 'TypeScript', 'CSS', 'Dark Mode'],
    images: ['/images/hero-tech-02.png', '/images/hero-tech-01.png'],
    results: ['Lighthouse 100%', 'A11y 100%', 'Deploy Vercel'],
    github: 'https://github.com',
    year: '2025',
    color: '#0ea5e9',
  },
]

const categories = [
  { id: 'all' as const, label: 'Todos os trabalhos', icon: <ArrowUpRight size={16} /> },
  { id: 'design' as const, label: 'Design', icon: <Palette size={16} /> },
  { id: 'programacao' as const, label: 'Programação', icon: <Code2 size={16} /> },
  { id: 'marketing' as const, label: 'Marketing Digital', icon: <TrendingUp size={16} /> },
  { id: 'redes' as const, label: 'Redes Sociais', icon: <Share2 size={16} /> },
  { id: 'premium' as const, label: 'Premium', icon: <Star size={16} /> },
]

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | WorkCategory>('all')
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const filtered = activeCategory === 'all'
    ? workProjects
    : workProjects.filter(p => p.category === activeCategory)

  const openProject = (project: WorkProject) => {
    setSelectedProject(project)
    setGalleryIndex(0)
  }

  const closeProject = () => setSelectedProject(null)

  return (
    <section className="work-section" id="trabalho">
      <div className="section-wrap">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">02 — Laboratório de transformação digital</p>
            <h2>Trabalho que <em>move</em><br />o negócio para frente.</h2>
          </div>
          <p className="section-note">Design, código, marketing e redes sociais — resultados reais para negócios reais.</p>
        </div>

        {/* Category Tabs */}
        <div className="work-category-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`work-tab-btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="work-projects-grid">
          {filtered.map((project) => (
            <button
              key={project.id}
              className="work-project-card"
              onClick={() => openProject(project)}
              style={{ '--card-accent': project.color } as React.CSSProperties}
            >
              <div className="work-card-visual">
                <div className="work-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="work-card-img"
                  />
                </div>
                <div className="work-card-overlay">
                  <span className="work-card-open">Ver Projecto <ArrowUpRight size={14} /></span>
                </div>
              </div>
              <div className="work-card-info">
                <div className="work-card-meta">
                  <span className="work-card-type">{project.type}</span>
                  <span className="work-card-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-card-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="work-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="work-modal-backdrop" role="presentation" onClick={closeProject}>
          <article
            className="work-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" aria-label="Fechar Projecto" onClick={closeProject}>
              <X size={20} />
            </button>

            {/* Gallery */}
            <div className="work-modal-gallery">
              <div className="work-modal-gallery-main">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.images[galleryIndex]}
                  alt={`${selectedProject.title} — imagem ${galleryIndex + 1}`}
                  className="work-modal-gallery-img"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="gallery-nav-btn gallery-prev"
                      onClick={() => setGalleryIndex(i => Math.max(0, i - 1))}
                      disabled={galleryIndex === 0}
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="gallery-nav-btn gallery-next"
                      onClick={() => setGalleryIndex(i => Math.min(selectedProject.images.length - 1, i + 1))}
                      disabled={galleryIndex === selectedProject.images.length - 1}
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="gallery-dots">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          className={`gallery-dot${i === galleryIndex ? ' active' : ''}`}
                          onClick={() => setGalleryIndex(i)}
                          aria-label={`Imagem ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {selectedProject.images.length > 1 && (
                <div className="work-modal-gallery-thumbs">
                  {selectedProject.images.map((src, i) => (
                    <button
                      key={i}
                      className={`gallery-thumb${i === galleryIndex ? ' active' : ''}`}
                      onClick={() => setGalleryIndex(i)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Miniatura ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="work-modal-content">
              <div className="work-modal-header">
                <div>
                  <p className="eyebrow" style={{ color: selectedProject.color }}>{selectedProject.type} · {selectedProject.year}</p>
                  <h2 id="work-modal-title">{selectedProject.title}</h2>
                </div>
                <div className="work-modal-links">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="work-link-btn">
                      <GitHubIcon size={16} /> GitHub
                    </a>
                  )}
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="work-link-btn primary">
                      <ExternalLink size={16} /> Ver ao vivo
                    </a>
                  )}
                </div>
              </div>

              <p className="work-modal-desc">{selectedProject.fullDescription}</p>

              {/* Tags */}
              <div className="work-modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="work-modal-tag">{tag}</span>
                ))}
              </div>

              {/* Results */}
              {selectedProject.results && (
                <div className="work-modal-results">
                  <h4>Resultados alcançados</h4>
                  <div className="work-results-grid">
                    {selectedProject.results.map(r => (
                      <div key={r} className="work-result-item">
                        <span className="work-result-check">✓</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <a className="hero-btn-primary" href="#contacto" onClick={closeProject}>
                Falar sobre este Projecto <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
