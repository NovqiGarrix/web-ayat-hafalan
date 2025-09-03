# HafalAyat.fun

**HafalAyat.fun** adalah aplikasi web yang menyediakan ayat-ayat hafalan untuk pembinaan kelompok PA (Pembinaan Anak) PERKANTAS. Aplikasi ini membantu anggota kelompok untuk menghafal dan mempelajari ayat-ayat Alkitab yang penting dalam pertumbuhan iman.

## 📋 Fitur

- **Ayat Jaminan**: 5 ayat fundamental tentang jaminan keselamatan, jawaban doa, kemenangan atas pencobaan, pengampunan dosa, dan bimbingan Tuhan
- **Ayat Hafalan**: 60 ayat yang dibagi dalam 5 kategori (A-E):
  - **A - Kehidupan Baru**: Kristus sebagai pusat, ketaatan, Firman Tuhan, doa, persekutuan, dan bersaksi
  - **B - Injil**: Semua berdosa, hukuman dosa, Kristus membayar hukuman, keselamatan oleh anugerah, dan jaminan keselamatan
  - **C - Perlengkapan Dari Tuhan**: Roh Kudus, kekuatan, kesetiaan, sejahtera, pemeliharaan, dan kemenangan
  - **D - Tantangan Pemuridan**: Mengutamakan Kristus, bercerai dari dunia, berdiri tetap, melayani, memberi, dan Amanat Agung
  - **E - Sifat-Sifat Murid Kristus**: Kasih, rendah hati, kemurnian, kejujuran, iman, dan kebajikan
- **Progressive Web App (PWA)**: Dapat diinstal sebagai aplikasi mobile
- **Responsive Design**: Optimal di semua perangkat
- **Animasi GSAP**: Transisi yang halus dan menarik

## 🚀 Teknologi

### Framework & Runtime
- **Next.js 15.5.2** dengan App Router
- **React 19.1.0**
- **TypeScript 5**
- **Node.js** (minimum v18)

### Styling & UI
- **Tailwind CSS 4** untuk styling
- **shadcn/ui** untuk komponen UI
- **Radix UI** untuk komponen accessible
- **Lucide React** untuk ikon
- **GSAP** untuk animasi

### Development Tools
- **ESLint** untuk linting
- **Turbopack** untuk bundling yang cepat
- **PostCSS** untuk pemrosesan CSS
- **Bun** sebagai package manager (opsional)

## 📦 Instalasi

### Prerequisites
- Node.js v18 atau lebih tinggi
- npm, yarn, pnpm, atau bun

### Setup Development

1. **Clone repository**
   ```bash
   git clone https://github.com/NovqiGarrix/web-ayat-hafalan.git
   cd web-ayat-hafalan
   ```

2. **Install dependencies**
   ```bash
   # Menggunakan npm
   npm install
   
   # Atau menggunakan yarn
   yarn install
   
   # Atau menggunakan pnpm
   pnpm install
   
   # Atau menggunakan bun
   bun install
   ```

3. **Jalankan development server**
   ```bash
   # Menggunakan npm
   npm run dev
   
   # Atau menggunakan yarn
   yarn dev
   
   # Atau menggunakan pnpm
   pnpm dev
   
   # Atau menggunakan bun
   bun dev
   ```

4. **Buka aplikasi**
   Aplikasi akan tersedia di [http://localhost:3000](http://localhost:3000)

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
  label: string;        // A, B, C, D, E
  title: string;        // Judul kategori
  verses: Verse[];      // Array dari 12 ayat
}
```

Data ayat-ayat disimpan dalam file `src/lib/constant.ts` dalam format:
- `AYAT_JAMINAN`: Array dari 5 ayat jaminan
- `AYAT_HAFALAN`: Array dari 5 kategori, masing-masing berisi 12 ayat

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Menjalankan development server dengan Turbopack

# Production
npm run build        # Build aplikasi untuk production
npm run start        # Menjalankan production server

# Code Quality
npm run lint         # Menjalankan ESLint untuk memeriksa code quality
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

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis akan berjalan

### Netlify
1. Build aplikasi: `npm run build`
2. Upload folder `.next` ke Netlify
3. Konfigurasi sebagai static site

### Manual Server
1. Build aplikasi: `npm run build`
2. Jalankan production server: `npm run start`
3. Aplikasi akan tersedia di port 3000

## 🤝 Contributing

1. **Fork** repository ini
2. **Clone** fork Anda ke lokal
3. **Buat branch** untuk fitur baru: `git checkout -b feature/nama-fitur`
4. **Commit** perubahan: `git commit -m 'Menambah fitur baru'`
5. **Push** ke branch: `git push origin feature/nama-fitur`
6. **Buat Pull Request**

### Panduan Kontribusi
- Ikuti coding style yang ada
- Pastikan code lulus ESLint: `npm run lint`
- Test perubahan Anda secara lokal
- Tulis commit message yang jelas dan deskriptif

## 📱 Browser Support

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 License

Project ini menggunakan lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 👥 Maintainers

- **NovqiGarrix** - [@NovqiGarrix](https://github.com/NovqiGarrix)

## 🙏 Acknowledgments

- **PERKANTAS** - Organisasi yang menginspirasi aplikasi ini
- **Next.js Team** - Framework yang luar biasa
- **shadcn** - Komponen UI yang elegan
- **Vercel** - Platform deployment yang mudah

## 📞 Support

Jika Anda memiliki pertanyaan atau menemukan bug, silakan:
1. Buka [issue](https://github.com/NovqiGarrix/web-ayat-hafalan/issues) di GitHub
2. Hubungi maintainer melalui GitHub

---

**Tuhan memberkati** 🙏
