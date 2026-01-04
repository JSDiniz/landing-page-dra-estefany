# 🦷 Landing Page - Dra. Estefany Oliveira

Landing page moderna e responsiva para Dra. Estefany Oliveira, localizado em Manaus/AM. A Landing page site oferece informações sobre serviços, galeria de trabalhos, depoimentos de pacientes e um sistema completo de agendamento de consultas integrado com Google Calendar.

## ✨ Funcionalidades

- **Hero Section**: Apresentação principal com call-to-action
- **Sobre**: Informações sobre a profissional e o consultório
- **Serviços**: Catálogo de tratamentos oferecidos (Implantes, Periodontia, Ortodontia, etc.)
- **Agendamento**: Sistema completo de agendamento com:
  - Seleção de data e horário
  - Integração com Google Calendar para verificar disponibilidade
  - Validação de horários passados (desabilita horários já ocorridos no dia atual)
  - Formulário de contato integrado
- **Galeria**: Exibição de trabalhos realizados
- **FAQ**: Perguntas frequentes sobre tratamentos
- **Depoimentos**: Carrossel de avaliações de pacientes
- **SEO Otimizado**: Meta tags, structured data (JSON-LD) e sitemap
- **Design Responsivo**: Totalmente adaptável para mobile, tablet e desktop

## 🛠️ Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **Embla Carousel** - Carrossel de imagens
- **React Slick** - Componente de slider

## 📋 Pré-requisitos

- Node.js 16+ 
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd landing-page-dra-estefany
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Como executar

### Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173`

### Build para produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
landing-page-dra-estefany/
├── public/
│   ├── logo.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   └── index.tsx          # Componente principal da aplicação
│   ├── components/
│   │   ├── About/             # Seção sobre
│   │   ├── Appointment/      # Formulário de agendamento
│   │   ├── Booking/           # Seção de agendamento
│   │   ├── FAQ/               # Perguntas frequentes
│   │   ├── Footer/            # Rodapé
│   │   ├── Gallery/           # Galeria de imagens
│   │   ├── Header/            # Cabeçalho e navegação
│   │   ├── Hero/              # Hero section
│   │   ├── Modal/             # Componente de modal
│   │   ├── Scheduler/         # Sistema de agendamento
│   │   │   ├── CalendarPicker.tsx
│   │   ├── SchedulerCard.tsx
│   │   │   └── TimeSlots.tsx
│   │   ├── SEO/               # Componente de SEO
│   │   ├── Services/          # Seção de serviços
│   │   └── Testimonials/      # Depoimentos
│   ├── assets/                # Imagens e SVGs
│   ├── mocks/
│   │   └── doctorAvailability.mock.ts  # Disponibilidade do médico
│   ├── styles/
│   │   └── index.css          # Estilos globais
│   ├── utils/
│   │   └── calendar.ts        # Utilitários de calendário
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🔧 Configuração

### Integração com Google Calendar

O sistema de agendamento está configurado para buscar eventos do Google Calendar através da API:
```
https://api-emails-eight.vercel.app/appointments?calendarId=dra.estefanyoliveira@gmail.com
```

Para alterar o calendarId, edite o arquivo `src/components/Scheduler/SchedulerCard.tsx` na linha 37.

### Disponibilidade do Médico

A disponibilidade de horários é configurada no arquivo `src/mocks/doctorAvailability.mock.ts`. O formato é:

```typescript
{
  date: "YYYY-MM-DD",
  periods: [
    { start: "HH:MM", end: "HH:MM" }
  ]
}
```

## 🎨 Personalização

### Cores e Estilos
As cores principais podem ser personalizadas no arquivo `tailwind.config.js` e nos componentes individuais.

### Conteúdo
- **Serviços**: Edite `src/components/Services/index.tsx`
- **FAQ**: Edite `src/components/FAQ/faqData.ts`
- **Depoimentos**: Edite `src/components/Testimonials/testimonialData.ts`
- **Galeria**: Edite `src/components/Gallery/galleryData.ts`

## 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🔍 SEO

O projeto inclui:
- Meta tags otimizadas
- Structured Data (JSON-LD) para Google
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Open Graph tags para redes sociais

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter ESLint

## 🌐 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte aplicações Vite/React:

- **Vercel**: Conecte o repositório e faça deploy automático
- **Netlify**: Arraste a pasta `dist` após o build
- **GitHub Pages**: Configure o workflow de deploy

## 📄 Licença

Este projeto é privado e de propriedade da Dra. Estefany Oliveira.

## 👥 Contato

**Dra. Estefany Oliveira**
- 📍 Av. Djalma Batista, 946 - Nossa Sra. das Graças, Manaus/AM
- 📞 +55 (92) 98618-5420
- 🌐 https://draestefany.com.br

---

Desenvolvido com ❤️ para cuidar do seu sorriso


