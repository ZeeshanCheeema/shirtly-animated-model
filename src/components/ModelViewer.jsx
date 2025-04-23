"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import DynamicModel from "@/components/DynamicModel";
import { useState } from "react";

const models = [
  {
    key: "lamborghini",
    name: "Lamborghini Reventon",
    path: "/models/2010_lamborghini_reventon_roadster.glb",
    scale: 10,
  },
  {
    key: "ferrari",
    name: "Ferrari 458",
    path: "/models/car.glb",
    scale: 10.1,
  },
  {
    key: "bugatti",
    name: "Bugatti Veyron",
    path: "/models/morgan_plus_six_assetto_2020.glb",
    scale: 10.2,
  },
  // Add more here
];

export default function ModelViewer() {
  const [selected, setSelected] = useState(models[0]);

  return (
    <>
      <select
        className="p-2 rounded-md shadow w-[500vw] "
        onChange={(e) => {
          const m = models.find((model) => model.key === e.target.value);
          setSelected(m);
        }}
      >
        {models.map((model) => (
          <option key={model.key} value={model.key}>
            {model.name}
          </option>
        ))}
      </select>

      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <DynamicModel path={selected.path} scale={50} />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </>
  );
}
