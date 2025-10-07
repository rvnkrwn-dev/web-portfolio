# Custom Cursor & Magnetic Navigation Documentation

## Overview
Custom cursor effect dengan text reveal dan magnetic navigation yang memberikan interaksi visual menarik pada portfolio Anda. Efek ini menggunakan GSAP untuk animasi smooth dan blend mode untuk tampilan yang modern.

## ✅ Recent Updates
- **Text Reveal sekarang fully responsive** - Menggunakan CSS `::before` dengan `attr(data-text)` untuk inherit semua styles
- **Navbar colors updated** - Underline dan CTA button sekarang hijau (#00ff88) untuk konsistensi

## Fitur

### 1. **Custom Cursor Ball** ✅ Fixed
- Cursor dot kecil (8px) yang mengikuti mouse dengan cepat menggunakan `requestAnimationFrame`
- Cursor circle (40px) yang mengikuti dengan delay untuk efek smooth (lerp interpolation)
- Menggunakan `mix-blend-mode: difference` untuk kontras otomatis dengan background
- Bug fixed: Cursor sekarang smooth follow tanpa lag

### 2. **Text Reveal Effect** ✅ Fully Responsive
- Ketika hover pada judul/text besar, akan muncul warna accent (#00ff88) dengan efek circular reveal
- Menggunakan CSS `::before` pseudo-element dengan `attr(data-text)` untuk perfect responsiveness
- Text reveal otomatis inherit semua styles dari text asli (font-size, line-height, letter-spacing, dll)
- Menggunakan CSS `clip-path: circle()` untuk efek smooth
- Radius reveal: 150px dari posisi cursor
- **No more layout issues!** Text hijau sekarang 100% responsive seperti text aslinya

### 3. **Interactive Elements Hover**
- Cursor membesar (80px) saat hover pada:
  - Links (`<a>`)
  - Buttons
  - Contact cards
  - Project cards
  - Elements dengan class `.magnetic`

### 4. **Auto-detect Desktop Only**
- Otomatis disable di mobile/tablet
- Hanya aktif pada device dengan `hover: hover` dan width > 1024px

### 5. **Navbar Magnetic Effect** ⭐ NEW
- Nav links bergerak halus mengikuti cursor dalam radius tertentu
- Efek scale dan elastic bounce saat hover
- Logo dot berubah warna dan scale saat hover
- CTA button dengan efek SVG arrow yang bergerak
- Strength berbeda untuk setiap elemen:
  - Logo: 0.15 (subtle)
  - Nav links: 0.25 (medium)
  - CTA button: 0.35 (strong)

## Struktur File

```
portfolio/src/components/CustomCursor.astro
portfolio/src/components/NavbarMagnetic.astro
```

## Target Elements untuk Text Reveal

Efek text reveal otomatis diterapkan pada:
- `.hero-title .word` - Hero title words
- `.section-title` - Section titles
- `.title-word` - Title words
- `.hero-title h1` - Hero headings
- `h1` - Semua heading 1
- `h2` - Semua heading 2

**Catatan:** 
- Text harus minimal 30px tingginya untuk mendapat efek ini
- Text reveal menggunakan `::before` pseudo-element, sehingga otomatis responsive
- Semua CSS properties (font-size, line-height, etc) di-inherit secara native

## Kustomisasi

### Mengubah Warna Reveal
Edit di `CustomCursor.astro` CSS section:
```css
:global(.cursor-text-target::before) {
    color: #00ff88; /* Ubah sesuai keinginan */
}
```

Pilihan warna yang cocok:
- `#00ff88` - Green accent (default)
- `#3b82f6` - Blue
- `#a855f7` - Purple
- `#f43f5e` - Pink
- `#fbbf24` - Yellow

### Mengubah Ukuran Cursor
Edit di `CustomCursor.astro` CSS:
```css
.cursor-dot {
    width: 8px;  /* Ukuran dot */
    height: 8px;
}

.cursor-circle {
    width: 40px;  /* Ukuran circle normal */
    height: 40px;
}

/* Saat hover */
:global(body.cursor-hover) .cursor-circle {
    width: 80px;  /* Ukuran circle saat hover */
    height: 80px;
}
```

### Mengubah Radius Reveal
Edit di `CustomCursor.astro` CSS:
```css
:global(.cursor-text-target:hover::before) {
    clip-path: circle(150px at var(--mouse-x, 50%) var(--mouse-y, 50%));
    /* Ubah 150px ke ukuran yang diinginkan */
}
```

### Mengubah Kecepatan Animasi
Edit di `CustomCursor.astro` script:
```javascript
// Cursor dot (lebih cepat)
gsap.to(cursorDot, {
    duration: 0.15,  // Ubah untuk speed
    // ...
});

// Cursor circle (lebih lambat)
gsap.to(cursorCircle, {
    duration: 0.3,  // Ubah untuk speed
    // ...
});
```

## Menambah Target Element Custom

Untuk menambahkan elemen lain yang mendapat efek hover besar:

Edit di `CustomCursor.astro` script line ~137:
```javascript
const interactiveElements = document.querySelectorAll(
    'a, button, .btn, .magnetic, .contact-card, .project-card, .your-custom-class'
);
```

Untuk menambahkan selector text reveal custom:

Edit di `CustomCursor.astro` script line ~150:
```javascript
const targetSelectors = [
    '.hero-title .word',
    '.section-title',
    '.your-custom-selector',  // Tambahkan di sini
];
```

## Troubleshooting

### Cursor tidak muncul
- Pastikan browser width > 1024px
- Cek console untuk error JavaScript
- Pastikan GSAP terinstall dengan benar

### Text reveal tidak bekerja
- Pastikan text memiliki tinggi minimal 30px
- Cek apakah element sudah ter-render saat script dijalankan
- Gunakan `setTimeout(setupTextReveal, delay)` untuk content dinamis
- Pastikan element memiliki `data-text` attribute

### Text reveal tidak responsive
- ✅ **FIXED**: Sekarang menggunakan `::before` dengan `attr(data-text)` sehingga otomatis responsive
- Text hijau akan selalu match dengan text asli di semua ukuran layar

### Cursor tersendat
- Kurangi durasi animasi GSAP
- Pastikan tidak ada banyak element dengan efek sekaligus
- Cek performa browser dengan DevTools

## Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ❌ Mobile browsers (by design - auto disabled)
- ❌ IE11 (not supported)

## Performance Notes

- Menggunakan `will-change` untuk optimasi GPU
- `mix-blend-mode` mungkin berat pada browser lama
- Animasi menggunakan GSAP untuk performa optimal
- MutationObserver untuk detect dynamic content (dapat di-disable jika tidak perlu)

## Tips Penggunaan

1. **Jangan overuse** - Terlalu banyak efek bisa mengganggu UX
2. **Konsisten dengan brand** - Pilih warna reveal yang sesuai tema
3. **Test di berbagai device** - Pastikan auto-disable di mobile bekerja
4. **Perhatikan accessibility** - Beberapa user mungkin tidak nyaman dengan cursor custom

## Navbar Magnetic Configuration

### Adjust Magnetic Strength
Edit di `NavbarMagnetic.astro`:

```javascript
// Strength values (0-1, recommended: 0.1-0.5)
addMagneticEffect(link, 0.25);  // Nav links
addMagneticEffect(navCta, 0.35); // CTA button
addMagneticEffect(logo, 0.15);   // Logo
```

### Adjust Animation Speed
```javascript
// Mouse move follow
gsap.to(el, {
    duration: 0.4,  // Lower = faster
    ease: 'power2.out',
});

// Mouse leave bounce back
gsap.to(el, {
    duration: 0.6,  // Adjust bounce speed
    ease: 'elastic.out(1, 0.5)', // (amplitude, period)
});
```

### Disable Magnetic Effect
Comment out atau remove import di `Layout.astro`:
```astro
<!-- <NavbarMagnetic /> -->
```

## Technical Implementation

### Text Reveal Architecture
```css
/* Using ::before pseudo-element for perfect responsiveness */
.cursor-text-target::before {
    content: attr(data-text); /* Text dari data attribute */
    position: absolute;
    color: #00ff88;
    clip-path: circle(0px); /* Start hidden */
}

.cursor-text-target:hover::before {
    clip-path: circle(150px at var(--mouse-x) var(--mouse-y));
}
```

**Advantages:**
- ✅ No HTML duplication
- ✅ Automatically inherits all CSS from parent
- ✅ Fully responsive without extra code
- ✅ Better performance (no DOM manipulation)
- ✅ Cleaner code structure

## Future Improvements

Ide pengembangan:
- [x] Navbar magnetic effect
- [x] Responsive text reveal fix
- [ ] Smooth color transition berdasarkan background
- [ ] Particle effect on click
- [ ] Custom cursor shapes untuk different sections
- [ ] Disable option via settings
- [ ] Reduced motion support untuk accessibility
- [ ] Magnetic effect radius customization
- [ ] Multi-color reveal options

---

**Created by**: Revan Kurniawan
**Last Updated**: 2024