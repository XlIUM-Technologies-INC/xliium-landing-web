# Xliium Website

> Custom websites and proven SEO strategies to help local businesses grow online.

Official website for **XlIUM Technologies Inc.** - A web development and SEO agency specializing in helping local businesses succeed online.

## 🚀 Features

- **Modern Design** - Clean, professional design built with Next.js 16 and React 19
- **Responsive** - Mobile-first design that works on all devices
- **Contact Form** - Integrated with Resend for email notifications
- **SEO Optimized** - Built with SEO best practices
- **Fast Performance** - Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd xliium-landing-web
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local`
4. For production: Verify your domain in Resend dashboard
5. Update the `from` email in `app/api/send-email/route.ts`

**Note**: During testing with `onboarding@resend.dev`, emails can only be sent to the email address you registered with Resend.

## 🎨 Project Structure

```
xliium-web/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── send-email/   # Contact form email handler
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── about.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── process.tsx
│   ├── services.tsx
│   └── who-we-work-with.tsx
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/               # Additional styles
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## 📞 Contact Information

- **Email**: info@xliium.com
- **Phone**: +1 (236) 867-1555
- **Location**: Ontario, Canada

## 📄 License

© 2025 XlIUM Technologies Inc. All rights reserved.

---

**Made with care for local businesses across North America.**
