# HafalAyat.fun

**HafalAyat.fun** adalah aplikasi web yang menyediakan ayat-ayat hafalan untuk
pembinaan kelompok PA (Pendalaman Alkitab) PERKANTAS. Aplikasi ini membantu
anggota kelompok untuk menghafal dan mempelajari ayat-ayat Alkitab yang penting
dalam pertumbuhan iman.

## 📋 Fitur

- **Ayat Jaminan**: 5 ayat fundamental tentang jaminan keselamatan, jawaban doa,
  kemenangan atas pencobaan, pengampunan dosa, dan bimbingan Tuhan
- **Ayat Hafalan**: 60 ayat yang dibagi dalam 5 kategori (A-E):
- **Progressive Web App (PWA)**: Dapat diinstal sebagai aplikasi mobile
- **Responsive Design**: Optimal di semua perangkat
- **Animasi GSAP**: Transisi yang halus dan menarik

## 🚀 Teknologi

### Framework & Runtime

- **Next.js 15.5.2** dengan App Router
- **React 19.1.0**
- **TypeScript 5**
- **Node.js** (minimum v20)

### Styling & UI

- **Tailwind CSS 4** untuk styling
- **shadcn/ui** untuk komponen UI
- **Radix UI** untuk komponen accessible
- **Lucide React** untuk ikon
- **GSAP** untuk animasi

## 📦 Instalasi

### Prerequisites

- Node.js v18 atau lebih tinggi
- bun

### Setup Development

1. **Clone repository**
   ```bash
   git clone https://github.com/NovqiGarrix/web-ayat-hafalan.git
   cd web-ayat-hafalan
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Jalankan development server**
   ```bash
   bun dev
   ```

4. **Buka aplikasi** Aplikasi akan tersedia di
   [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Proyek

```
web-ayat-hafalan/
├── public/                 # File statis (favicon, icons, dll)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global CSS styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── manifest.ts    # PWA manifest
│   │   ├── guarantees/    # Halaman ayat jaminan
│   │   └── labels/        # Halaman kategori ayat hafalan
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── guarantee.tsx  # Komponen ayat jaminan
│   │   ├── labels.tsx     # Komponen daftar kategori
│   │   └── guarantees/    # Komponen untuk halaman jaminan
│   └── lib/
│       ├── constant.ts    # Data ayat-ayat
│       └── utils.ts      # Utility functions
├── components.json        # Konfigurasi shadcn/ui
├── eslint.config.mjs     # Konfigurasi ESLint
├── next.config.ts        # Konfigurasi Next.js
├── package.json          # Dependencies dan scripts
├── postcss.config.mjs    # Konfigurasi PostCSS
├── tsconfig.json         # Konfigurasi TypeScript
└── README.md
```

## 📖 Data Structure

### Ayat Jaminan

```typescript
interface Verse {
   order: number;
   label: string;
   verse: string;
   text: string;
}
```

### Ayat Hafalan

```typescript
interface VerseCategory {
   label: string; // A, B, C, D, E
   title: string; // Judul kategori
   verses: Verse[]; // Array dari 12 ayat
}
```

Data ayat-ayat disimpan dalam file `src/lib/constant.ts` dalam format:

- `AYAT_JAMINAN`: Array dari 5 ayat jaminan
- `AYAT_HAFALAN`: Array dari 5 kategori, masing-masing berisi 12 ayat

## 🛠 Available Scripts

```bash
# Development
bun run dev          # Menjalankan development server dengan Turbopack

# Production
bun run build        # Build aplikasi untuk production
bun run start        # Menjalankan production server

# Code Quality
bun run lint         # Menjalankan ESLint untuk memeriksa code quality
```

## 🎨 Customization

### Menambah Ayat Baru

1. Edit file `src/lib/constant.ts`
2. Tambahkan ayat ke array yang sesuai (`AYAT_JAMINAN` atau `AYAT_HAFALAN`)
3. Pastikan format sesuai dengan interface yang ada

### Styling

- Modifikasi Tailwind CSS di `src/app/globals.css`
- Komponen UI dapat dikustomisasi di folder `src/components/ui/`
- Warna dan tema dapat diubah dalam konfigurasi shadcn/ui

### PWA Configuration

- Edit `src/app/manifest.ts` untuk mengubah konfigurasi PWA
- Ganti icon di folder `public/` sesuai kebutuhan

---

**Tuhan memberkati** 🙏
