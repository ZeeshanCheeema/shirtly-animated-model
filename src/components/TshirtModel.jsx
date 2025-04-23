"use client";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d"; // ✅ Correct import

export default function TshirtModel({ selectedColor = "white", ...props }) {
  const groupRef = useRef();

  const { nodes } = useGLTF("/scene.gltf");
  const texture = useTexture("/textures/material_1_baseColor.jpeg");

  // Continuous Y-axis rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <motion.group
      ref={groupRef}
      {...props}
      initial={{ x: -6, y: -2, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        type: "spring",
      }}
      rotation={[0, 0, 0]}
    >
      <mesh geometry={nodes.Object_4.geometry} scale={0.026}>
        <meshStandardMaterial color={selectedColor} map={texture} />
      </mesh>
      <mesh geometry={nodes.Object_6.geometry} scale={0.026}>
        <meshStandardMaterial color={selectedColor} map={texture} />
      </mesh>
    </motion.group>
  );
}

useGLTF.preload("/scene.gltf");
