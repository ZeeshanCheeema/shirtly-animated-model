// src/components/DynamicModel.js
"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DynamicModel({ path, scale = 1, ...props }) {
  const group = useRef();
  const { scene } = useGLTF(path);

  return (
    <group ref={group} {...props} scale={scale} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload("/models/car.glb");
useGLTF.preload("/models/morgan_plus_six_assetto_2020.glb");
