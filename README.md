# Portfolio Website - Astro + GSAP

Portfolio website modern yang dibangun dengan Astro JS dan GSAP animations, menampilkan desain minimalis dan profesional dengan dark theme dan animasi yang spektakuler.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## 🚀 Fitur

### 🎬 GSAP Animations (NEW!)
- ✨ **Smooth Entrance Animations** - Hero section dengan timeline animations
- 🧲 **Magnetic Button Effects** - Interactive buttons yang mengikuti mouse
- 📜 **Scroll-Triggered Animations** - Elemen muncul saat di-scroll
- 🎯 **Parallax Effects** - Multiple layer parallax scrolling
- 🔢 **Animated Counters** - Stats counter dengan smooth animation
- 🎭 **3D Transform Effects** - Rotasi dan scale dengan depth
- 💫 **Floating Elements** - Gradient orbs dengan smooth movement
- 🎨 **Stagger Animations** - Sequential reveals dengan delay
- 🌊 **Smooth Scroll** - Custom smooth scrolling navigation
- 📱 **Responsive Animations** - Adaptive untuk semua device sizes

### 🎨 Design Features
- ✨ **Futuristic & Vibrant Dark Mode Design** - Desain modern dengan tema luar angkasa
- 🌟 **Animated Starfield Background** - Latar belakang bintang dengan animasi twinkle
- 🎨 **Gradient Effects** - Tombol dan teks dengan efek gradasi warna-warni
- 💫 **Abstract Decorative Shapes** - Elemen dekoratif nebula dan geometris
- 🎯 **Reusable Component System** - Komponen yang dapat digunakan kembali
- 📱 **Fully Responsive** - Mobile, tablet, desktop optimized
- ⚡ **Performance Tinggi** - Optimal performance dengan Astro
- 🔍 **SEO Friendly** - Optimasi untuk search engines
- ♿ **Accessible** - WCAG compliant dengan keyboard navigation
- 💼 **Experience Cards** - Kartu dengan gradient border dan noise texture
- 📊 **Statistics Section** - Menampilkan metrics dan achievements
- 📧 **Contact Section** - Form kontak dengan design menarik

## 🛠️ Teknologi

