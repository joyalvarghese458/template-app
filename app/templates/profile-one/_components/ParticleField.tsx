"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive WebGL particle field for the Profile One hero section.
 *
 * Architecture:
 *  - Two BufferGeometry point-cloud layers (background dim + foreground bright)
 *  - Each particle stores an "origin" + phase/speed so it drifts in a unique
 *    sine-wave pattern even when mouse isn't moving
 *  - Mouse/touch position maps to a repulsion field: nearby particles are
 *    pushed away from the cursor, smoothly lerping back to their drift target
 *  - Camera gently parallaxes with the mouse for subtle depth
 *  - Pixel-ratio capped at 1.5 (desktop) / 1 (mobile) for performance
 *  - All Three.js objects are disposed on unmount
 */
export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.innerWidth < 768;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ── Scene ──────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // off for performance
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Glow sprite texture (programmatic radial gradient) ─────────
    const glowTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0.0, "rgba(200,185,255,1)");
      g.addColorStop(0.35, "rgba(140,110,255,0.75)");
      g.addColorStop(0.7, "rgba(100,80,220,0.2)");
      g.addColorStop(1.0, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();

    // ── Layer 1: background dim particles ─────────────────────────
    const COUNT1 = isMobile ? 500 : 1100;
    const SPREAD_X = 16, SPREAD_Y = 10, SPREAD_Z = 7;

    const pos1 = new Float32Array(COUNT1 * 3);
    const ori1 = new Float32Array(COUNT1 * 3); // drift origins
    const ph1  = new Float32Array(COUNT1);      // drift phase
    const sp1  = new Float32Array(COUNT1);      // drift speed

    for (let i = 0; i < COUNT1; i++) {
      const x = (Math.random() - 0.5) * SPREAD_X;
      const y = (Math.random() - 0.5) * SPREAD_Y;
      const z = (Math.random() - 0.5) * SPREAD_Z;
      pos1[i * 3] = x; pos1[i * 3 + 1] = y; pos1[i * 3 + 2] = z;
      ori1[i * 3] = x; ori1[i * 3 + 1] = y; ori1[i * 3 + 2] = z;
      ph1[i] = Math.random() * Math.PI * 2;
      sp1[i] = 0.12 + Math.random() * 0.22;
    }

    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute("position", new THREE.BufferAttribute(pos1, 3));

    const mat1 = new THREE.PointsMaterial({
      size: isMobile ? 0.055 : 0.07,
      map: glowTex,
      alphaMap: glowTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color("#8b7cf8"), // violet-400 hue
      opacity: 0.55,
      sizeAttenuation: true,
    });

    const pts1 = new THREE.Points(geo1, mat1);
    scene.add(pts1);

    // ── Layer 2: foreground bright accent particles ────────────────
    const COUNT2 = isMobile ? 60 : 180;

    const pos2 = new Float32Array(COUNT2 * 3);
    const ori2 = new Float32Array(COUNT2 * 3);
    const ph2  = new Float32Array(COUNT2);
    const sp2  = new Float32Array(COUNT2);

    for (let i = 0; i < COUNT2; i++) {
      // Spread more narrowly, biased toward camera (higher Z)
      const x = (Math.random() - 0.5) * SPREAD_X * 0.7;
      const y = (Math.random() - 0.5) * SPREAD_Y * 0.7;
      const z = (Math.random() - 0.5) * 3 + 1.5;
      pos2[i * 3] = x; pos2[i * 3 + 1] = y; pos2[i * 3 + 2] = z;
      ori2[i * 3] = x; ori2[i * 3 + 1] = y; ori2[i * 3 + 2] = z;
      ph2[i] = Math.random() * Math.PI * 2;
      sp2[i] = 0.08 + Math.random() * 0.14;
    }

    const geo2 = new THREE.BufferGeometry();
    geo2.setAttribute("position", new THREE.BufferAttribute(pos2, 3));

    const mat2 = new THREE.PointsMaterial({
      size: isMobile ? 0.13 : 0.18,
      map: glowTex,
      alphaMap: glowTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color("#6366f1"), // indigo
      opacity: 0.45,
      sizeAttenuation: true,
    });

    const pts2 = new THREE.Points(geo2, mat2);
    scene.add(pts2);

    // ── Interaction state ──────────────────────────────────────────
    // Mouse in normalised device coordinates [-1, 1]
    let mouseNX = 0, mouseNY = 0;
    // Camera smooth offset
    let camX = 0, camY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseNX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNY = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    // Touch: track delta from start position so page scrolling still works
    let touchStartX = 0, touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = (e.touches[0].clientX - touchStartX) / (window.innerWidth * 0.5);
      const dy = -(e.touches[0].clientY - touchStartY) / (window.innerHeight * 0.5);
      mouseNX = Math.max(-1, Math.min(1, dx * 2));
      mouseNY = Math.max(-1, Math.min(1, dy * 2));
    };

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Resize ─────────────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // ── Constants for repulsion ────────────────────────────────────
    // Mouse position mapped to approximate world coords at Z=0 plane
    // With FOV=60 and Z=8, the half-height at Z=0 is 8 * tan(30°) ≈ 4.62
    const WORLD_HALF_H = 8 * Math.tan((30 * Math.PI) / 180);
    const REPEL_RADIUS = 2.2;   // world units
    const REPEL_STRENGTH = 1.8; // how far particles scatter
    const LERP_SPEED = 0.055;   // how quickly particles return to drift

    // ── Animation loop ─────────────────────────────────────────────
    let elapsed = 0;
    let lastTime = performance.now();
    let rafId = 0;

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05); // cap at 50ms
      lastTime = now;
      elapsed += dt;

      // Smooth camera parallax (follows mouse with lag)
      camX += (mouseNX * 0.7 - camX) * 0.04;
      camY += (mouseNY * 0.45 - camY) * 0.04;
      camera.position.x = camX;
      // Subtle scroll-based vertical drift
      camera.position.y = camY - scrollY * 0.0012;

      // World-space mouse position (Z=0 plane approximation)
      const worldMX = mouseNX * WORLD_HALF_H * camera.aspect;
      const worldMY = mouseNY * WORLD_HALF_H;

      // ── Update Layer 1 ─────────────────────────────────────────
      const arr1 = geo1.attributes.position.array as Float32Array;

      for (let i = 0; i < COUNT1; i++) {
        const i3 = i * 3;
        const t = elapsed * sp1[i] + ph1[i];

        // Drift target: sinusoidal wander around origin
        const tx = ori1[i3]     + Math.sin(t * 0.7)          * 0.18;
        const ty = ori1[i3 + 1] + Math.sin(t * 0.5 + 1.2)   * 0.13;
        const tz = ori1[i3 + 2] + Math.sin(t * 0.35 + 2.4)  * 0.08;

        // Mouse repulsion against drift target (not current position)
        const dx = tx - worldMX;
        const dy = ty - worldMY;
        const distSq = dx * dx + dy * dy;

        let finalX = tx, finalY = ty;
        if (distSq < REPEL_RADIUS * REPEL_RADIUS) {
          const dist = Math.sqrt(distSq) + 0.0001;
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          finalX = tx + (dx / dist) * force;
          finalY = ty + (dy / dist) * force;
        }

        // Lerp current position toward (drift + repulsion) target
        arr1[i3]     += (finalX - arr1[i3])     * LERP_SPEED;
        arr1[i3 + 1] += (finalY - arr1[i3 + 1]) * LERP_SPEED;
        arr1[i3 + 2] += (tz     - arr1[i3 + 2]) * (LERP_SPEED * 0.6);
      }
      geo1.attributes.position.needsUpdate = true;

      // ── Update Layer 2 (simpler — no repulsion, slower drift) ──
      const arr2 = geo2.attributes.position.array as Float32Array;

      for (let i = 0; i < COUNT2; i++) {
        const i3 = i * 3;
        const t = elapsed * sp2[i] + ph2[i];
        arr2[i3]     = ori2[i3]     + Math.sin(t * 0.5) * 0.22;
        arr2[i3 + 1] = ori2[i3 + 1] + Math.sin(t * 0.35 + 1.0) * 0.16;
        arr2[i3 + 2] = ori2[i3 + 2] + Math.sin(t * 0.28 + 2.0) * 0.1;
      }
      geo2.attributes.position.needsUpdate = true;

      // Slow Y-axis rotation gives a sense of 3D depth
      pts1.rotation.y = elapsed * 0.025;
      pts2.rotation.y = elapsed * 0.015;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };

    tick();

    // ── Cleanup ────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      renderer.dispose();
      geo1.dispose();
      geo2.dispose();
      mat1.dispose();
      mat2.dispose();
      glowTex.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
