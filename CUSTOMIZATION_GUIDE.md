# 🎨 Panduan Kustomisasi Portfolio

Panduan lengkap untuk mengkustomisasi portfolio website Anda.

## 📋 Daftar Isi

1. [Konfigurasi Dasar](#konfigurasi-dasar)
2. [Mengubah Warna](#mengubah-warna)
3. [Mengedit Konten](#mengedit-konten)
4. [Menambah/Menghapus Sections](#menambahmenghapus-sections)
5. [Mengganti Gambar](#mengganti-gambar)
6. [Kustomisasi Typography](#kustomisasi-typography)
7. [Menambah Halaman Baru](#menambah-halaman-baru)

---

## Konfigurasi Dasar

### 1. Edit File Konfigurasi

Buka `src/config/site.ts` untuk mengubah informasi dasar:

```typescript
export const SITE = {
  title: "Portfolio - Nama Anda",
  description: "Deskripsi portfolio Anda",
  author: "Nama Anda",
  email: "email@anda.com",
  url: "https://portfolio-anda.com",
};
```

### 2. Update Social Media Links

```typescript
export const SOCIAL_LINKS = {
  github: "https://github.com/username-anda",
  twitter: "https://twitter.com/username-anda",
  linkedin: "https://linkedin.com/in/username-anda",
  email: "mailto:email@anda.com",
};
```

---

## Mengubah Warna

### Theme Colors

Edit CSS variables di `src/layouts/Layout.astro`:

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0a0f;        /* Background utama (dark) */
  --bg-secondary: #13131a;      /* Background sekunder */
  
  /* Text Colors */
  --text-primary: #ffffff;      /* Text utama (putih) */
  --text-secondary: #a0a0b0;    /* Text sekunder (abu-abu) */
  
  /* Accent Colors */
  --accent-primary: #6366f1;    /* Accent utama (indigo) */
  --accent-secondary: #8b5cf6;  /* Accent sekunder (purple) */
  
  /* Border Color */
  --border-color: #2a2a35;      /* Warna border */
}
```

### Contoh Color Schemes

#### 🔵 Blue Theme
```css
--accent-primary: #3b82f6;
--accent-secondary: #60a5fa;
```

#### 🟢 Green Theme
```css
--accent-primary: #10b981;
--accent-secondary: #34d399;
```

#### 🔴 Red Theme
```css
--accent-primary: #ef4444;
--accent-secondary: #f87171;
```

#### 🟡 Yellow/Orange Theme
```css
--accent-primary: #f59e0b;
--accent-secondary: #fbbf24;
```

---

## Mengedit Konten

### Hero Section

Edit di `src/config/site.ts`:

```typescript
export const HERO = {
  label: "Label Anda",
  title: 'Judul Utama <span class="gradient-text">dengan Gradient</span>',
  description: "Deskripsi singkat tentang Anda.",
};
```

### Statistics

```typescript
export const STATS = [
  { number: "100+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction Rate" },
];
```

### Projects

Tambah/edit project di array `PROJECTS`:

```typescript
{
  id: 5,
  title: "Nama Project",
  description: "Deskripsi singkat project",
  category: "Kategori",
  image: "/path/to/image.jpg",
  tags: ["React", "Node.js", "MongoDB"],
  link: "https://link-project.com",
}
```

### Skills

Edit skills di array `SKILLS`:

```typescript
{
  icon: "🚀",
  title: "Skill Category Anda",
  skills: [
    "Skill 1",
    "Skill 2",
    "Skill 3",
  ],
}
```

### Experience

Edit timeline experience:

```typescript
{
  date: "2023 - Present",
  title: "Job Title",
  company: "Company Name",
  description: "Deskripsi pekerjaan Anda.",
}
```

---

## Menambah/Menghapus Sections

### Menghapus Section

Di `src/pages/index.astro`, hapus atau comment section yang tidak diinginkan:

```astro
<!-- Hapus atau comment ini jika tidak perlu -->
<!-- <section class="stats">
  ...
</section> -->
```

### Menambah Section Baru

1. Buat section di `index.astro`:

```astro
<section class="new-section">
  <div class="container">
    <h2 class="section-title">New Section</h2>
    <p>Your content here</p>
  </div>
</section>
```

2. Tambah styling:

```css
.new-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}
```

---

## Mengganti Gambar

### Menggunakan Gambar Lokal

1. Letakkan gambar di folder `public/`:
   ```
   public/
   ├── images/
   │   ├── project1.jpg
   │   ├── profile.jpg
   │   └── logo.png
   ```

2. Gunakan path relatif di file `.astro`:
   ```html
   <img src="/images/project1.jpg" alt="Project 1" />
   ```

### Project Images

Edit di `src/config/site.ts`:

```typescript
{
  image: "/images/your-project.jpg",  // Lokal
  // atau
  image: "https://example.com/image.jpg",  // External
}
```

### Profile Image

Edit di `src/pages/about.astro`:

```html
<img src="/images/profile.jpg" alt="Your Name" />
```

### Optimasi Gambar

- Gunakan format WebP untuk size lebih kecil
- Resize gambar sesuai kebutuhan (max 1200px width)
- Compress dengan tools seperti TinyPNG atau Squoosh

---

## Kustomisasi Typography

### Mengganti Font

1. Pilih font di [Google Fonts](https://fonts.google.com)

2. Update import di `src/layouts/Layout.astro`:

```html
<style is:global>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
  }
</style>
```

### Font Sizes

Edit di CSS:

```css
/* Hero Title */
.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
}

/* Section Title */
.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
}

/* Body Text */
body {
  font-size: 16px;
  line-height: 1.6;
}
```

### Font Weights

```css
.hero-title {
  font-weight: 800;  /* Extra Bold */
}

.section-title {
  font-weight: 700;  /* Bold */
}

body {
  font-weight: 400;  /* Regular */
}
```

---

## Menambah Halaman Baru

### 1. Buat File Baru

Buat file di `src/pages/`, misalnya `blog.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Blog - Portfolio">
  <main class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1>Blog</h1>
        <p>My thoughts and writings</p>
      </div>
    </section>
  </main>
</Layout>

<style>
  .blog-page {
    padding-top: 80px;
    min-height: 100vh;
  }
  
  .blog-hero {
    padding: 6rem 0;
    text-align: center;
  }
</style>
```

### 2. Tambah ke Navigation

Edit `src/config/site.ts`:

```typescript
export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },  // Tambah ini
  { name: "Contact", href: "#contact" },
  { name: "About", href: "/about" },
];
```

---

## Tips & Best Practices

### 1. Konsistensi

- Gunakan warna yang konsisten
- Maintain spacing yang sama
- Gunakan font weight yang konsisten

### 2. Responsive Design

- Test di berbagai ukuran layar
- Gunakan `clamp()` untuk responsive typography
- Gunakan grid atau flexbox untuk layout

### 3. Performance

- Optimize images
- Minimize CSS
- Use lazy loading untuk images

### 4. SEO

- Update meta tags di `Layout.astro`
- Gunakan semantic HTML
- Add alt text untuk semua images

### 5. Accessibility

- Gunakan semantic HTML tags
- Add aria-labels
- Ensure good color contrast
- Test keyboard navigation

---

## Troubleshooting

### CSS Tidak Apply

1. Clear browser cache
2. Restart dev server: `npm run dev`
3. Check CSS syntax errors

### Images Tidak Muncul

1. Check path image: `/images/nama-file.jpg`
2. Pastikan file ada di `public/images/`
3. Check console untuk error

### Layout Berantakan

1. Check responsive styles di `@media` queries
2. Test di berbagai browser
3. Validate HTML structure

---

## Resources

- [Astro Docs](https://docs.astro.build)
- [Google Fonts](https://fonts.google.com)
- [Unsplash](https://unsplash.com) - Free images
- [Coolors](https://coolors.co) - Color palette generator
- [TinyPNG](https://tinypng.com) - Image compression

---

## Butuh Bantuan?

Jika ada pertanyaan atau menemui masalah:

1. Check [Astro Documentation](https://docs.astro.build)
2. Join [Astro Discord](https://astro.build/chat)
3. Open issue di repository

---

**Happy Customizing! 🚀**