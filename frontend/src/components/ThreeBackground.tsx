import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Animated DNA Helix
function DNAHelix() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const spheres = useMemo(() => {
    const spheres = [];
    for (let i = 0; i < 50; i++) {
      const y = (i - 25) * 0.8;
      const angle1 = (i * 0.4) + Math.PI;
      const angle2 = (i * 0.4);
      
      spheres.push({
        id: `sphere1-${i}`,
        position: [Math.cos(angle1) * 3, y, Math.sin(angle1) * 3] as [number, number, number],
        color: '#ff6b6b'
      });
      
      spheres.push({
        id: `sphere2-${i}`,
        position: [Math.cos(angle2) * 3, y, Math.sin(angle2) * 3] as [number, number, number],
        color: '#4ecdc4'
      });
    }
    return spheres;
  }, []);

  return (
    <group ref={group} position={[-15, 0, 0]}>
      {spheres.map((sphere) => (
        <Sphere key={sphere.id} position={sphere.position} args={[0.1, 8, 8]}>
          <meshStandardMaterial color={sphere.color} emissive={sphere.color} emissiveIntensity={0.2} />
        </Sphere>
      ))}
    </group>
  );
}

// Floating Crystal Formation
function CrystalFormation() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      group.current.rotation.z = state.clock.elapsedTime * 0.1;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  const crystals = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        Math.cos((i / 12) * Math.PI * 2) * 5,
        Math.sin((i / 6) * Math.PI) * 3,
        Math.sin((i / 12) * Math.PI * 2) * 5,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      color: `hsl(${(i * 30 + 180) % 360}, 70%, 60%)`
    }));
  }, []);

  return (
    <group ref={group} position={[15, 0, 0]}>
      {crystals.map((crystal, index) => (
        <Octahedron 
          key={index} 
          position={crystal.position} 
          rotation={crystal.rotation}
          scale={crystal.scale}
          args={[1]}
        >
          <meshStandardMaterial 
            color={crystal.color} 
            transparent 
            opacity={0.7}
            emissive={crystal.color}
            emissiveIntensity={0.1}
          />
        </Octahedron>
      ))}
    </group>
  );
}

// Morphing Geometric Grid
function MorphingGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const position = meshRef.current.geometry.attributes.position;
      
      if (position) {
        for (let i = 0; i < position.count; i++) {
          const x = position.getX(i);
          const z = position.getZ(i);
          const wave1 = Math.sin(x * 0.3 + time * 2) * Math.cos(z * 0.3 + time);
          const wave2 = Math.cos(x * 0.2 + time * 1.5) * Math.sin(z * 0.2 + time * 0.8);
          position.setY(i, (wave1 + wave2) * 2);
        }
        
        position.needsUpdate = true;
        meshRef.current.geometry.computeVertexNormals();
      }
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
      <planeGeometry args={[40, 40, 60, 60]} />
      <meshStandardMaterial
        color="#667eea"
        transparent
        opacity={0.4}
        wireframe
        emissive="#667eea"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Energy Orbs
function EnergyOrbs() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.children.forEach((child, index) => {
        const time = state.clock.elapsedTime;
        child.position.x = Math.cos(time * 0.5 + index * 2) * 8;
        child.position.y = Math.sin(time * 0.3 + index * 1.5) * 4;
        child.position.z = Math.sin(time * 0.4 + index * 2.5) * 8;
        child.rotation.x += 0.01;
        child.rotation.y += 0.02;
      });
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      color: `hsl(${i * 45 + 280}, 80%, 60%)`,
      size: 0.3 + Math.random() * 0.4
    }));
  }, []);

  return (
    <group ref={group}>
      {orbs.map((orb) => (
        <Sphere key={orb.id} args={[orb.size, 16, 16]}>
          <meshStandardMaterial
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  );
}

// Particle Nebula
function ParticleNebula() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create nebula-like distribution
      const radius = Math.random() * 30 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      
      // Purple to pink to blue gradient
      const hue = 250 + Math.random() * 60; // Purple to pink range
      const color = new THREE.Color().setHSL(hue / 360, 0.8, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      sizes[i] = Math.random() * 3 + 1;
    }

    return [positions, colors, sizes];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Rotating Ring System
function RingSystem() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.2;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      group.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const rings = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      radius: 4 + i * 2,
      color: `hsl(${i * 60 + 180}, 70%, 50%)`,
      speed: 0.5 + i * 0.2
    }));
  }, []);

  return (
    <group ref={group} position={[0, 8, -10]}>
      {rings.map((ring, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ring.radius, 0.1, 8, 32]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Enhanced 3D Background
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ 
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} color="#4c1d95" />
        <directionalLight position={[10, 10, 5]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[0, 0, 15]} intensity={0.4} color="#06b6d4" />
        
        {/* New 3D Elements */}
        <ParticleNebula />
        <DNAHelix />
        <CrystalFormation />
        <EnergyOrbs />
        <MorphingGrid />
        <RingSystem />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#1a1a2e', 15, 45]} />
      </Canvas>
    </div>
  );
}
