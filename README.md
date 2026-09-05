<div align="center">
  <img src="public/apple-icon.png" alt="Leo da Silva Logo" width="80" height="80" />
  <h1>Leo da Silva — Portfolio</h1>
  <p><strong>Design de Produto, Design Systems & Engenharia Front-end</strong></p>
  <p><em>"Ideias claras. Sistemas que funcionam."</em></p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js" alt="Next.js 16" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.emailjs.com"><img src="https://img.shields.io/badge/EmailJS-Integrated-orange?style=flat&logo=mailgun" alt="EmailJS" /></a>
    <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel" alt="Vercel" /></a>
  </p>
</div>

---

## 📌 Sobre o Projeto

Este é o website e portfólio profissional de **Leo da Silva**, Product Designer e Engenheiro Front-end. 

Construído com foco em **desempenho extremo (Core Web Vitals)**, **design visual de alto nível**, **acessibilidade (WCAG 2.2 AA)** e **arquitetura de componentes moderna**, o portfólio reflete a filosofia de transformar problemas complexos em experiências simples, elegantes e sustentáveis.

---

## ✨ Funcionalidades Principais

- 🌓 **Design System com Modo Dark/Light Personalizado:**
  - Paleta refinada no modo escuro baseada exclusivamente em tons de **cinza escuro profundo** (`#090d16` / `#111625`) e **azul elétrico** (`#2079f5`), com excelente contraste e legibilidade.
  - Alternância de tema instantânea persistida em `localStorage`.

- 🎯 **Galeria Interativa de Projetos (Work Section):**
  - Filtro dinâmico por categorias (*Design de Produto, Programação, Marketing Digital, Redes Sociais*).
  - Modal imersivo com galeria de imagens, métricas de impacto, links diretos e tags de tecnologias.

- 🍱 **Bento Grid Informativo (Sobre Mim):**
  - Apresentação modular de competências, anos de experiência, métricas de qualidade e princípios de desenvolvimento.
  - Botão de download rápido do **Curriculum Vitae (PDF)**.

- ✉️ **Formulário de Contacto Moderno com EmailJS:**
  - Layout dividido com canais diretos (Email, Telefone, Localização) à esquerda e formulário flutuante (*Floating Labels*) à direita.
  - Envio direto de mensagens em tempo real via `@emailjs/browser` com validação de dados e feedback visual de envio.

- ⚡ **Performance & SEO:**
  - Otimizado com Next.js App Router e Turbopack.
  - Pontuação média de **99.8%** no Google Lighthouse, tempos de carregamento instantâneos e tags Open Graph / SEO completas.
  - Navegação fluida com ancoragem inteligente (`scroll-margin-top`) que evita a sobreposição do header fixo.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org)** | Framework React com App Router, SSR/SSG e Turbopack |
| **[React 19](https://react.dev)** | Biblioteca base de UI para construção de componentes reativos |
| **[TypeScript](https://www.typescriptlang.org)** | Tipagem estática para robustez e escalabilidade do código |
| **[Tailwind CSS & CSS Vanilla](https://tailwindcss.com)** | Design system com CSS Variables, animações e tokens personalizados |
| **[@emailjs/browser](https://www.emailjs.com)** | Envio assíncrono de emails direto do client-side |
| **[Lucide React](https://lucide.dev)** | Ícones modernos, consistentes e otimizados em SVG |
| **[@vercel/analytics](https://vercel.com/analytics)** | Telemetria e métricas de desempenho e visitantes em tempo real |

---

## 📂 Estrutura do Projeto

```bash
leo-da-silva/
├── app/
│   ├── globals.css         # Variáveis de tema (light/dark) e estilos globais
│   ├── layout.tsx          # Root Layout com fontes Google e tags de metadados
│   └── page.tsx            # Página principal integrando todas as secções
├── components/
│   ├── sections/           # Secções modulares do portfólio
│   │   ├── Hero/           # Secção de abertura com cards flutuantes
│   │   ├── Services/       # Serviços prestados e detalhe dos métodos
│   │   ├── Work/           # Galeria de projetos com filtro e modal
│   │   ├── About/          # Bento grid sobre carreira, stack e CV
│   │   ├── Testimonials/   # Testemunhos e avaliações de clientes
│   │   ├── Contact/        # Formulário integrado ao EmailJS e canais diretos
│   │   └── Footer/         # Rodapé, links sociais e direitos de autor
│   ├── shared/             # Componentes partilhados (DarkModeToggle, Icons)
│   └── ui/                 # Primitivas de interface reutilizáveis
├── public/                 # Recursos estáticos (imagens, ícones e CV em PDF)
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração TypeScript
└── next.config.mjs         # Configurações do Next.js
```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/leo-da-silva.git
cd leo-da-silva
```

### 2. Instalar as Dependências
```bash
npm install
# ou
pnpm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### 4. Build de Produção
```bash
npm run build
npm run start
```

---

## 📬 Contacto & Redes

- **Email:** [geral.leodasilva@gmail.com](mailto:geral.leodasilva@gmail.com)
- **Telefone:** [+244 952 789 321](tel:+244952789321)
- **Localização:** Luanda, Angola · Disponível globalmente (Remoto)
- **LinkedIn:** [Leo da Silva](https://linkedin.com)
- **GitHub:** [Leo da Silva](https://github.com)

---

<div align="center">
  <p>© 2026 Leo da Silva. Todos os direitos reservados.</p>
</div>
