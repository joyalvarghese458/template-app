"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CubeProps {
  size?: number;
  accent?: string;
  className?: string;
  autoRotate?: boolean;
  scrollSpeed?: number;
}

/**
 * A monochrome 3D "Rubik's-style" cube: a 3x3x3 grid of small cubes.
 * - Idle: gently auto-rotates and performs subtle face twists ("self-correcting" motion)
 * - Cursor on desktop: tilts cube toward pointer
 * - Touch on mobile: drag to rotate, with inertial decay
 * - Scroll: small rotation offset tied to page scroll
 */
export default function Cube({
  size = 420,
  accent = "#f5f0e6",
  className,
  autoRotate = true,
  scrollSpeed = 0.0008,
}: CubeProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(4.5, 4, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting — cinematic rim + key
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(6, 8, 6);
    scene.add(key);

    const rim = new THREE.DirectionalLight(new THREE.Color(accent), 0.9);
    rim.position.set(-6, 3, -4);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffffff, 0.5, 20);
    fill.position.set(-3, -2, 5);
    scene.add(fill);

    // Build 3x3x3 cube grid
    const group = new THREE.Group();
    const cubeSize = 0.95;
    const gap = 0.06;
    const step = cubeSize + gap;
    const offset = -step;

    const accentColor = new THREE.Color(accent);
    const darkColor = new THREE.Color("#0a0a0a");

    const geo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

    // Slightly bevel via edge geometry overlay
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          // Material per cubelet — same accent so it reads as one object
          const mat = new THREE.MeshPhysicalMaterial({
            color: accentColor,
            metalness: 0.15,
            roughness: 0.35,
            clearcoat: 0.6,
            clearcoatRoughness: 0.4,
            reflectivity: 0.5,
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(
            offset + x * step,
            offset + y * step,
            offset + z * step
          );

          // Edge lines for that crisp grid look
          const edges = new THREE.EdgesGeometry(geo);
          const lineMat = new THREE.LineBasicMaterial({
            color: darkColor,
            transparent: true,
            opacity: 0.9,
          });
          const line = new THREE.LineSegments(edges, lineMat);
          mesh.add(line);

          // Tag with grid coords for face-twist animations
          (mesh as any).gridX = x;
          (mesh as any).gridY = y;
          (mesh as any).gridZ = z;

          group.add(mesh);
        }
      }
    }
    scene.add(group);

    // Interaction state
    let targetRotX = -0.35;
    let targetRotY = 0.6;
    let currentRotX = targetRotX;
    let currentRotY = targetRotY;
    let scrollOffset = 0;
    let velX = 0;
    let velY = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastTouchTime = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) return;
      const rect = mount.getBoundingClientRect();
      // Tilt based on cursor position relative to viewport
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotY = 0.6 + nx * 0.6;
      targetRotX = -0.35 + ny * 0.3;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      isDragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      lastTouchTime = performance.now();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const cx = e.touches[0].clientX;
      const cy = e.touches[0].clientY;
      const dx = cx - lastX;
      const dy = cy - lastY;
      lastX = cx;
      lastY = cy;
      velX = dy * 0.008;
      velY = dx * 0.008;
      targetRotY += velY;
      targetRotX += velX;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY * scrollSpeed;
    };

    window.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("touchstart", onTouchStart, { passive: true });
    mount.addEventListener("touchmove", onTouchMove, { passive: true });
    mount.addEventListener("touchend", onTouchEnd);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(mount);

    // "Self-correcting" face twist micro-animations
    // Periodically twist a face slightly then return — like the cube is solving itself
    let twistAxis: "x" | "y" | "z" = "y";
    let twistLayer = 0;
    let twistAngle = 0;
    let twistTarget = 0;
    let twistCooldown = 2.5;

    const startNewTwist = () => {
      const axes: ("x" | "y" | "z")[] = ["x", "y", "z"];
      twistAxis = axes[Math.floor(Math.random() * 3)];
      twistLayer = Math.floor(Math.random() * 3);
      // Small angle, returns to 0 — micro-correction feel
      twistTarget = (Math.random() < 0.5 ? -1 : 1) * (Math.PI / 6);
    };

    let twistPhase: "out" | "back" | "idle" = "idle";
    let twistTimer = 0;

    // Animate
    const clock = new THREE.Timer();
    let rafId = 0;

    const tick = () => {
      const dt = clock.getDelta();

      // Smooth rotation toward target
      if (autoRotate && !isDragging) {
        targetRotY += dt * 0.18; // gentle auto rotation
      }

      // Inertia on touch release
      if (!isDragging) {
        velX *= 0.92;
        velY *= 0.92;
        if (Math.abs(velX) > 0.0001) targetRotX += velX * dt * 30;
        if (Math.abs(velY) > 0.0001) targetRotY += velY * dt * 30;
      }

      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      group.rotation.x = currentRotX + scrollOffset * 0.5;
      group.rotation.y = currentRotY + scrollOffset;

      // Twist sequencing
      twistTimer += dt;
      if (twistPhase === "idle" && twistTimer > twistCooldown) {
        startNewTwist();
        twistPhase = "out";
        twistTimer = 0;
      } else if (twistPhase === "out") {
        const t = Math.min(twistTimer / 0.6, 1);
        const eased = easeInOutCubic(t);
        twistAngle = twistTarget * eased;
        applyTwist(group, twistAxis, twistLayer, twistAngle);
        if (t >= 1) {
          twistPhase = "back";
          twistTimer = 0;
        }
      } else if (twistPhase === "back") {
        const t = Math.min(twistTimer / 0.6, 1);
        const eased = easeInOutCubic(t);
        twistAngle = twistTarget * (1 - eased);
        applyTwist(group, twistAxis, twistLayer, twistAngle);
        if (t >= 1) {
          applyTwist(group, twistAxis, twistLayer, 0);
          twistPhase = "idle";
          twistTimer = 0;
          twistCooldown = 2 + Math.random() * 3;
        }
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("touchstart", onTouchStart);
      mount.removeEventListener("touchmove", onTouchMove);
      mount.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [accent, autoRotate, scrollSpeed]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Apply a face-twist offset on the chosen layer
function applyTwist(
  group: THREE.Group,
  axis: "x" | "y" | "z",
  layer: number,
  angle: number
) {
  group.children.forEach((child) => {
    const c = child as any;
    if (c.gridX === undefined) return;
    const onLayer =
      (axis === "x" && c.gridX === layer) ||
      (axis === "y" && c.gridY === layer) ||
      (axis === "z" && c.gridZ === layer);
    if (!onLayer) {
      child.rotation.set(0, 0, 0);
      return;
    }
    if (axis === "x") child.rotation.set(angle, 0, 0);
    else if (axis === "y") child.rotation.set(0, angle, 0);
    else child.rotation.set(0, 0, angle);
  });
}