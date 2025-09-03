# Web Ayat Hafalan (HafalAyat.fun)

Web Ayat Hafalan is a Next.js web application for memorizing Bible verses, specifically designed for PERKANTAS fellowship group Bible study. The app organizes verses into 5 categories (A-E) plus a special "5 Ayat-ayat Jaminan" (5 Guarantee Verses) section for new believers.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Setup
- **CRITICAL**: Ensure Node.js is available. This project requires Node.js (tested with npm 10.8.2)
- Install dependencies: `npm install` -- takes ~40 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- **DO NOT use bun** - while bun.lock exists, use npm for consistency and reliability.

### Development Workflow
- Start development server: `npm run dev` -- starts in ~1 second. Uses Turbopack for fast compilation.
- Access application at: `http://localhost:3000`
- Hot reload is enabled - changes auto-update in the browser
- **NEVER CANCEL** the dev server during normal development work

### Build and Production
- **CRITICAL BUILD LIMITATION**: Production build fails due to Google Fonts network restrictions
- Command: `npm run build` -- WILL FAIL with Google Fonts fetch errors in restricted environments
- This is a known limitation: The app uses `next/font/google` for Geist and Geist Mono fonts
- **DO NOT attempt to fix the build** unless specifically working on font issues
- Development server works perfectly and should be used for all testing and validation

### Code Quality
- Lint code: `npm run lint` -- takes ~2 seconds. Set timeout to 30+ seconds.
- **ALWAYS run linting** before committing changes
- ESLint is configured with Next.js and TypeScript rules
- No test suite exists - manual testing is required

## Validation Scenarios

### MANDATORY: After making any changes, run these validation steps:

1. **Start development server** and verify it loads without errors
2. **Test home page navigation**: 
   - Visit `http://localhost:3000`
   - Verify all 6 main navigation links work:
     - "5 Ayat-ayat Jaminan" (Special guarantees section)
     - Categories A through E (Kehidupan Baru, Injil, Perlengkapan Dari Tuhan, Tantangan Pemuridan, Sifat-Sifat Murid Kristus)
3. **Test category navigation**:
   - Click any category (e.g., "Kehidupan Baru A")
   - Verify verse list displays with proper formatting
   - Test "Kembali" (Back) button returns to home
4. **Visual validation**:
   - Ensure Indonesian text displays correctly
   - Verify responsive layout on different screen sizes
   - Check that verse references and text are properly formatted

### Complete User Workflow Test
Test this complete scenario after making changes:
1. Load homepage at `http://localhost:3000`
2. Click "5 Ayat-ayat Jaminan" - verify it shows 5 guarantee verses
3. Return to home and click "Kehidupan Baru A" - verify it shows 12 verses (A1-A12)
4. Test "Kembali" button navigation
5. Test responsive behavior by resizing browser window

## Project Structure

### Key Directories and Files
```
src/app/                    # Next.js App Router pages
├── page.tsx               # Homepage with navigation grid
├── layout.tsx             # Root layout with fonts and metadata
├── guarantees/            # Special "5 Ayat-ayat Jaminan" section
│   └── page.tsx          # Guarantees page
└── labels/[label]/        # Dynamic routes for categories A-E
    └── page.tsx          # Individual category verse listings

src/components/            # React components
├── guarantee.tsx         # Home page guarantee section component
├── labels.tsx           # Home page labels grid component
├── guarantees/          # Guarantee-related components
├── labels/              # Label/category components
│   ├── verse.tsx       # Individual verse display
│   └── verses.tsx      # Verse list container
└── ui/                 # Shadcn/ui components
    ├── button.tsx      # Button component
    └── card.tsx        # Card component

src/lib/                  # Utilities and constants
├── constant.ts          # All verse data and constants
└── utils.ts            # Utility functions

public/                  # Static assets
└── [favicon files]     # App icons and PWA assets
```

### Data Structure
- All verse content is stored in `src/lib/constant.ts`
- `AYAT_JAMINAN`: Array of 5 guarantee verses for new believers
- `AYAT_HAFALAN`: Array of 5 categories (A-E), each containing 12 verses
- Each verse has: order, label, verse reference, and Indonesian text

