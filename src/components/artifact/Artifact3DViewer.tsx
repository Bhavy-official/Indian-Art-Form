import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { ArtifactHotspot } from '../../data/artifacts';

interface Artifact3DViewerProps {
  modelType: 'dancing-girl' | 'nataraja' | 'stupa';
  title: string;
  hotspots?: ArtifactHotspot[];
  onHotspotClick?: (hotspot: ArtifactHotspot) => void;
  activeHotspotId?: string | null;
}

export const Artifact3DViewer: React.FC<Artifact3DViewerProps> = ({
  modelType,
  title,
  hotspots = [],
  onHotspotClick,
  activeHotspotId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [webGLError, setWebGLError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // References to control reset
  const controlsStateRef = useRef<{
    rotation: { x: number; y: number };
    targetRotation: { x: number; y: number };
    zoom: number;
    targetZoom: number;
  }>({
    rotation: { x: 0, y: 0 },
    targetRotation: { x: 0, y: 0 },
    zoom: 4.8,
    targetZoom: 4.8
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLError(true);
        setLoading(false);
        return;
      }
    } catch {
      setWebGLError(true);
      setLoading(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x141411, 0.08);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.replaceChildren(renderer.domElement);

    // Architectural Museum Lighting
    const ambientLight = new THREE.AmbientLight(0xfff0dd, 0.6);
    scene.add(ambientLight);

    // Warm Key Spotlight (Aged Brass & Incandescent lamp feel)
    const keySpot = new THREE.SpotLight(0xffd493, 2.8, 15, Math.PI / 4, 0.4, 1);
    keySpot.position.set(3, 4, 4);
    keySpot.castShadow = true;
    scene.add(keySpot);

    // Soft Rim Light (Verdigris / cool counter-light)
    const rimLight = new THREE.DirectionalLight(0x7da899, 1.2);
    rimLight.position.set(-3, 2, -3);
    scene.add(rimLight);

    // Base subtle underlight
    const floorLight = new THREE.PointLight(0xa6533b, 0.8, 8);
    floorLight.position.set(0, -2.5, 1);
    scene.add(floorLight);

    // Archeological Pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.35, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1a16,
      roughness: 0.9,
      metalness: 0.1
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -1.6;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Create Procedural Archeological Sculptures based on modelType
    const bronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0xb58b4c,
      roughness: 0.38,
      metalness: 0.82
    });

    const darkPatinaMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a482b,
      roughness: 0.55,
      metalness: 0.65
    });

    if (modelType === 'nataraja') {
      // 1. Flaming Prabhamandala Arch (Ring of Fire)
      const ringGeo = new THREE.TorusGeometry(1.4, 0.06, 16, 64);
      const ringMesh = new THREE.Mesh(ringGeo, bronzeMaterial);
      modelGroup.add(ringMesh);

      // Flames on Ring
      for (let i = 0; i < 28; i++) {
        const angle = (i / 28) * Math.PI * 2;
        const flameGeo = new THREE.ConeGeometry(0.06, 0.16, 4);
        const flame = new THREE.Mesh(flameGeo, bronzeMaterial);
        flame.position.set(Math.cos(angle) * 1.45, Math.sin(angle) * 1.45, 0);
        flame.rotation.z = angle - Math.PI / 2;
        modelGroup.add(flame);
      }

      // Torso & Head
      const torsoGeo = new THREE.CylinderGeometry(0.18, 0.12, 0.8, 12);
      const torso = new THREE.Mesh(torsoGeo, bronzeMaterial);
      torso.position.y = 0.1;
      modelGroup.add(torso);

      const headGeo = new THREE.SphereGeometry(0.16, 16, 16);
      const head = new THREE.Mesh(headGeo, bronzeMaterial);
      head.position.y = 0.65;
      modelGroup.add(head);

      // Crown / Jatamukuta
      const crownGeo = new THREE.ConeGeometry(0.15, 0.4, 12);
      const crown = new THREE.Mesh(crownGeo, bronzeMaterial);
      crown.position.y = 0.9;
      modelGroup.add(crown);

      // Dynamic Four Arms
      // Upper Right (Damaru)
      const armUR = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8);
      const meshArmUR = new THREE.Mesh(armUR, bronzeMaterial);
      meshArmUR.position.set(0.35, 0.45, 0);
      meshArmUR.rotation.z = -Math.PI / 3;
      modelGroup.add(meshArmUR);

      // Upper Left (Agni Flame)
      const armUL = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8);
      const meshArmUL = new THREE.Mesh(armUL, bronzeMaterial);
      meshArmUL.position.set(-0.35, 0.45, 0);
      meshArmUL.rotation.z = Math.PI / 3;
      modelGroup.add(meshArmUL);

      // Lower Left (Gajahasta arm sweeping across chest)
      const armLL = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8);
      const meshArmLL = new THREE.Mesh(armLL, bronzeMaterial);
      meshArmLL.position.set(0.1, 0.05, 0.15);
      meshArmLL.rotation.set(0.3, 0.2, -Math.PI / 4);
      modelGroup.add(meshArmLL);

      // Dancing Legs (Right leg down on Apasmara, Left leg lifted high)
      const legRight = new THREE.CylinderGeometry(0.06, 0.05, 0.75, 8);
      const meshLegR = new THREE.Mesh(legRight, bronzeMaterial);
      meshLegR.position.set(0.08, -0.45, 0);
      modelGroup.add(meshLegR);

      const legLeft = new THREE.CylinderGeometry(0.05, 0.05, 0.75, 8);
      const meshLegL = new THREE.Mesh(legLeft, bronzeMaterial);
      meshLegL.position.set(-0.3, -0.2, 0.1);
      meshLegL.rotation.z = -Math.PI / 3;
      modelGroup.add(meshLegL);

      // Apasmara (Demon of Ignorance under right foot)
      const apasmaraGeo = new THREE.BoxGeometry(0.6, 0.18, 0.35);
      const apasmara = new THREE.Mesh(apasmaraGeo, darkPatinaMaterial);
      apasmara.position.set(0.05, -0.85, 0);
      modelGroup.add(apasmara);

      // Double Lotus Base
      const lotusBase = new THREE.CylinderGeometry(0.7, 0.85, 0.2, 24);
      const lotusMesh = new THREE.Mesh(lotusBase, bronzeMaterial);
      lotusMesh.position.y = -1.0;
      modelGroup.add(lotusMesh);

    } else if (modelType === 'dancing-girl') {
      // Harappan Dancing Girl silhouette (Slender, hand-on-hip, bangle arm)
      const headGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const head = new THREE.Mesh(headGeo, darkPatinaMaterial);
      head.position.set(0, 0.85, 0);
      modelGroup.add(head);

      // Elaborate chignon bun on side
      const bunGeo = new THREE.SphereGeometry(0.14, 12, 12);
      const bun = new THREE.Mesh(bunGeo, darkPatinaMaterial);
      bun.position.set(0.16, 0.88, -0.08);
      modelGroup.add(bun);

      // Torso with natural tilt
      const torsoGeo = new THREE.CylinderGeometry(0.14, 0.1, 0.75, 12);
      const torso = new THREE.Mesh(torsoGeo, darkPatinaMaterial);
      torso.position.set(0, 0.3, 0);
      torso.rotation.z = -0.06;
      modelGroup.add(torso);

      // Right arm: bent with hand on hip
      const armR1 = new THREE.CylinderGeometry(0.035, 0.035, 0.42, 8);
      const meshArmR1 = new THREE.Mesh(armR1, darkPatinaMaterial);
      meshArmR1.position.set(0.24, 0.4, 0);
      meshArmR1.rotation.z = -Math.PI / 3.5;
      modelGroup.add(meshArmR1);

      const armR2 = new THREE.CylinderGeometry(0.035, 0.03, 0.42, 8);
      const meshArmR2 = new THREE.Mesh(armR2, darkPatinaMaterial);
      meshArmR2.position.set(0.26, 0.12, 0.02);
      meshArmR2.rotation.z = Math.PI / 3.2;
      modelGroup.add(meshArmR2);

      // Left arm: straight down, stacked with bangles
      for (let b = 0; b < 16; b++) {
        const bangleGeo = new THREE.TorusGeometry(0.055, 0.012, 8, 24);
        const bangle = new THREE.Mesh(bangleGeo, bronzeMaterial);
        bangle.position.set(-0.22, 0.45 - b * 0.032, 0.05);
        bangle.rotation.x = Math.PI / 2;
        modelGroup.add(bangle);
      }

      // Slender Legs
      const legR = new THREE.CylinderGeometry(0.055, 0.04, 0.9, 8);
      const meshLegR = new THREE.Mesh(legR, darkPatinaMaterial);
      meshLegR.position.set(0.08, -0.5, 0);
      meshLegR.rotation.z = 0.04;
      modelGroup.add(meshLegR);

      const legL = new THREE.CylinderGeometry(0.055, 0.04, 0.9, 8);
      const meshLegL = new THREE.Mesh(legL, darkPatinaMaterial);
      meshLegL.position.set(-0.08, -0.5, 0.08);
      meshLegL.rotation.x = -0.1;
      modelGroup.add(meshLegL);

    } else {
      // Stupa architectural hemisphere & Torana
      const domeGeo = new THREE.SphereGeometry(1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
      const sandstoneMat = new THREE.MeshStandardMaterial({ color: 0x9e8c75, roughness: 0.9 });
      const dome = new THREE.Mesh(domeGeo, sandstoneMat);
      dome.position.y = -0.6;
      modelGroup.add(dome);

      // Harmika & Chhatravali umbrellas on top
      const harmikaGeo = new THREE.BoxGeometry(0.35, 0.25, 0.35);
      const harmika = new THREE.Mesh(harmikaGeo, sandstoneMat);
      harmika.position.y = 0.72;
      modelGroup.add(harmika);

      for (let u = 0; u < 3; u++) {
        const umbGeo = new THREE.CylinderGeometry(0.24 - u * 0.06, 0.24 - u * 0.06, 0.05, 16);
        const umb = new THREE.Mesh(umbGeo, sandstoneMat);
        umb.position.y = 0.95 + u * 0.16;
        modelGroup.add(umb);
      }
    }

    setLoading(false);

    // Mouse and Touch Interaction Handlers
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      controlsStateRef.current.targetRotation.y += deltaX * 0.01;
      controlsStateRef.current.targetRotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, controlsStateRef.current.targetRotation.x + deltaY * 0.01)
      );

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      controlsStateRef.current.targetZoom = Math.max(
        3.0,
        Math.min(7.0, controlsStateRef.current.targetZoom + e.deltaY * 0.005)
      );
    };

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;

      controlsStateRef.current.targetRotation.y += deltaX * 0.012;
      controlsStateRef.current.targetRotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, controlsStateRef.current.targetRotation.x + deltaY * 0.012)
      );

      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop with smooth damping
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto gentle idle rotation if not interacting
      if (!isDragging) {
        controlsStateRef.current.targetRotation.y += 0.0025;
      }

      // Smooth damping interpolation (lerp)
      const state = controlsStateRef.current;
      state.rotation.x += (state.targetRotation.x - state.rotation.x) * 0.08;
      state.rotation.y += (state.targetRotation.y - state.rotation.y) * 0.08;
      state.zoom += (state.targetZoom - state.zoom) * 0.08;

      modelGroup.rotation.x = state.rotation.x;
      modelGroup.rotation.y = state.rotation.y;
      camera.position.z = state.zoom;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, [modelType]);

  const handleResetView = () => {
    controlsStateRef.current.targetRotation = { x: 0, y: 0 };
    controlsStateRef.current.targetZoom = 4.8;
  };

  if (webGLError) {
    return (
      <div style={{
        padding: '32px',
        textAlign: 'center',
        background: 'var(--surface-card)',
        borderRadius: '4px',
        border: '1px solid var(--border-subtle)'
      }}>
        <Eye style={{ margin: '0 auto 12px', color: 'var(--color-aged-brass)', opacity: 0.6 }} size={32} />
        <h4 style={{ color: 'var(--color-antique-parchment)', marginBottom: '8px' }}>WebGL Preview Unavailable</h4>
        <p style={{ fontSize: '0.88rem', color: 'rgba(245,240,230,0.6)' }}>
          Your system or browser cannot render 3D WebGL canvases. Standard high-resolution archival photography is provided below.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '460px',
      background: 'radial-gradient(circle at center, #26231d 0%, #141411 75%)',
      borderRadius: '4px',
      overflow: 'hidden',
      border: '1px solid var(--border-brass)',
      boxShadow: 'var(--shadow-plaque)'
    }}>
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: isInteracting ? 'grabbing' : 'grab'
        }}
      />

      {/* Loading Overlay */}
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(20, 20, 17, 0.85)',
          gap: '12px'
        }}>
          <Sparkles className="spinning-icon" size={24} style={{ color: 'var(--color-aged-brass)' }} />
          <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-antique-parchment)' }}>
            Illuminating Exhibition Space...
          </span>
        </div>
      )}

      {/* Interactive Controls Bar */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'none'
      }}>
        {/* Interaction Hint */}
        <div style={{
          pointerEvents: 'auto',
          background: 'rgba(20, 20, 17, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border-subtle)',
          padding: '6px 14px',
          borderRadius: '2px',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          color: 'var(--color-antique-parchment)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>Drag to Rotate</span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span>Scroll to Zoom</span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
          <button
            onClick={handleResetView}
            title="Reset Angle & Zoom"
            style={{
              background: 'rgba(20, 20, 17, 0.8)',
              border: '1px solid var(--border-brass)',
              color: 'var(--color-aged-brass)',
              padding: '8px',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
