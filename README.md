# Renodomi - Sustainable Home Improvement Website

A modern, responsive website built with Next.js for Renodomi, a specialist in sustainable home improvements in central Netherlands.

## Overview

This website serves as a digital platform for Renodomi's insulation and sustainability services, featuring:

- Comprehensive information about home insulation services
- Interactive quote request system
- Detailed service descriptions and benefits
- Contact forms with automated email notifications
- Mobile-responsive design

## Key Features

### Services Offered
- Isolatie
- Ventilatie
- Energie
- Glasisolatie

### Technical Features
- Server-side rendering with Next.js
- Framer Motion animations
- Responsive design using Tailwind CSS
- Form validation and handling
- Automated email system using Nodemailer
- SEO optimization

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SENDER_EMAIL=your_sender_email
COMPANY_EMAIL=your_company_email
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── layout/            # Main layout components
│   │   ├── header.tsx     # Navigation header
│   │   ├── footer.tsx     # Site footer
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   ├── faq-section.tsx
│   │   └── contact-section.tsx
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
└── styles/              # Global styles
```

## Key Technologies

- Next.js 14
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript
- Nodemailer

## Deployment

The site is optimized for deployment on Vercel. For deployment:

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy

## Development

- Use `npm run dev` for local development
- Use `npm run build` for production build
- Use `npm run start` to start production server


## 🤝 Contact

Haseeb Ahmed - [web.dev.haseeb@gmail.com](mailto:web.dev.haseeb@gmail.com)

Connect with me on:
- [LinkedIn](https://pk.linkedin.com/in/haseeb-ahmed-raza-khan)
- [Instagram](https://www.instagram.com/haseeb.ahmed.raza.khan/)

---

Built with ❤️ by Haseeb Ahmed Raza Khan