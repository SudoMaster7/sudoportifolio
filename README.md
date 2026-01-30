# SUDO Portfolio - Leonardo Brito

A stunning, high-tech SaaS-style portfolio website showcasing Leonardo Brito's software products and engineering services.

## 🎨 Features

- **Premium Dark Mode Design** - Slate-950 background with electric purple and green accents
- **Glassmorphism Effects** - Modern glass-card styling with backdrop blur
- **Smooth Animations** - Framer Motion scroll-triggered reveals
- **Fully Responsive** - Mobile-first design with breakpoints for tablet and desktop
- **SEO Optimized** - Proper meta tags, semantic HTML, and accessibility

## 🛠️ Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icon library
- **CSS Custom Properties** - Scalable design system

## 📁 Project Structure

```
portifolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── ProductCard.tsx       # Reusable product card
│   │   ├── ProductsSection.tsx   # Signature products showcase
│   │   ├── ServiceCard.tsx       # Service offering card
│   │   ├── ServicesSection.tsx   # Services grid
│   │   ├── TechStack.tsx         # Technology badges
│   │   └── Footer.tsx            # Footer with CTA
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles & design system
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd portifolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Update Links

Replace placeholder links in the following files:

1. **Hero.tsx** - LinkedIn URL (line ~76)
2. **ProductsSection.tsx** - FullFoil and ChatBot project URLs
3. **Footer.tsx** - WhatsApp, LinkedIn, and GitHub URLs

### Change Colors

All colors are defined as CSS custom properties in `src/index.css`:

```css
--color-accent-purple: #8b5cf6;
--color-accent-green: #10b981;
--color-bg-primary: #020617;
```

## 📄 License

All rights reserved © 2026 Leonardo Brito (SUDO)

## 📞 Contact

- **WhatsApp**: [5521983388872](https://wa.me/5521983388872)
- **LinkedIn**: [Update your profile URL]
- **GitHub**: [Update your profile URL]

---

Built with ❤️ using React, TypeScript, and Framer Motion
