# 🚀 Uplifts Media - Growth Engineering Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.8-47A248?style=for-the-badge&logo=mongodb)
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
- **Enquiry Form**: Validated contact form with MongoDB database integration
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
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud-hosted NoSQL database
- **ODM**: [Mongoose 8.8](https://mongoosejs.com/) - MongoDB object modeling
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
- **MongoDB Atlas account** (free tier available)

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
   Edit `.env` with your MongoDB Atlas connection string (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"

# Node Environment
NODE_ENV="development"
```

### Setting up MongoDB Atlas

1. **Create a free account** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. **Create a new cluster** (free M0 tier is sufficient)
3. **Create a database user**:
   - Go to Database Access
   - Add a new database user with a secure password
   - Note down the username and password
4. **Whitelist your IP**:
   - Go to Network Access
   - Add IP Address (use `0.0.0.0/0` for development, or your specific IP)
   - For production on Vercel, add `0.0.0.0/0` or use Vercel's IP ranges
5. **Get your connection string**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<database>` with your database name (e.g., `uplifts_media`)
6. **Add to `.env`**:
   ```env
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/uplifts_media?retryWrites=true&w=majority"
   ```

---

## 📁 Database Setup

### MongoDB Collections

The database includes two main collections:

**Enquiry Collection:**
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  company?: string,
  message: string,
  createdAt: Date,
  updatedAt: Date
}
```

**Subscriber Collection:**
```typescript
{
  _id: ObjectId,
  email: string (unique, indexed),
  createdAt: Date,
  updatedAt: Date
}
```

### Indexes

Mongoose automatically creates the following indexes:
- `Subscriber.email` - Unique index for duplicate prevention
- `_id` fields - Default MongoDB index

### Connection Management

The application uses connection pooling optimized for serverless environments:
- Connections are cached globally in development
- Automatic reconnection on connection loss
- Buffer commands disabled for immediate feedback

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
   - `/lib/models` - Mongoose models for MongoDB
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
│   ├── mongodb.ts             # MongoDB connection utility
│   ├── models/                # Mongoose models
│   │   ├── Enquiry.ts        # Enquiry model
│   │   └── Subscriber.ts     # Subscriber model
│   └── utils.ts               # Utility functions
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
- **`/lib/models`**: Mongoose models for MongoDB collections
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
   - Add `MONGODB_URI` in Vercel dashboard (Settings → Environment Variables)
   - Ensure your MongoDB Atlas cluster allows connections from `0.0.0.0/0` or Vercel's IP ranges
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

- [ ] Set up MongoDB Atlas cluster
- [ ] Configure MongoDB Atlas network access (allow Vercel IPs or 0.0.0.0/0)
- [ ] Create database user with read/write permissions
- [ ] Set environment variables in Vercel dashboard
- [ ] Test build locally: `npm run build && npm run start`
- [ ] Verify MongoDB connection works in production
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

**Problem**: MongoDB connection error
```
Solution: 
1. Check MONGODB_URI in .env is correct
2. Verify MongoDB Atlas network access allows your IP
3. Ensure database user has correct permissions
4. Check if cluster is active (not paused)
```

**Problem**: "Subscriber already exists" not working
```
Solution:
1. Ensure unique index exists on Subscriber.email
2. MongoDB Atlas may take a moment to create indexes
3. Check MongoDB Atlas UI → Collections → Indexes
```

**Problem**: Module not found errors
```
Solution:
1. Delete node_modules and package-lock.json
2. Run: npm install
3. Restart dev server
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

**Problem**: Mongoose model compilation errors in development
```
Solution:
1. This is normal in Next.js hot reload
2. Models check for existing compilation before recompiling
3. Restart dev server if issues persist
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
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM

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
