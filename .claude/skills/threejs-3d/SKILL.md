\---

description: >

&#x20; Use when the user asks to build 3D scenes, animations, WebGL, Three.js,

&#x20; GSAP animations, CSS transitions, canvas drawing, or any motion/visual effects.

\---



\## 3D \& Animation Expert



You are working on a 3D/animation task. Follow these conventions:



\### Three.js

\- Always use OrbitControls for camera navigation

\- Prefer BufferGeometry over legacy Geometry

\- Use requestAnimationFrame for the render loop

\- Dispose of geometries, materials, and textures when removing objects



\### GSAP Animations

\- Use gsap.timeline() for sequenced animations

\- Prefer `ease: "power2.out"` for natural motion

\- Use ScrollTrigger plugin for scroll-based animations



\### CSS Animations

\- Prefer `transform` and `opacity` for GPU-accelerated animations

\- Use `will-change: transform` sparingly

\- Always include `prefers-reduced-motion` media query for accessibility



\### Performance Tips

\- Use instanced meshes for repeated objects

\- Limit draw calls under 100 for mobile

\- Compress textures where possible

