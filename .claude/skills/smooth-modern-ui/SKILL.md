\---

description: >

&#x20; Always apply when building any UI, page, or component. 

&#x20; Ensures smooth scrolling, polished transitions, and modern design standards.

\---



\## Smooth Scrolling \& Modern UI Expert



Every UI you build MUST feel premium and fluid. Always follow these rules:



\### Smooth Scrolling

\- Install and use Lenis for smooth scrolling: `npm install lenis`

\- Initialize Lenis in layout.tsx or a SmoothScroll wrapper component

\- Connect Lenis to GSAP ScrollTrigger for scroll-based animations

\- Scroll speed: 1.2, lerp: 0.1 for natural feel



```js

const lenis = new Lenis({

&#x20; duration: 1.2,

&#x20; easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 \* t)),

&#x20; smooth: true,

})

```



\### Page Transitions

\- Use Framer Motion for route transitions

\- Wrap pages in AnimatePresence

\- Default transition: fade + slight Y shift (y: 20 → y: 0)

\- Duration: 0.5s ease-out



\### Micro Interactions

\- Buttons: scale(0.97) on press, scale(1.05) on hover

\- Links: underline draws from left on hover

\- Cards: subtle lift shadow on hover (translateY -4px)

\- Icons: rotate or bounce on hover

\- All transitions: 200-300ms ease



\### Loading Experience

\- Page loader: logo animates in, progress bar, then reveal

\- Skeleton screens instead of spinners for content

\- Stagger children animations on section enter



\### Scroll Animations (GSAP ScrollTrigger)

\- Fade + slide up: opacity 0→1, y 40→0 on enter

\- Stagger delay: 0.1s between child elements

\- Scrub animations for parallax: scrub: 1.5

\- Pin sections for horizontal scroll: pin: true



\### Modern Design Principles

\- Consistent spacing scale: 4px base unit (4, 8, 16, 24, 32, 48, 64, 96px)

\- Border radius: sm=4px, md=8px, lg=16px, xl=24px, full=9999px

\- Shadows: layered soft shadows, never harsh drop shadows

\- Glassmorphism: `backdrop-blur-md bg-white/10 border border-white/20`

\- Gradients: use subtle gradients, never flat solid backgrounds



\### Typography Motion

\- Headings: split into words/chars with GSAP SplitText or manual spans

\- Animate each word: stagger 0.05s, y: 100→0, opacity 0→1

\- Use `overflow-hidden` wrapper to mask the reveal



\### Color \& Visual Depth

\- Always use at least 3 depth layers (background, midground, foreground)

\- Subtle noise texture overlay on backgrounds (opacity 0.03-0.05)

\- Use `mix-blend-mode` for overlay effects

\- Dark sections: never pure black, use #0a0a0a or #0d0d0d



\### Cursor (Desktop Only)

\- Custom cursor: small dot + large circle follower

\- Cursor grows and blends on hovering interactive elements

\- Hide on mobile/touch devices



\### Performance

\- Use `will-change: transform` only on actively animating elements

\- Remove will-change after animation completes

\- Use `transform` and `opacity` only (GPU accelerated)

\- Avoid animating width, height, top, left properties

