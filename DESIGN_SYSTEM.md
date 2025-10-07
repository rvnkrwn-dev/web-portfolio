# Design System Documentation

## Overview

This design system implements a **Futuristic & Vibrant Dark Mode** aesthetic, perfect for modern portfolios in technology and creative fields. The design features gradient effects, animated backgrounds, and clean typography that creates an immersive, professional experience.

---

## 🎨 Color Palette

### Primary Colors
```css
--bg-primary: #0a0a0f;        /* Deep space black */
--bg-secondary: #0d0d14;      /* Slightly lighter dark */
--bg-tertiary: #0f0f1a;       /* Card backgrounds */
```

### Gradient Colors
```css
--purple: #8b5cf6;            /* Vivid purple */
--pink: #ec4899;              /* Hot pink */
--red: #ef4444;               /* Bright red */
--orange: #f59e0b;            /* Vibrant orange */
--green: #22c55e;             /* Success green */
```

### Text Colors
```css
--text-primary: #ffffff;      /* Pure white */
--text-secondary: rgba(255, 255, 255, 0.6);   /* 60% white */
--text-tertiary: rgba(255, 255, 255, 0.4);    /* 40% white */
```

---

## 🔤 Typography

### Font Family
- **Primary**: Inter (weights: 400, 500, 600, 700, 800, 900)
- **Monospace**: Monaco, Menlo, Ubuntu Mono

### Type Scale
```css
/* Headings */
h1: clamp(3rem, 8vw, 6rem)     /* 48-96px */
h2: clamp(2.5rem, 5vw, 4rem)   /* 40-64px */
h3: clamp(1.5rem, 3vw, 2.5rem) /* 24-40px */

/* Body */
Large: 1.25rem (20px)
Regular: 1.125rem (18px)
Small: 0.875rem (14px)
Tiny: 0.75rem (12px)
```

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

---

## 🎯 Components

### 1. Button Component

#### Variants

**Primary Button**
- Gradient background (purple → pink → red)
- Glowing box-shadow effect
- Uppercase text with letter-spacing
- Hover: Brightens and elevates

```astro
<Button variant="primary" size="large">HIRE ME</Button>
```

**Secondary Button**
- Transparent background with border
- Ghost/outline style
- Backdrop blur effect
- Hover: Purple tint with glow

```astro
<Button variant="secondary" size="medium">VIEW WORK</Button>
```

**Tag Button**
- Pill-shaped with minimal border
- Used for filters, skills, categories
- Hover: Scales up slightly
- Active state: Gradient background

```astro
<Button variant="tag" size="small">React</Button>
```

#### Sizes
- `small`: 0.5rem × 1rem padding
- `medium`: 0.875rem × 2rem padding
- `large`: 1.125rem × 2.5rem padding

---

### 2. Experience Card

**Features:**
- Dark background with gradient border
- Animated gradient on hover
- Noise texture overlay
- Number badge with white background
- Horizontal layout (responsive to vertical on mobile)

**Props:**
```typescript
{
  number: string;        // "01", "02", etc.
  title: string;         // "Senior UI Designer"
  company: string;       // "User-Hub"
  location: string;      // "Bangladesh"
  duration: string;      // "JOB DURATION"
  years: string;         // "2 YEARS"
}
```

**Usage:**
```astro
<ExperienceCard
  number="01"
  title="Senior UI Designer"
  company="User-Hub"
  location="Bangladesh"
  duration="JOB DURATION"
  years="2 YEARS"
/>
```

---

### 3. Starfield Background

Animated star field with multiple layers creating depth and movement.

**Features:**
- 3 layers of stars with different sizes and colors
- Twinkling animation
- Shooting stars (disabled on mobile)
- Respects `prefers-reduced-motion`

**Props:**
```typescript
{
  density?: 'low' | 'medium' | 'high';  // Default: 'medium'
  animated?: boolean;                    // Default: true
  class?: string;
}
```

**Usage:**
```astro
<Starfield density="high" animated={true} />
```

---

### 4. Abstract Shapes

Decorative nebula-like shapes and geometric elements.

**Features:**
- Nebula blobs with radial gradients
- Glowing circles
- Rotating triangles
- Floating animations
- Pulse effects

**Variants:**
- `hero`: Large, heavily blurred shapes for hero sections
- `section`: Medium shapes for content sections
- `minimal`: Subtle shapes with dot patterns

**Usage:**
```astro
<AbstractShapes variant="hero" />
```

---

### 5. Hero Vibrant

Full-featured hero section with all decorative elements.

**Features:**
- Starfield background
- Abstract shapes
- Availability status badge (with animated dot)
- Large gradient text for name
- Social media links
- Code snippet visual element
- Scroll indicator

**Props:**
```typescript
{
  name?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}
```

