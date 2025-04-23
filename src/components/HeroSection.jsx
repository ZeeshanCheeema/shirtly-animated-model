"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Preload,
} from "@react-three/drei";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#d1d5ff] flex items-center justify-center px-4">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-lg"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Explore Our Collection
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover the best shirts crafted for comfort and style. Find your
            perfect fit with Shirtly.
          </p>
          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            aria-label="Shop our shirt collection"
          >
            Shop Now
          </button>
        </motion.div>

        <div className="w-full max-w-lg h-[400px] sm:h-[500px] relative">
          <Canvas camera={[2, 1, 3]}>
            <ambientLight intensity={0.91} />
            <directionalLight position={[6, 6, 6]} intensity={0.8} />
            <Suspense fallback={null}>
              <Model />
              <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.35}
                scale={10}
                blur={2.5}
                far={7}
              />
              <Preload all />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

const Model = () => {
  const { scene, animations } = useGLTF("/models/walking-men/scene.gltf");
  const mixerRef = useRef(null);
  const actionRef = useRef(null);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      const action = mixer.clipAction(animations[0]);

      action.setLoop(THREE.LoopRepeat, 10000);
      action.clampWhenFinished = false;
      action.enabled = true;
      action.play();
      action.fadeIn(0.5);

      mixerRef.current = mixer;
      actionRef.current = action;
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
      elapsedRef.current += delta;
      if (elapsedRef.current >= 3) {
        actionRef.current?.reset().play();
        elapsedRef.current = 0;
      }
    }
  });

  return <primitive object={scene} scale={1.75} position={[0, -1, 0]} />;
};

export default HeroSection;
