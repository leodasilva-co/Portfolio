'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Alexandrina Lopes',
    role: 'CEO & Fundadora',
    company: 'Ale Cosmeticos',
    text: 'O Leo é incrivelmente talentoso. O seu design é moderno e intuitivo e a sua capacidade técnica é impressionante. Recomendo sem reservas.',
    avatar: 'AL',
    color: '#2079f5',
    stars: 5,
    category: 'Cliente'
  },
  {
    id: 2,
    name: 'Comissão Nacional para o Instituto Internacional de Língua Portuguesa',
    role: 'Coordenadora Nacional',
    company: 'Ministério da Educação',
    text: 'Trabalhar com o Leo foi uma das melhores decisões que tomámos. O sistema de inscrição da Semana da Língua Portuguesa foi um sucesso e a consistência visual da aplicação é impecável. Recomendo sem reservas.',
    avatar: 'CN-IILP',
    color: '#10b981',
    stars: 5,
    category: 'Parceiro'
  },
  {
    id: 3,
    name: 'Sofia Mendes',
    role: 'Product Manager',
    company: 'Terra Versa - Comércio e Serviços',
    text: 'O Leo tem uma capacidade única de entender os problemas dos utilizadores e traduzi-los em soluções elegantes. O nosso perfil no Facebook aumentou 70% no primeiro mês depois do redesign que ele liderou. Excepcional!',
    avatar: 'SM',
    color: '#6366f1',
    stars: 5,
    category: 'Cliente'
  },
  {
    id: 4,
    name: 'Bile Fainy Sérgio',
    role: 'Seguidora',
    company: 'Facebook',
    text: 'Acompanho o Leo desde o inicio. Os seus conteúdos são sempre muito ricos e bem estruturados. É um profissional que admiro muito!',
    avatar: 'BFS',
    color: '#f59e0b',
    stars: 5,
    category: 'Colaborador'
  },
  {
    id: 5,
    name: 'Ana Li',
    role: 'CEO',
    company: 'Kiss Cake - Comércio e Serviços',
    text: 'O Leo redesenhou a nossa loja e o resultado foi impressionante. As vendas online aumentaram 120% no primeiro mês. O processo foi organizado, transparente e o resultado superou todas as expectativas.',
    avatar: 'AN',
    color: '#ec4899',
    stars: 5,
    category: 'Cliente'
  },
  {
    id: 6,
    name: 'João Oliveira',
    role: 'UX Designer',
    company: 'Freelancer',
    text: 'Já colaborei com muitos designers, mas o Leo é diferente. A sua abordagem metódica, combinada com uma criatividade genuína, resulta sempre em soluções que funcionam tanto para o negócio como para o utilizador.',
    avatar: 'JO',
    color: '#14b8a6',
    stars: 5,
    category: 'Colaborador'
  },
]

const categories = ['Todos', 'Cliente', 'Parceiro', 'Colaborador']

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [currentPage, setCurrentPage] = useState(0)

  const filtered = activeCategory === 'Todos'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory)

  const itemsPerPage = 3
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const visible = filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(0)
  }

  return (
    <section className="testimonials-section section-wrap" id="testemunhos">
      <div className="section-intro">
        <p className="eyebrow">09 — O que dizem sobre mim</p>
        <h2>Resultados que <em>falam</em><br />por si mesmos.</h2>
      </div>

      {/* Category Filter */}
      <div className="testimonials-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`testimonials-filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="testimonials-grid">
        {visible.map((t) => (
          <article key={t.id} className="testimonial-card">
            <div className="testimonial-quote-icon">
              <Quote size={20} />
            </div>

            <div className="testimonial-stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>

            <div className="testimonial-footer">
              <div className="testimonial-avatar" style={{ background: t.color }}>
                <span>{t.avatar}</span>
              </div>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role} · {t.company}</span>
              </div>
              <span className="testimonial-category-tag">{t.category}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="testimonials-pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            aria-label="Página anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="pagination-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`pagination-dot${i === currentPage ? ' active' : ''}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            aria-label="Próxima página"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="testimonials-cta">
        <p>Quer fazer parte desta lista?</p>
        <a className="hero-btn-primary" href="#contacto">
          Vamos trabalhar juntos <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
