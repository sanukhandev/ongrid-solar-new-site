# OnGrid Solar Power Solutions

A modern, responsive website for OnGrid Solar Power Solutions - the leading solar energy company in Trivandrum, Kerala.

## 🌟 About

OnGrid Solar Power Solutions is a MNRE registered solar energy company specializing in:

- **Solar Panel Installation in Trivandrum**
- **Rooftop Solar Systems**
- **Commercial Solar Power Solutions**
- **Solar Battery Storage**
- **Solar Hybrid Systems**
- **Solar Ongrid Systems**

## 🚀 Features

- **Modern Design**: Clean, professional UI built with Next.js and Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive SEO implementation with structured data
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant design
- **Gallery**: Interactive media gallery showcasing projects and installations

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── about.tsx         # About section
│   ├── blog.tsx          # Blog section
│   ├── contact.tsx       # Contact section
│   ├── features.tsx      # Features section
│   ├── gallery.tsx       # Gallery section
│   ├── hero.tsx          # Hero section
│   └── ...               # Other components
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── seo.ts           # SEO metadata generation
│   └── utils.ts         # General utilities
├── public/              # Static assets
│   ├── images/          # Project images
│   ├── robots.txt       # Robots configuration
│   └── sitemap.xml      # XML sitemap
└── styles/              # Additional styles
```

## 🌐 Live Website

Visit our website: [https://ongridsolarpowersolutions.com](https://ongridsolarpowersolutions.com)

## 💡 Services Offered

### Residential Solar Solutions

- Rooftop solar panel installation
- Solar battery backup systems
- Hybrid solar systems
- Government subsidy assistance (up to ₹78,000)

### Commercial Solar Solutions

- Large-scale solar installations
- Industrial solar power systems
- Solar consulting and maintenance
- Custom solar solutions

## 📞 Contact Information

- **Phone**: +91 75 94 94 94 06
- **Email**: ongridsolarpowersolution@gmail.com
- **Address**: TC 37/2604(6), SHINI TOWER, KODUNGANOOR PO, Vattiyoorkavu, Kerala 695013

## 🏆 Certifications

- MNRE (Ministry of New and Renewable Energy) Registered Vendor
- Authorized solar installer in Kerala
- Government subsidy provider

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sanukhandev/ongrid-solar-new-site.git
cd ongrid-solar-new-site
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from: [Google AI Studio](https://aistudio.google.com/app/apikey)

4. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📈 SEO Features

- **Structured Data**: Rich snippets for local business
- **Meta Tags**: Optimized title, description, and keywords
- **Open Graph**: Social media optimization
- **XML Sitemap**: Complete sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Local SEO**: Optimized for Trivandrum and Kerala searches

## 🖼️ Gallery

The website features an interactive gallery showcasing:

- Completed solar installations
- Residential rooftop projects
- Commercial solar systems

## 🤖 AI Chat Assistant

The website includes an intelligent chat widget powered by Google's Gemini AI:

### Features

- **Context-Aware Responses**: Trained on company data for accurate information
- **Solar-Focused**: Only responds to solar energy and company-related queries
- **Real-time Support**: Instant answers to customer questions
- **Mobile Responsive**: Works seamlessly on all devices

### Topics Covered

- Solar panel pricing and installation
- Government subsidies and benefits
- Technical specifications
- Company services and policies
- Maintenance and warranties

### Setup

The chat widget requires a Gemini API key. Add it to your `.env.local` file:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

- Before/after project photos
- Video testimonials and installations

## 📱 Progressive Web App (PWA)

The website is PWA-ready with:

- Service worker for offline functionality
- App manifest for mobile installation
- Optimized caching strategies

## 🔧 Development

### Adding New Components

1. Create component in `components/` directory
2. Add to main page in `app/page.tsx`
3. Update navigation if needed

### Updating SEO

- Modify `lib/seo.ts` for metadata changes
- Update `public/sitemap.xml` for new pages
- Adjust `public/robots.txt` for crawling rules

## 📄 License

© 2025 OnGrid Solar Power Solutions. All rights reserved.

## 🤝 Contributing

This is a private repository for OnGrid Solar Power Solutions. For issues or suggestions, please contact the development team.

---

**OnGrid Solar Power Solutions** - Powering Kerala with Clean, Renewable Energy Solutions