---

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

### Gradient Border
```css
/* Create a gradient border using ::before pseudo-element */
.element::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
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

### Backdrop Blur
```css
.blur {
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 26, 0.8);
}
```

---

## 🎬 Animations

### Float Animation
```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-15px, 20px) scale(0.95);
  }
  75% {
    transform: translate(30px, 15px) scale(1.02);
  }
}
```

### Pulse Animation
```css
@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
```

### Gradient Shift
```css
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
```

### Twinkle (for stars)
```css
@keyframes twinkle {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Desktop First Approach */
--breakpoint-xl: 1440px
--breakpoint-lg: 1024px
--breakpoint-md: 768px
--breakpoint-sm: 480px
```

### Mobile Optimizations
- Reduce blur effects on mobile for performance
- Hide shooting stars and complex triangles
- Stack horizontal layouts vertically
- Reduce font sizes using `clamp()`
- Full-width buttons on small screens

---

## ♿ Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
.btn:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 3px;
}
```

### Reduced Motion
Respects user preferences for reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Color Contrast
- All text meets WCAG AA standards
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text

### ARIA Labels
Social media links and interactive elements include proper aria-labels:
```html
<a href="https://github.com" aria-label="GitHub">
```

---

## 🎨 Design Patterns

### Noise Texture
Add subtle noise to backgrounds for depth:
```css
.element::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.6;
}
```

### Dot Pattern
Create regular dot patterns:
```css
.dots {
  background-image: 
    radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}
```

### Glass Morphism
Create frosted glass effect:
```css
.glass {
  background: rgba(15, 15, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 📦 Component Architecture

### File Structure
```
src/
├── components/
│   ├── Button.astro              # Reusable button component
│   ├── ExperienceCard.astro      # Card for work experience
│   ├── Starfield.astro           # Animated background stars
│   ├── AbstractShapes.astro      # Decorative shapes
│   ├── HeroVibrant.astro         # Hero section
│   └── Experience.astro          # Experience section
├── pages/
│   ├── index.astro               # Main page
│   ├── experience-demo.astro     # Experience cards demo
│   └── vibrant-demo.astro        # Full design system demo
└── layouts/
    └── Layout.astro              # Base layout
```

### Import Examples
```astro
---
import Button from '../components/Button.astro';
import Starfield from '../components/Starfield.astro';
import AbstractShapes from '../components/AbstractShapes.astro';
---
```

---

## 🚀 Usage Examples

### Complete Hero Section
```astro
<HeroVibrant
  name="Your Name"
  title="Your Title"
  description="Your description"
  primaryButtonText="HIRE ME"
  primaryButtonHref="#contact"
  secondaryButtonText="VIEW WORK"
  secondaryButtonHref="#projects"
/>
```

### Experience Section with Cards
```astro
<section class="experience-section">
  <Starfield density="medium" animated={true} />
  <AbstractShapes variant="section" />
  
  <div class="container">
    {experiences.map((exp) => (
      <ExperienceCard {...exp} />
    ))}
  </div>
</section>
```

### Button Group
```astro
<div class="button-group">
  <Button variant="primary" size="large">
    PRIMARY ACTION
  </Button>
  <Button variant="secondary" size="large">
    SECONDARY ACTION
  </Button>
</div>
```

---

## 🔧 Customization

### Changing Colors
Edit the gradient values in components:
```css
/* From purple-pink-red */
background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #ef4444 100%);

/* To blue-cyan-teal */
background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #14b8a6 100%);
```

### Adjusting Animation Speed
```css
/* Slower animations */
animation: float 30s ease-in-out infinite;

/* Faster animations */
animation: float 10s ease-in-out infinite;
```

### Modifying Border Radius
```css
/* More rounded */
border-radius: 24px;

/* Less rounded */
border-radius: 8px;
```

---

## 📚 References

### Inspiration
- Space and cosmic themes
- Glassmorphism design trend
- Cyberpunk aesthetics
- Modern portfolio sites

### Technologies
- Astro 5.14.1
- Native CSS (no preprocessors)
- Inter font family
- SVG icons

### Best Practices
- Mobile-first responsive design
- Semantic HTML
- Accessible components
- Performance optimized animations
- Progressive enhancement

---

## 🎯 Demo Pages

View the components in action:

1. **Vibrant Demo** (`/vibrant-demo`)
   - Full hero section
   - Button showcase
   - Experience cards
   - Contact section

2. **Experience Demo** (`/experience-demo`)
   - Focused view of experience cards
   - Starfield background
   - Clean layout

---

## 📄 License

This design system is part of your portfolio project. Feel free to customize and use it for your own projects.

---

**Last Updated**: 2024
**Version**: 1.0.0
**Author**: Portfolio Design System