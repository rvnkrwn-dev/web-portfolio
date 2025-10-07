# GSAP Animation Guide

Panduan lengkap implementasi GSAP (GreenSock Animation Platform) di portfolio ini.

![GSAP](https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff954d57...

## 🎯 Overview

Portfolio ini menggunakan GSAP 3 untuk menciptakan animasi yang smooth, performant, dan profesional. GSAP memberikan kontrol penuh atas animasi dengan performa yang optimal.

## 📦 Instalasi

GSAP sudah terinstall di project ini:

```bash
npm install gsap
```

## 🚀 Fitur GSAP yang Digunakan

### 1. **Core GSAP**
- `gsap.to()` - Animasi dari state saat ini ke target
- `gsap.from()` - Animasi dari nilai awal ke state saat ini
- `gsap.fromTo()` - Kontrol penuh dari dan ke
- `gsap.timeline()` - Sequence animasi kompleks

### 2. **ScrollTrigger Plugin**
- Scroll-based animations
- Parallax effects
- Reveal animations on scroll
- Pin sections

### 3. **ScrollToPlugin**
- Smooth scroll navigation
- Custom easing untuk scroll

## 🎨 Komponen dengan GSAP

### HeroGSAP.astro

Hero section dengan entrance animations yang spectacular:

**Animasi yang diimplementasikan:**
- ✨ Label fade in dengan slide up
- 🎭 Title dengan 3D rotateX effect
- 📝 Description smooth fade in
- 🎯 Buttons dengan stagger animation
- 🌊 Floating gradient orbs
- 🧲 Magnetic button effect
- 📜 Parallax scroll effect

```javascript
// Hero entrance timeline
const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

tl.from('.label-text', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2
})
.from('.title-line .word', {
  y: 100,
  opacity: 0,
  rotateX: -90,
  stagger: 0.2,
  duration: 1.2,
  transformOrigin: 'top center'
}, '-=0.6');
```

**Magnetic Button Effect:**
```javascript
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  gsap.to(button, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3,
    ease: 'power2.out'
  });
});
```

### StatsGSAP.astro

Stats section dengan animated counters dan hover effects:

**Animasi yang diimplementasikan:**
- 🔢 Counter animation dari 0 ke target
- ✨ Cards fade in dengan stagger
- 🎨 Glow effect on hover
- 📐 Parallax movement
- 🎭 3D transform on hover

```javascript
// Counter animation
const animateCounter = (element, target) => {
  const counter = { value: 0 };

  gsap.to(counter, {
    value: target,
    duration: 2.5,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.ceil(counter.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true
    }
  });
};
```

### ProjectsGSAP.astro

Projects grid dengan scroll-triggered animations:

**Animasi yang diimplementasikan:**
- 📱 Project cards reveal on scroll
- 🎯 Staggered entrance animations
- 🖼️ Image scale on hover
- 📜 Parallax scrolling effect
- 🎨 Overlay fade animations

```javascript
// Scroll-triggered card animation
projectCards.forEach((card, index) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    delay: (index % 2) * 0.2
  });
});
```

## 🎪 Efek Animasi Signature

### 1. Magnetic Effect

Elemen mengikuti mouse dengan elastic bounce:

```javascript
element.addEventListener('mousemove', (e) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  gsap.to(element, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3,
    ease: 'power2.out'
  });
});

element.addEventListener('mouseleave', () => {
  gsap.to(element, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: 'elastic.out(1, 0.5)'
  });
});
```

### 2. Text Reveal Animation

Text muncul dengan slide up dan fade:

```javascript
gsap.from('.title-word', {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power4.out'
});
```

### 3. Parallax Scroll

Elemen bergerak dengan kecepatan berbeda saat scroll:

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1  // Smooth scrolling effect
  },
  y: -50,
  ease: 'none'
});
```

### 4. Floating Animation

Elemen bergerak smooth seperti melayang:

```javascript
gsap.to('.orb', {
  x: 50,
  y: 30,
  scale: 1.1,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 5. ScrollTrigger Reveal

Elemen muncul saat di-scroll ke view:

```javascript
gsap.from('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 60%',
    toggleActions: 'play none none reverse'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});
```

## 🎯 ScrollTrigger Actions

Format: `onEnter onLeave onEnterBack onLeaveBack`

```javascript
toggleActions: 'play none none reverse'
// play    - Main saat enter viewport
// none    - Tidak ada aksi saat leave
// none    - Tidak ada aksi saat enter kembali
// reverse - Reverse animation saat scroll up
```

Options lainnya:
- `play` - Play animation
- `pause` - Pause animation
- `resume` - Resume animation
- `reset` - Reset ke awal
- `restart` - Restart animation
- `complete` - Jump ke akhir
- `reverse` - Reverse animation
- `none` - Tidak ada aksi

## 🎨 Easing Functions

### Power Eases (Paling sering digunakan)
```javascript
ease: 'power1.out'  // Gentle
ease: 'power2.out'  // Medium
ease: 'power3.out'  // Strong (default kita)
ease: 'power4.out'  // Very strong
```

### Elastic (Bounce effect)
```javascript
ease: 'elastic.out(1, 0.5)'  // Bouncy
ease: 'elastic.inOut(1, 0.3)' // Bouncy in & out
```

### Back (Overshoot)
```javascript
ease: 'back.out(1.7)'  // Overshoot
ease: 'back.inOut(2)'  // Overshoot in & out
```

### Sine (Smooth)
```javascript
ease: 'sine.inOut'  // Very smooth
ease: 'sine.out'    // Smooth deceleration
```

### Custom Cubic Bezier
```javascript
ease: 'cubic-bezier(0.4, 0, 0.2, 1)'  // Material Design
```

## 📊 Performance Tips

### 1. Will-Change Property
```css
.animated-element {
  will-change: transform, opacity;
}
```

### 2. Transform vs Position
```javascript
// ❌ Avoid - Triggers layout
gsap.to(element, { left: 100, top: 100 });

// ✅ Better - Only triggers composite
gsap.to(element, { x: 100, y: 100 });
```

### 3. Batch ScrollTriggers
```javascript
ScrollTrigger.batch('.item', {
  onEnter: batch => gsap.to(batch, {opacity: 1}),
  start: 'top 80%'
});
```

### 4. Kill Animations When Not Needed
```javascript
const tween = gsap.to(element, {x: 100});
// Later...
tween.kill();
```

## 🎬 Timeline Best Practices

### Sequence Animations
```javascript
const tl = gsap.timeline();

tl.from('.element1', { y: 50, opacity: 0 })
  .from('.element2', { y: 50, opacity: 0 })  // After element1
  .from('.element3', { y: 50, opacity: 0 }); // After element2
```

### Overlap Animations
```javascript
const tl = gsap.timeline();

tl.from('.element1', { y: 50, opacity: 0 })
  .from('.element2', { y: 50, opacity: 0 }, '-=0.5')  // Start 0.5s before element1 ends
  .from('.element3', { y: 50, opacity: 0 }, '<');      // Start at same time as element2
```

### Position Parameters
```javascript
'-=0.5'  // 0.5 seconds before previous animation ends
'+=0.5'  // 0.5 seconds after previous animation ends
'<'      // Start of previous animation
'>'      // End of previous animation
'<0.5'   // 0.5s after start of previous
```

## 🔧 Debugging

### Visual Timeline Inspector
```javascript
gsap.registerPlugin(GSDevTools);
GSDevTools.create();
```

### Console Logs
```javascript
gsap.to(element, {
  x: 100,
  onStart: () => console.log('Animation started'),
  onUpdate: () => console.log('Animating...'),
  onComplete: () => console.log('Animation complete')
});
```

### ScrollTrigger Markers
```javascript
ScrollTrigger.create({
  trigger: element,
  start: 'top 80%',
  markers: true  // Show visual markers
});
```

## 📱 Responsive Animations

### Conditional Animations
```javascript
// Only on desktop
if (window.innerWidth > 768) {
  gsap.to(element, { x: 100 });
}
```

### ScrollTrigger Refresh
```javascript
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
```

### Match Media
```javascript
ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    // Desktop animations
  },
  "(max-width: 767px)": function() {
    // Mobile animations
  }
});
```

## 🎓 Learning Resources

### Official Documentation
- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualizer](https://greensock.com/ease-visualizer/)

### Video Tutorials
- [GreenSock YouTube Channel](https://www.youtube.com/@GreenSockLearning)
- [Creative Coding Club](https://www.youtube.com/@CreativeCodingClub)

### Code Examples
- [CodePen Collection](https://codepen.io/collection/nLakjm)
- [GSAP Showcase](https://greensock.com/showcase/)

## 💡 Pro Tips

1. **Use Timeline for Complex Sequences**
   - Lebih mudah untuk control dan debug
   - Bisa pause, reverse, timeScale seluruh sequence

2. **Stagger for Lists**
   ```javascript
   gsap.from('.item', {
     y: 50,
     opacity: 0,
     stagger: 0.1  // 0.1s delay between each
   });
   ```

3. **ScrollTrigger Once**
   ```javascript
   scrollTrigger: {
     trigger: element,
     once: true  // Only animate once
   }
   ```

4. **Elastic Bounce for Playful UI**
   ```javascript
   ease: 'elastic.out(1, 0.5)'
   ```

5. **Power4 for Smooth Professional Animations**
   ```javascript
   ease: 'power4.out'
   ```

## 🚀 Next Steps

1. **Add More Plugins**
   ```bash
   npm install @gsap/member
   ```
   - MorphSVG
   - DrawSVG
   - MotionPathPlugin

2. **Custom Cursors**
   - Create magnetic cursor
   - Add trail effects

3. **Page Transitions**
   - Smooth page navigation
   - Creative loading screens

4. **3D Effects**
   - Use with Three.js
   - WebGL integrations

## 🎯 Common Use Cases

### Button Hover
```javascript
button.addEventListener('mouseenter', () => {
  gsap.to(button, { scale: 1.05, duration: 0.3 });
});

button.addEventListener('mouseleave', () => {
  gsap.to(button, { scale: 1, duration: 0.3 });
});
```

### Modal Open/Close
```javascript
// Open
gsap.fromTo(modal, 
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
);

// Close
gsap.to(modal, {
  scale: 0.8,
  opacity: 0,
  duration: 0.3,
  ease: 'power2.in'
});
```

### Loading Progress
```javascript
gsap.to('.progress-bar', {
  width: '100%',
  duration: 2,
  ease: 'power2.inOut'
});
```

## 📄 License

GSAP adalah gratis untuk penggunaan non-komersial. Untuk project komersial, pertimbangkan [GSAP License](https://greensock.com/licensing/).

---

**Selamat berkreasi dengan GSAP! 🎉**

Dibuat dengan ❤️ menggunakan GSAP 3