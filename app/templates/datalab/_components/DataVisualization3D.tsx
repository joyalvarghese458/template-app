"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface DataVisualization3DProps {
  className?: string;
  accentColor?: string;
  secondaryColor?: string;
}

export default function DataVisualization3D({
  className,
  accentColor = "#06b6d4", // Teal
  secondaryColor = "#8b5cf6", // Purple
}: DataVisualization3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(5, 4, 7);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 2, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(new THREE.Color(secondaryColor), 0.8);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Main Group
    const plotGroup = new THREE.Group();
    scene.add(plotGroup);

    // Grid Axes lines
    const gridHelper = new THREE.GridHelper(6, 12, new THREE.Color(accentColor), new THREE.Color(0x374151));
    gridHelper.position.y = -1.5;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.4;
    plotGroup.add(gridHelper);

    // Draw coordinate axes lines
    const materialX = new THREE.LineBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.7 }); // Red X axis
    const pointsX = [new THREE.Vector3(-3, -1.5, 0), new THREE.Vector3(3, -1.5, 0)];
    const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
    const lineX = new THREE.Line(geometryX, materialX);
    plotGroup.add(lineX);

    const materialY = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.7 }); // Green Y axis
    const pointsY = [new THREE.Vector3(-3, -1.5, -3), new THREE.Vector3(-3, 2, -3)];
    const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
    const lineY = new THREE.Line(geometryY, materialY);
    plotGroup.add(lineY);

    const materialZ = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.7 }); // Blue Z axis
    const pointsZ = [new THREE.Vector3(0, -1.5, -3), new THREE.Vector3(0, -1.5, 3)];
    const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
    const lineZ = new THREE.Line(geometryZ, materialZ);
    plotGroup.add(lineZ);

    // Scattered Data Points
    const pointsCount = 75;
    const pointsGeo = new THREE.SphereGeometry(0.07, 8, 8);
    const pointMatTeal = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(accentColor),
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.1,
    });
    const pointMatPurple = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(secondaryColor),
      emissive: new THREE.Color(secondaryColor),
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.1,
    });

    const pointMeshes: THREE.Mesh[] = [];
    const baseCoords: { x: number; y: number; z: number; noise: number }[] = [];

    for (let i = 0; i < pointsCount; i++) {
      // Scatter points roughly along a regression line/plane with some noise
      const x = (Math.random() - 0.5) * 5; // -2.5 to 2.5
      const z = (Math.random() - 0.5) * 5; // -2.5 to 2.5
      const noise = (Math.random() - 0.5) * 0.6;
      
      // Target regression plane: y = 0.4*x - 0.2*z
      const y = 0.45 * x - 0.25 * z + noise;

      const pointMesh = new THREE.Mesh(pointsGeo, Math.random() > 0.4 ? pointMatTeal : pointMatPurple);
      pointMesh.position.set(x, y, z);
      plotGroup.add(pointMesh);
      pointMeshes.push(pointMesh);
      baseCoords.push({ x, y, z, noise });
    }

    // Regression Plane Mesh
    // Semi-transparent surface showing the fitted data trend
    const planeGeo = new THREE.PlaneGeometry(5, 5, 5, 5);
    const planeMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(secondaryColor),
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.2,
      depthWrite: false,
    });
    const regressionPlane = new THREE.Mesh(planeGeo, planeMat);
    // Rotate to match the base plane slope: tilt it around x and z
    regressionPlane.rotation.x = Math.PI / 2 + 0.25;
    regressionPlane.rotation.y = 0.45;
    plotGroup.add(regressionPlane);

    // Plane Wireframe Grid overlay (makes it look like a mathematical construct)
    const planeWireGeo = new THREE.PlaneGeometry(5, 5, 10, 10);
    const planeWireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const planeWireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(planeWireGeo),
      planeWireMat
    );
    planeWireframe.rotation.x = Math.PI / 2 + 0.25;
    planeWireframe.rotation.y = 0.45;
    plotGroup.add(planeWireframe);

    // Floating animation variables
    let targetRotY = 0.4;
    let targetRotX = 0.2;
    let currentRotY = targetRotY;
    let currentRotX = targetRotX;
    let scrollOffset = 0;
    let time = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotY = nx * 0.5 + 0.4;
      targetRotX = ny * 0.4 + 0.2;
    };

    const onScroll = () => {
      if (typeof window !== "undefined") {
        scrollOffset = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      }
    };

    mount.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle container resizing
    const resizeObserver = new ResizeObserver(() => {
      if (!mount) return;
      const w = mount.clientWidth || 400;
      const h = mount.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(mount);

    // Animation Loop
    let rafId = 0;
    const tick = () => {
      time += 0.01;

      // Gentle auto-rotation
      currentRotY += (targetRotY - currentRotY) * 0.05;
      currentRotX += (targetRotX - currentRotX) * 0.05;

      // Whole system rotates with scroll and idle time
      plotGroup.rotation.y = currentRotY + time * 0.1;
      plotGroup.rotation.x = currentRotX + Math.sin(time * 0.2) * 0.05;

      // Update plane tilt and slope dynamically based on scroll depth!
      // This represents a model 're-fitting' data as you scroll down
      const targetPlaneSlopeX = Math.PI / 2 + 0.25 + scrollOffset * 0.8;
      const targetPlaneSlopeY = 0.45 - scrollOffset * 0.5;
      
      regressionPlane.rotation.x += (targetPlaneSlopeX - regressionPlane.rotation.x) * 0.05;
      regressionPlane.rotation.y += (targetPlaneSlopeY - regressionPlane.rotation.y) * 0.05;
      planeWireframe.rotation.x = regressionPlane.rotation.x;
      planeWireframe.rotation.y = regressionPlane.rotation.y;

      // Animate scattered data points bouncing/clustering relative to the updated plane
      pointMeshes.forEach((mesh, idx) => {
        const coord = baseCoords[idx];
        // Calculate dynamic y based on plane slope changes + floating sine wave
        const currentSlopeX = regressionPlane.rotation.x - Math.PI / 2;
        const currentSlopeY = regressionPlane.rotation.y;
        
        // Fit coordinates based on new slope
        const fittedY = currentSlopeY * coord.x - currentSlopeX * coord.z;
        const floatAnim = Math.sin(time + idx) * 0.08;
        
        mesh.position.y += (fittedY + coord.noise + floatAnim - mesh.position.y) * 0.03;
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };

    tick();

    // Clean up
    return () => {
      cancelAnimationFrame(rafId);
      mount.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      renderer.dispose();
      
      // Traverse and dispose geometries and materials
      plotGroup.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        } else if (obj instanceof THREE.Line) {
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
  }, [accentColor, secondaryColor]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: "100%", height: "100%", position: "relative" }}
      aria-hidden="true"
    />
  );
}