## Technology Stack

### Core Technologies
- **Next.js 15.5.2** with App Router
- **React 19.1.0** 
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Turbopack** for fast builds and dev server

### UI Framework
- **Shadcn/ui** components with "new-york" style
- **Lucide React** for icons
- **GSAP** for animations
- **Class Variance Authority** for component variants

### Development Tools
- **ESLint** with Next.js and TypeScript rules
- **PostCSS** for CSS processing
- **npm** as package manager (do not use bun despite bun.lock presence)

## Common Commands Reference

### Frequently Used Commands with Timing
```bash
# Install dependencies (run once after clone)
npm install                    # ~40 seconds

# Start development server
npm run dev                    # ~1 second startup

# Lint code (run before committing)
npm run lint                   # ~2 seconds

# Production start (after build - which fails)
npm start                      # Not usable due to build issues
```

### Package.json Scripts
- `dev`: `next dev --turbopack` - Development server with Turbopack
- `build`: `next build --turbopack` - Production build (FAILS due to fonts)
- `start`: `next start` - Production server
- `lint`: `eslint` - Code linting

## Known Issues and Limitations

### Build Limitations
- **Production build fails** due to Google Fonts network restrictions
- Error: "Failed to fetch `Geist` and `Geist Mono` from Google Fonts"
- **This is expected behavior in restricted environments**
- Use development server for all work and testing

### No Test Suite
- No unit tests, integration tests, or E2E tests exist
- **Manual testing is required** for all changes
- Follow the validation scenarios above

### Font Loading
- App uses `next/font/google` for Geist fonts
- Fonts may not load in restricted network environments
- Application remains functional without external fonts

## Content and Localization

### Language
- **Indonesian language** throughout the application
- Bible verses are in Indonesian translation
- UI text includes: "Kembali" (Back), "Tuhan memberkati" (God bless)

### Content Categories
1. **5 Ayat-ayat Jaminan** - 5 guarantee verses for new believers
2. **A. Kehidupan Baru** - New Life (12 verses)
3. **B. Injil** - Gospel (12 verses) 
4. **C. Perlengkapan Dari Tuhan** - God's Equipment (12 verses)
5. **D. Tantangan Pemuridan** - Discipleship Challenges (12 verses)
6. **E. Sifat-Sifat Murid Kristus** - Characteristics of Christ's Disciples (12 verses)

## Development Best Practices

### When Making Changes
1. **ALWAYS** start the dev server and test your changes immediately
2. **Run linting** before committing: `npm run lint`
3. **Test navigation** between all sections after UI changes
4. **Verify Indonesian text** displays correctly
5. **Test responsive behavior** on different screen sizes

### Code Style
- Follow existing TypeScript and React patterns
- Use Tailwind CSS classes for styling
- Maintain existing component structure
- Keep verse data in `constant.ts` - do not hardcode in components

### Component Guidelines
- Use Shadcn/ui components when available
- Follow existing naming conventions
- Maintain accessibility with proper semantic HTML
- Use TypeScript interfaces for type safety

## PWA and Deployment

### Progressive Web App
- App includes PWA manifest (`src/app/manifest.ts`)
- Icons and touch icons included in public directory
- Apple touch icon configuration in layout

### Metadata and SEO
- Each page has proper meta tags and Open Graph data
- Canonical URLs configured
- Twitter card support included
- Indonesian language content optimized for search

## Emergency Procedures

### If Development Server Won't Start
1. Delete `node_modules`: `rm -rf node_modules`
2. Delete `package-lock.json`: `rm package-lock.json`
3. Reinstall: `npm install`
4. Restart dev server: `npm run dev`

### If Build Issues Affect Development
- **DO NOT attempt to fix the build** unless specifically working on font loading
- The build failure is a known limitation in restricted environments
- Development server remains fully functional for all development work

### If Linting Fails
1. Check the specific ESLint errors
2. Fix code style issues
3. Re-run: `npm run lint`
4. Never commit code that fails linting

Remember: This application is functional and well-structured for development work. The build limitation is environmental, not a code issue.