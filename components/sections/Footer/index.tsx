'use client'

import { Mail, Phone } from 'lucide-react'
import './Footer.css'
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  LinkedInIcon,
  DribbbleIcon,
  BehanceIcon,
  GitHubIcon,
  DiscordIcon,
} from '@/components/shared/SocialIcons'

export function FooterSection() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-brand">
        <a className="wordmark" href="#top">
          <div className="footer-app-icon" title="Leo da Silva">
            <img src="/apple-icon.png" alt="Leo da Silva" />
          </div>
        </a>
        <p>Design, tecnologia e intenção.<br />Feito para o que vem a seguir.</p>
      </div>

      <div className="footer-column">
        <span className="footer-label">Navegação</span>
        <div className="footer-links">
          <a href="#trabalho">Trabalho</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#testemunhos">Testemunhos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="footer-column">
        <span className="footer-label">Contacto</span>
        <div className="footer-contact">
          <a href="mailto:geral.leodasilva@gmail.com">
            <Mail size={15} /> geral.leodasilva@gmail.com
          </a>
          <a href="tel:+351936822703">
            <Phone size={15} /> +244 952 789 321
          </a>
          <a href="tel:+351952789321">
            <Phone size={15} /> +244 936 822 703
          </a>
        </div>
      </div>

      <div className="footer-column footer-social-column">
        <span className="footer-label">Redes</span>
        <div className="footer-socials footer-socials-realistic">
          <a
            href="https://www.instagram.com/leosilva.co/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-icon-link"
            title="Instagram"
          >
            <InstagramIcon size={28} />
          </a>
          <a
            href="https://web.facebook.com/leodasilva.co"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="social-icon-link"
            title="Facebook"
          >
            <FacebookIcon size={28} />
          </a>
          <a
            href="https://wa.me/244952789321"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="social-icon-link"
            title="WhatsApp"
          >
            <WhatsAppIcon size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/leodasilva-co/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-icon-link"
            title="LinkedIn"
          >
            <LinkedInIcon size={28} />
          </a>
          <a
            href="https://dribbble.com/leodasilva-co"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
            className="social-icon-link"
            title="Dribbble"
          >
            <DribbbleIcon size={28} />
          </a>
          <a
            href="http://www.behance.net/leodasilva-co"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="social-icon-link"
            title="Behance"
          >
            <BehanceIcon size={28} />
          </a>
          <a
            href="https://github.com/leodasilva-co"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-icon-link"
            title="GitHub"
          >
            <GitHubIcon size={28} />
          </a>
          <a
            href="https://discord.com/channels/@leodasilva.co"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="social-icon-link"
            title="Discord"
          >
            <DiscordIcon size={28} />
          </a>
        </div>
      </div>

      <small>© 2026 Leo da Silva. Todos os direitos reservados.</small>
    </footer>
  )
}
