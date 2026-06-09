# 🎬 Obscura Landing Page - Setup Guide

Welcome! This is a complete, production-ready landing page for Obscura, a smart vintage camera rental platform.

## ⚡ Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:3000`

You should see the complete landing page with all sections, animations, and styling.

## 📦 Project Structure

```
obscura-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Sticky navbar
│   ├── Footer.tsx          # Footer with links
│   └── sections/           # All landing page sections
│       ├── HeroSection.tsx
│       ├── WhyObscuraSection.tsx
│       ├── FeaturesSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── CameraCollectionSection.tsx
│       ├── LocationsSection.tsx
│       ├── SecurityDepositSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       └── FinalCTASection.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎨 Features

✅ **Modern Design** - Premium startup aesthetic with vintage photography vibes
✅ **Fully Responsive** - Optimized for all device sizes
✅ **Smooth Animations** - Framer Motion for engaging interactions
✅ **Glassmorphism** - Modern UI with frosted glass effects
✅ **Dark Mode** - Beautiful dark theme with warm accents
✅ **Component-Based** - Reusable, maintainable React components
✅ **TypeScript** - Full type safety
✅ **SEO Optimized** - Meta tags and structured content
✅ **Accessible** - ARIA labels and keyboard navigation
✅ **Production-Ready** - Code quality and best practices

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates an optimized production build

### Production
```bash
npm start
```
Runs the production build

### Linting
```bash
npm run lint
```
Runs Next.js linting

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js` theme colors:
```js
colors: {
  accent: {
    gold: "#d4af37",      // Primary accent
    warm: "#c97f5c",      // Secondary accent
    cream: "#f5f1e8",     // Light text
  }
}
```

### Update Content
Each section is a separate component in `components/sections/`:
1. Open the section file
2. Update text, prices, or features
3. Changes reflect immediately in dev mode

### Modify Animations
Framer Motion variants are defined in each component:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}
```

### Add New Sections
1. Create new component in `components/sections/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to JSX

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

All components use Tailwind's responsive prefixes (sm:, md:, lg:)

## 🚀 Deployment

### Vercel (Easiest)
```bash
npm i -g vercel
vercel deploy
```

### Build and Deploy Elsewhere
```bash
npm run build
# Upload the .next and out directories to your host
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## 📊 Performance

- ⚡ Optimized images
- 🎯 Code splitting
- 📦 Tree shaking
- 🔄 ISR (Incremental Static Regeneration)
- 📈 Lighthouse ready

## 🔒 Security

- ✅ No external dependencies for security-critical code
- ✅ HTTPS ready
- ✅ CSP headers compatible
- ✅ No sensitive data in frontend code

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animations Not Working
- Check browser console for errors
- Ensure Framer Motion is installed: `npm list framer-motion`
- Verify React version compatibility

### Styles Not Applying
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org)
- [Lucide Icons](https://lucide.dev)

## 📝 Notes

- All components use client-side rendering ("use client")
- Smooth scroll behavior enabled in HTML
- Custom scrollbar styling included
- Dark theme with warm accent colors

## 🎯 Next Steps

1. **Update Content**: Replace placeholder text with your actual content
2. **Add Images**: Implement actual camera photos
3. **Connect APIs**: Wire up location data, booking system
4. **Setup Analytics**: Add Google Analytics or similar
5. **Deploy**: Push to Vercel or your preferred platform

## 💡 Tips

- Use Tailwind's responsive prefixes for mobile-first design
- Components are optimized with React.memo if needed
- All animations use requestAnimationFrame for smooth performance
- Color scheme is fully customizable via Tailwind config

## 📧 Support

Need help? Check the PROJECT_README.md for more detailed information.

---

**Built with ❤️ for Obscura**

*Bringing back the magic of vintage photography*

🎬 Happy coding!
