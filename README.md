# 🚀 Uplifts Media - Growth Engineering Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-7.3-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

**Your Outsourced Growth Team | Building Growth Engines for Modern Businesses**

[Demo](#) · [Report Bug](https://github.com/harshh1505/uplifts_media/issues) · [Request Feature](https://github.com/harshh1505/uplifts_media/issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [API Routes](#-api-routes)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**Uplifts Media** is a modern marketing agency platform built with Next.js 16 and React 19. We specialize in growth engineering for startups and scale-ups, handling everything from social media presence to PPC, SEO, and e-commerce solutions.

This platform features:
- 🎨 Modern, responsive landing page
- 📝 Contact enquiry system with database storage
- 📧 Newsletter subscription functionality
- 🎭 Case studies showcase
- ❓ Interactive FAQ section
- 🌓 Dark mode support (prepared)
- 📊 Integrated analytics

### Key Metrics
- **50+** Successful Projects
- **$50M+** Generated in Revenue
- **98%** Client Retention Rate

---

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Animated Components**: Smooth animations and transitions throughout
- **shadcn/ui Integration**: Beautiful, accessible UI components
- **Tailwind CSS 4**: Latest styling framework with custom design system

### 📱 Core Functionality
- **Enquiry Form**: Validated contact form with Prisma database integration
- **Newsletter Subscription**: Email collection with duplicate prevention
- **Service Showcase**: Detailed presentation of marketing services
- **Process Visualization**: Step-by-step growth methodology
- **Case Studies**: Success stories with metrics and results
- **FAQ Section**: Accordion-style frequently asked questions

### 🔧 Technical Features
- **Server Components**: Optimized performance with React Server Components
- **API Routes**: RESTful API endpoints with Zod validation
- **Type Safety**: Full TypeScript coverage
- **Form Validation**: React Hook Form with Zod schemas
- **Toast Notifications**: User feedback with Sonner
- **Analytics**: Vercel Analytics integration

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.0](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2](https://react.dev/) - Latest React with concurrent features
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon set
- **Animations**: [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) - Animation utilities

### Backend
- **Database ORM**: [Prisma 7.3](https://www.prisma.io/) - Next-generation ORM
- **Database**: PostgreSQL (Neon) or SQLite (development)
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Performant form library

### Developer Experience
- **Package Manager**: npm
- **Code Quality**: ESLint (configured)
- **Type Checking**: TypeScript strict mode
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** (for production) or **SQLite** (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshh1505/uplifts_media.git
   cd uplifts_media
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration (see [Environment Variables](#environment-variables))

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Push database schema (for development)
   npx prisma db push
   
   # Or run migrations (for production)
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
# For PostgreSQL (Production with Neon)
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"

# Or for SQLite (Local Development)
# DATABASE_URL="file:./prisma/dev.db"

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"

# Node Environment
NODE_ENV="development"
```

### Database Options

#### Option 1: PostgreSQL with Neon (Recommended for Production)
1. Sign up at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string to `DATABASE_URL`

#### Option 2: SQLite (Development Only)
1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }
   ```
2. Update `lib/prisma.ts` to remove Neon adapter
3. Run `npx prisma db push`

---

## 📁 Database Setup

### Prisma Schema

The database includes two main models:

```prisma
model Enquiry {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  company   String?
  message   String
  createdAt DateTime @default(now())
}

model Subscriber {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
}
```

### Database Commands

```bash
# Generate Prisma Client
npx prisma generate

# Create a migration
npx prisma migrate dev --name init

# Push schema changes (no migration)
npx prisma db push

# Open Prisma Studio (Database GUI)
npx prisma studio

# Reset database
npx prisma migrate reset
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make your changes** in the appropriate directory:
   - `/app` - Pages and layouts
   - `/components` - React components
   - `/lib` - Utility functions and configurations
   - `/prisma` - Database schema and migrations
3. **Test your changes** in the browser (auto-reloads on save)
4. **Run linting**: `npm run lint`
5. **Build for production**: `npm run build`

### Code Style

- Use **TypeScript** for all new files
- Follow **React best practices** (hooks, functional components)
- Use **Tailwind classes** for styling (avoid custom CSS when possible)
- Validate all forms with **Zod schemas**
- Keep components **small and focused** (single responsibility)
- Use **async/await** for asynchronous operations
- Handle errors with **try-catch** blocks
- Add **loading states** for async operations

---

## 📂 Project Structure

```
uplifts_media/
├── app/                        # Next.js App Router
│   ├── api/                    # API Routes
│   │   ├── enquiry/           # Contact form endpoint
│   │   └── subscribe/         # Newsletter endpoint
│   ├── globals.css            # Global styles & Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                 # React Components
│   ├── ui/                    # shadcn/ui components
│   ├── case-studies.tsx       # Success stories section
│   ├── enquiry-form.tsx       # Contact form
│   ├── faq.tsx                # FAQ accordion
│   ├── final-cta.tsx          # Call-to-action section
│   ├── footer.tsx             # Site footer
│   ├── header.tsx             # Navigation header
│   ├── hero.tsx               # Hero section
│   ├── problems.tsx           # Problem statement
│   ├── process.tsx            # Process methodology
│   ├── services.tsx           # Services showcase
│   └── startups.tsx           # Startup testimonials
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts          # Mobile detection hook
│   └── use-toast.ts           # Toast notification hook
├── lib/                        # Utilities & Config
│   ├── prisma.ts              # Prisma client instance
│   └── utils.ts               # Utility functions
├── prisma/                     # Database
│   ├── schema.prisma          # Database schema
│   └── config.ts              # Prisma configuration
├── public/                     # Static assets
│   ├── icons/                 # Favicon and app icons
│   └── images/                # Images and placeholders
├── styles/                     # Additional styles
│   └── globals.css            # Alternative global styles
├── .env                        # Environment variables (not in git)
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── components.json            # shadcn/ui config
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS config
└── tsconfig.json              # TypeScript configuration
```

### Key Directories

- **`/app`**: Next.js 16 App Router - all pages, layouts, and API routes
- **`/components`**: Reusable React components (presentational)
- **`/components/ui`**: shadcn/ui base components (buttons, forms, etc.)
- **`/lib`**: Utility functions, configurations, and shared logic
- **`/prisma`**: Database schema and ORM configuration
- **`/public`**: Static files served directly (images, icons, etc.)

---

## 🔌 API Routes

### POST `/api/enquiry`

Submit a contact enquiry form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc.",
  "message": "I'm interested in your services..."
}
```

**Response (201):**
```json
{
  "success": true,
  "enquiry": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Inc.",
    "message": "I'm interested in your services...",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "errors": [
    {
      "path": ["email"],
      "message": "Invalid email address"
    }
  ]
}
```

---

### POST `/api/subscribe`

Subscribe to newsletter.

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response (201):**
```json
{
  "success": true,
  "subscriber": {
    "id": 1,
    "email": "subscriber@example.com",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Duplicate Response (200):**
```json
{
  "success": true,
  "message": "Already subscribed"
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Configure project settings

3. **Set Environment Variables**
   - Add `DATABASE_URL` in Vercel dashboard
   - Add any other required environment variables

4. **Deploy**
   - Vercel will automatically build and deploy
   - Subsequent pushes to `main` will auto-deploy

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Pre-Deployment Checklist

- [ ] Set up production database (Neon PostgreSQL)
- [ ] Configure environment variables
- [ ] Run `npx prisma generate` in build step
- [ ] Run `npx prisma migrate deploy` for production database
- [ ] Test build locally: `npm run build && npm run start`
- [ ] Enable analytics (optional)
- [ ] Set up custom domain (optional)

---

## 🎨 Customization

### Brand Colors

Update colors in `app/globals.css`:

```css
:root {
  --primary: #0A1A3A;        /* Deep Navy */
  --secondary: #3B82F6;      /* Electric Blue */
  --accent: #10B981;         /* Lime Green */
}
```

### Typography

Fonts are configured in `app/layout.tsx`:
```typescript
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
```

### Components

All components are in `/components` and can be customized. UI components from shadcn/ui are in `/components/ui`.

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Contact form submission
- [ ] Newsletter subscription
- [ ] Form validation (empty fields, invalid email)
- [ ] Mobile responsive design
- [ ] Desktop navigation
- [ ] Mobile menu
- [ ] Toast notifications
- [ ] Database entries created
- [ ] Duplicate email prevention

### Future Testing Plans

- [ ] Unit tests with Jest
- [ ] Integration tests with Testing Library
- [ ] E2E tests with Playwright
- [ ] Performance testing with Lighthouse

---

## 🐛 Troubleshooting

### Common Issues

**Problem**: Database connection error
```
Solution: 
1. Check DATABASE_URL in .env
2. Run: npx prisma generate
3. Run: npx prisma db push
```

**Problem**: Module not found errors
```
Solution:
1. Delete node_modules and package-lock.json
2. Run: npm install
3. Run: npx prisma generate
```

**Problem**: Build fails with TypeScript errors
```
Solution:
1. Remove ignoreBuildErrors from next.config.mjs
2. Run: npx tsc --noEmit to see errors
3. Fix type errors before building
```

**Problem**: Styles not applying
```
Solution:
1. Check Tailwind is configured in postcss.config.mjs
2. Verify @import 'tailwindcss' in globals.css
3. Clear .next folder and rebuild
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Follow existing code style
- Ensure all tests pass before submitting PR

---

## 📝 License

This project is proprietary and confidential. © 2024 Uplifts Media. All rights reserved.

---

## 👥 Authors

- **Harsh** - *Initial work* - [@harshh1505](https://github.com/harshh1505)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Vercel](https://vercel.com) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Prisma](https://www.prisma.io/) - Database ORM

---

## 📞 Support

For support, email hello@uplifts-media.com or open an issue in the [GitHub repository](https://github.com/harshh1505/uplifts_media/issues).

---

## 🔗 Links

- **Website**: [uplifts-media.com](#)
- **Documentation**: [docs.uplifts-media.com](#)
- **Blog**: [blog.uplifts-media.com](#)
- **GitHub**: [@harshh1505](https://github.com/harshh1505)

---

<div align="center">

**Made with ❤️ by Uplifts Media**

⭐ Star us on GitHub — it motivates us a lot!

</div>