- [Astro](https://astro.build) - Static Site Generator
- [GSAP 3](https://greensock.com/gsap/) - Professional-grade animation library
- HTML5 & CSS3
- TypeScript
- Google Fonts (Inter)

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:4321
```

## 🎨 Design System & Animation Guide

Portfolio ini dilengkapi dengan design system dan animation guide yang lengkap:
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Dokumentasi design system lengkap
- [GSAP_GUIDE.md](./GSAP_GUIDE.md) - Panduan implementasi GSAP (NEW!)

### Komponen Utama

#### GSAP Components (NEW!)
1. **HeroGSAP** - Hero section dengan entrance animations & magnetic buttons
2. **StatsGSAP** - Animated counters dengan scroll triggers
3. **ProjectsGSAP** - Project cards dengan reveal animations
4. **ContactGSAP** - Contact section dengan magnetic cards

#### Classic Components
1. **Button Component** - 3 variants (primary, secondary, tag) dengan gradient effects
2. **Experience Card** - Kartu dengan gradient border dan noise texture
3. **Starfield Background** - Animated background dengan bintang berkelap-kelip
4. **Abstract Shapes** - Elemen dekoratif nebula dan geometric shapes
5. **Hero Vibrant** - Hero section lengkap dengan semua efek visual

### Demo Pages

- **`/`** - Homepage dengan GSAP animations (UPDATED!)
- **`/gsap-demo`** - Full showcase GSAP animations
- **`/vibrant-demo`** - Showcase lengkap design system dengan semua komponen
- **`/experience-demo`** - Demo khusus untuk experience cards

## 🏗️ Struktur Project

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Homepage with GSAP
│   │   ├── gsap-demo.astro       # GSAP showcase (NEW!)
│   │   ├── vibrant-demo.astro    # Full design system demo
│   │   └── experience-demo.astro # Experience cards demo
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with GSAP nav
│   ├── components/
│   │   ├── HeroGSAP.astro        # GSAP Hero component (NEW!)
│   │   ├── StatsGSAP.astro       # GSAP Stats component (NEW!)
│   │   ├── ProjectsGSAP.astro    # GSAP Projects component (NEW!)
│   │   ├── Button.astro          # Reusable button (3 variants)
│   │   ├── ExperienceCard.astro  # Experience card with gradient border
│   │   ├── Experience.astro      # Experience section
│   │   ├── Starfield.astro       # Animated starfield background
│   │   ├── AbstractShapes.astro  # Decorative shapes
│   │   └── HeroVibrant.astro     # Vibrant hero section
│   └── assets/                   # Images & static assets
├── public/                        # Static files
├── DESIGN_SYSTEM.md              # Complete design system docs
├── GSAP_GUIDE.md                 # GSAP implementation guide (NEW!)
├── astro.config.mjs              # Astro configuration
└── package.json                  # Dependencies
```

## 📝 Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server di `localhost:4321`         |
| `npm run build`   | Build production site ke `./dist/`           |
| `npm run preview` | Preview build sebelum deploy                 |

## 🎨 Kustomisasi

### Colors

Portfolio ini menggunakan color palette futuristik dengan gradasi:

```css
/* Primary Colors */
--bg-primary: #0a0a0f;          /* Deep space black */
--bg-secondary: #0d0d14;        /* Slightly lighter dark */
--bg-tertiary: #0f0f1a;         /* Card backgrounds */

/* Gradient Colors */
--purple: #8b5cf6;              /* Vivid purple */
--pink: #ec4899;                /* Hot pink */
--red: #ef4444;                 /* Bright red */
--orange: #f59e0b;              /* Vibrant orange */
--green: #22c55e;               /* Success green */

/* Text Colors */
--text-primary: #ffffff;        /* Pure white */
--text-secondary: rgba(255, 255, 255, 0.6);   /* 60% white */
--text-tertiary: rgba(255, 255, 255, 0.4);    /* 40% white */
```

### Using Components

#### Button Component
```astro
import Button from '../components/Button.astro';

<!-- Primary button dengan gradient -->
<Button variant="primary" size="large" href="#contact">
  HIRE ME
</Button>

<!-- Secondary ghost button -->
<Button variant="secondary" size="medium">
  VIEW WORK
</Button>

<!-- Tag button untuk skills/filters -->
<Button variant="tag" size="small">React</Button>
```

#### Experience Card
```astro
import ExperienceCard from '../components/ExperienceCard.astro';

<ExperienceCard
  number="01"
  title="Senior UI Designer"
  company="User-Hub"
  location="Bangladesh"
  duration="JOB DURATION"
  years="2 YEARS"
/>
```

#### Decorative Elements
```astro
import Starfield from '../components/Starfield.astro';
import AbstractShapes from '../components/AbstractShapes.astro';

<!-- Animated starfield background -->
<Starfield density="high" animated={true} />

<!-- Abstract decorative shapes -->
<AbstractShapes variant="hero" />
```

### Content

1. **Homepage** (`src/pages/index.astro`):
   - Edit hero title, description, dan stats
   - Update project cards dengan project Anda
   - Ganti images dengan project screenshots Anda
   - Update contact information

2. **Vibrant Hero** (`src/components/HeroVibrant.astro`):
   - Customize name, title, description
   - Update social media links
   - Change button text and links
   - Modify code snippet content

3. **Experience Section** (`src/components/Experience.astro`):
   - Add your work experience data
   - Update company names and locations
   - Customize duration and years

4. **Layout** (`src/layouts/Layout.astro`):
   - Update logo dan site title
   - Edit navigation links
   - Update footer links (GitHub, Twitter, LinkedIn)

### Images

Ganti placeholder images dengan gambar Anda sendiri:
- Letakkan images di folder `public/`
- Update src di file `.astro`:
  ```html
  <img src="/your-image.jpg" alt="Description" />
  ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Netlify

1. Push code ke GitHub
2. Connect repository di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Upload folder dist/ ke GitHub Pages
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Deploy Astro](https://docs.astro.build/en/guides/deploy/)

## 🎯 Customization Tips

1. **Gradient Colors**: Edit gradient di komponen untuk match brand colors Anda
   ```css
   /* Change from purple-pink-red to blue-cyan-teal */
   background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #14b8a6 100%);
   ```

2. **Animation Speed**: Adjust animation duration di komponen
   ```css
   /* Slower animations */
   animation: float 30s ease-in-out infinite;
   ```

3. **Border Radius**: Customize roundness of elements
   ```css
   border-radius: 24px; /* More rounded */
   border-radius: 8px;  /* Less rounded */
   ```

4. **Add Blog**: Buat folder `src/pages/blog/` untuk blog posts
5. **Add CMS**: Integrate dengan Contentful, Sanity, atau Markdown files
6. **SEO**: Tambahkan meta tags dan sitemap
7. **Analytics**: Integrate Google Analytics atau Plausible

## ✨ Visual Effects

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glow Effect
```css
.glow {
  box-shadow: 
    0 4px 15px rgba(139, 92, 246, 0.4),
    0 0 30px rgba(236, 72, 153, 0.3);
}
```

### Glass Morphism
```css
.glass {
  background: rgba(15, 15, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📄 License

MIT License - Feel free to use this template for your portfolio!

## ♿ Accessibility

Design system ini dibuat dengan accessibility sebagai prioritas:
- ✅ Keyboard navigation support
- ✅ Focus indicators yang jelas
- ✅ WCAG AA color contrast
- ✅ ARIA labels pada interactive elements
- ✅ Respects `prefers-reduced-motion`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🎬 GSAP Features

### Magnetic Button Effect
Buttons yang interaktif mengikuti pergerakan mouse dengan elastic bounce back.

### Scroll-Triggered Animations
Semua section memiliki reveal animations yang ter-trigger saat scroll ke viewport.

### Animated Counters
Stats numbers yang count up dari 0 dengan smooth easing.

### Parallax Scrolling
Multiple layers bergerak dengan kecepatan berbeda untuk depth effect.

### Smooth Timeline Sequences
Hero entrance menggunakan GSAP timeline untuk orchestrate multiple animations.

Lihat [GSAP_GUIDE.md](./GSAP_GUIDE.md) untuk dokumentasi lengkap dan code examples.

## 📖 Documentation

Untuk dokumentasi lengkap:
- Design System: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- GSAP Animations: [GSAP_GUIDE.md](./GSAP_GUIDE.md)

## 💬 Contact

Jika ada pertanyaan atau butuh bantuan:
- Email: hello@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Dibuat dengan ❤️ menggunakan Astro**
