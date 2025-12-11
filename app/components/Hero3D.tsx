'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y += Math.sin(Date.now() * 0.0005) * 0.002;
    }
  });

  return (
    <Sphere args={[1.5, 64, 64]} ref={meshRef} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#a855f7"
        attach="material"
        distort={0.3}
        speed={2}
        emissive="#7c3aed"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function SecondaryGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= 0.0015;
      meshRef.current.rotation.z += 0.0012;
      meshRef.current.position.y -= Math.sin(Date.now() * 0.0006) * 0.0015;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef} position={[3, -1, -2]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={2.5}
        emissive="#1d4ed8"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pointer-events-none" />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 75 }}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, 10]} intensity={0.8} color="#3b82f6" />

          <FloatingGeometry />
          <SecondaryGeometry />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            animate={{
              background: [
                'linear-gradient(90deg, #a855f7, #3b82f6)',
                'linear-gradient(90deg, #3b82f6, #10b981)',
                'linear-gradient(90deg, #a855f7, #3b82f6)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            3D Premium Portfolio
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Digital Marketing Excellence with Immersive 3D Experiences
          </motion.p>

          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 smooth-transition pointer-events-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-1 bg-purple-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
