\---

description: >

&#x20; Always apply when building any UI, component, page, or layout. 

&#x20; Ensures every element is fully mobile responsive across all screen sizes.

\---



\## Mobile Responsive Expert



Every UI you build MUST be fully responsive. Always follow these rules:



\### Breakpoints (Tailwind)

\- Mobile first: default styles are for mobile (320px+)

\- sm: 640px (large phones)

\- md: 768px (tablets)

\- lg: 1024px (laptops)

\- xl: 1280px (desktops)

\- 2xl: 1536px (large screens)



\### Layout Rules

\- NEVER use fixed pixel widths on containers

\- Use `w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8` for all sections

\- Use CSS Grid or Flexbox, never absolute positioning for layout

\- Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` pattern



\### Typography

\- Fluid font sizes: `text-3xl sm:text-4xl lg:text-6xl`

\- Never use fixed font sizes below 14px on mobile

\- Line height: `leading-snug` on mobile, `leading-tight` on desktop



\### Navigation

\- Desktop: horizontal navbar

\- Mobile: hamburger menu with smooth slide-in drawer

\- Touch targets minimum 44x44px



\### Images

\- Always use `w-full h-auto` or `object-cover`

\- Use `aspect-ratio` classes to prevent layout shift

\- Lazy load images below the fold



\### 3D \& Animations on Mobile

\- Reduce Three.js complexity on mobile (fewer polygons)

\- Disable heavy particle effects on screens under 768px

\- Respect `prefers-reduced-motion` media query always

\- GSAP animations: shorter duration on mobile (0.4s vs 0.6s)



\### Touch

\- All hover effects must have touch/tap equivalents

\- Swipe gestures for carousels instead of click arrows

\- No hover-only content (tooltips must be tappable)



\### Testing Checklist

Before finishing any component, verify:

\- \[ ] Looks good on 375px (iPhone SE)

\- \[ ] Looks good on 768px (iPad)

\- \[ ] Looks good on 1440px (Desktop)

\- \[ ] No horizontal scroll on any screen size

\- \[ ] Text is readable without zooming on mobile

