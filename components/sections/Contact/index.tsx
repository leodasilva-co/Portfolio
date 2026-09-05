'use client'

import { useRef, useState } from 'react'
import {
  ArrowUpRight,
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Zap,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Contact.css'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const projectTypes = [
  { value: '', label: 'Selecionar tipo de projecto' },
  { value: 'Design de Produto / UX/UI', label: 'Design de Produto / UX/UI' },
  { value: 'Engenharia Front-end / Web App', label: 'Engenharia Front-end / Web App' },
  { value: 'Identidade Visual / Branding', label: 'Identidade Visual / Branding' },
  { value: 'Marketing Digital / Tráfego Pago', label: 'Marketing Digital / Tráfego Pago' },
  { value: 'Gestão de Redes Sociais', label: 'Gestão de Redes Sociais' },
  { value: 'Estratégia Digital', label: 'Estratégia Digital' },
  { value: 'Outro', label: 'Outro' },
]

const budgetRanges = [
  { value: '', label: 'Orçamento estimado' },
  { value: '300Kz – 10.000Kz', label: '300Kz – 10.000Kz' },
  { value: '30.000Kz – 80.000Kz', label: '30.000Kz – 80.000Kz' },
  { value: '100.000Kz – 300.000Kz', label: '100.000Kz – 300.000Kz' },
  { value: '400.000+', label: '400.000+' },
  { value: 'Prefiro discutir', label: 'Prefiro discutir' },
]

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
    assunto: '',
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }))
  }

  const validate = () => {
    const newTouched = {
      name: true,
      email: true,
      projectType: true,
      budget: true,
      message: true,
      assunto: true,
    }

    setTouched(newTouched)

    const nameValid = form.name.trim().length > 0

    const emailValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

    const messageValid =
      form.message.trim().length > 0

    return nameValid && emailValid && messageValid
  }

  const isValid = (field: string, value: string) => {
    if (!touched[field]) return true

    if (field === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }

    return value.trim().length > 0
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (status === 'sending') return

    if (!formRef.current) {
      setStatus('error')
      setErrorMessage('O formulário não está disponível.')
      return
    }

    if (!validate()) {
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      /*
       * IMPORTANTE:
       *
       * sendForm pega automaticamente:
       *
       * name
       * email
       * projectType
       * budget
       * message
       *
       * através do atributo "name" de cada campo.
       */
      const response = await emailjs.sendForm(
        'service_pnku06c',
        'template_0g5o9dc',
        formRef.current,
        {
          publicKey: 'ogiEvxteXJdt2l3jV',
        }
      )

      console.log('EmailJS SUCCESS:', response.status, response.text)

      setStatus('success')

    } catch (error) {
      console.error('EmailJS ERROR:', error)

      setStatus('error')

      setErrorMessage(
        'Não foi possível enviar a mensagem. Verifique a configuração do EmailJS e tente novamente.'
      )
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')

    setForm({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: '',
      assunto: '',
    })

    setTouched({})
  }

  /*
   * ==========================
   * SUCESSO
   * ==========================
   */

  if (status === 'success') {
    return (
      <section
        className="section-wrap contact-section"
        id="contacto"
      >
        <div className="contact-success">

          <div className="contact-success-icon">
            <CheckCircle size={48} />
          </div>

          <h2>Mensagem enviada!</h2>

          <p>
            Obrigado pelo contacto. Responderei dentro de
            24–48 horas com perguntas, não com propostas
            genéricas.
          </p>

          <button
            type="button"
            className="hero-btn-secondary"
            onClick={resetForm}
          >
            Enviar outra mensagem
          </button>

        </div>
      </section>
    )
  }

  /*
   * ==========================
   * FORMULÁRIO
   * ==========================
   */

  return (
    <section
      className="section-wrap contact-section"
      id="contacto"
    >
      <div className="contact-layout">

        {/* ==========================
            INFORMAÇÃO
        ========================== */}

        <div className="contact-copy">

          <p className="eyebrow">
            08 — Vamos conversar
          </p>

          <h2>
            Tem um problema
            <br />
            que vale a pena <em>resolver?</em>
          </h2>

          <p className="contact-lead">
            Conte-me um pouco. Respondo com perguntas,
            não com propostas genéricas.
          </p>

          <div className="contact-info-items">

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Mail size={18} />
              </span>

              <div>
                <span className="contact-info-label">
                  Gmail
                </span>

                <a href="mailto:geral.leodasilva@gmail.com">
                  geral.leodasilva@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Phone size={18} />
              </span>

              <div>
                <span className="contact-info-label">
                  Telefone
                </span>

                <a href="tel:+244952789321">
                  +244 952 789 321
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={18} />
              </span>

              <div>
                <span className="contact-info-label">
                  Localização
                </span>

                <span>
                  Luanda · Disponível globalmente
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Zap size={18} />
              </span>

              <div>
                <span className="contact-info-label">
                  Resposta
                </span>

                <span>
                  Geralmente em 24–48h
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ==========================
            FORMULÁRIO
        ========================== */}

        <form
          ref={formRef}
          id="contact-form"
          className="contact-form-modern"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Nome + Gmail */}

          <div className="contact-form-row">

            <div
              className={`contact-field ${
                form.name ? 'has-value' : ''
              } ${
                !isValid('name', form.name)
                  ? 'invalid'
                  : ''
              }`}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                autoComplete="name"
                maxLength={100}
                placeholder=" "
              />

              <label htmlFor="name">
                O seu nome *
              </label>

              {!isValid('name', form.name) && (
                <span className="field-error">
                  Nome é obrigatório
                </span>
              )}
            </div>

            <div
              className={`contact-field ${
                form.email ? 'has-value' : ''
              } ${
                !isValid('email', form.email)
                  ? 'invalid'
                  : ''
              }`}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                autoComplete="email"
                maxLength={150}
                placeholder=" "
              />

              <label htmlFor="email">
                Gmail *
              </label>

              {!isValid('email', form.email) && (
                <span className="field-error">
                  Email inválido
                </span>
              )}
            </div>

          </div>

          {/* Tipo + Orçamento */}

          <div className="contact-form-row">

            <div
              className={`contact-field contact-select-field ${
                form.projectType ? 'has-value' : ''
              }`}
            >
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {projectTypes.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ''}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <label htmlFor="projectType">
                Tipo de projecto
              </label>

              <span className="select-arrow">
                ▾
              </span>
            </div>

            <div
              className={`contact-field contact-select-field ${
                form.budget ? 'has-value' : ''
              }`}
            >
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {budgetRanges.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ''}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <label htmlFor="budget">
                Orçamento
              </label>

              <span className="select-arrow">
                ▾
              </span>
            </div>

          </div>

          {/* Assunto */}

          <div
            className={`contact-field contact-textarea-field ${
              form.message ? 'has-value' : ''
            } ${
              !isValid('message', form.message)
                ? 'invalid'
                : ''
            }`}
          >
            <input
              id="assunto"
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={500}
              required
              placeholder=" "
            />

            <label htmlFor="message">
              Insira o seu assunto *
            </label>

            {!isValid('message', form.assunto) && (
              <span className="field-error">
                Assunto é obrigatório
              </span>
            )}
          </div>

          {/* Mensagem */}

          <div
            className={`contact-field contact-textarea-field ${
              form.message ? 'has-value' : ''
            } ${
              !isValid('message', form.message)
                ? 'invalid'
                : ''
            }`}
          >
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              maxLength={500}
              required
              placeholder=" "
            />

            <label htmlFor="message">
              Descreva o seu desafio *
            </label>

            <span className="textarea-counter">
              {form.message.length}/500
            </span>

            {!isValid('message', form.message) && (
              <span className="field-error">
                Mensagem é obrigatória
              </span>
            )}
          </div>

          {/* ERRO */}

          {status === 'error' && (
            <p
              className="field-error"
              role="alert"
              style={{
                fontSize: '0.82rem',
                margin: '0.2rem 0',
              }}
            >
              {errorMessage}
            </p>
          )}

          {/* FOOTER */}

          <div className="contact-form-footer">

            <p className="contact-privacy">
              🔒 Os seus dados são confidenciais e
              nunca são partilhados com terceiros.
            </p>

            <button
              className="contact-submit-btn"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2
                    size={18}
                    className="spin"
                  />

                  A enviar...
                </>
              ) : (
                <>
                  Enviar mensagem

                  <ArrowUpRight size={18} />
                </>
              )}
            </button>

          </div>

        </form>
      </div>
    </section>
  )
}