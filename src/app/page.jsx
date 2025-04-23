"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import TshirtModel from "./../components/TshirtModel";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
export default function Page() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");

  const products = [
    {
      id: 1,
      image: "/shirt.png",
      name: "Minimalist Cotton Tee",
      price: "$25.00",
      rating: 4,
    },
    {
      id: 2,
      image: "/logo.png",
      name: "Urban Classic Fit",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 3,
      image: "/shirt2.png",
      name: "Relaxed Vibe Tee",
      price: "$22.00",
      rating: 3,
    },
    {
      id: 4,
      image: "/shirt.png",
      name: "Minimalist Cotton Tee",
      price: "$25.00",
      rating: 4,
    },
    {
      id: 5,
      image: "/logo.png",
      name: "Urban Classic Fit",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 6,
      image: "/shirt2.png",
      name: "Relaxed Vibe Tee",
      price: "$22.00",
      rating: 3,
    },
    {
      id: 7,
      image: "/shirt.png",
      name: "Minimalist Cotton Tee",
      price: "$25.00",
      rating: 4,
    },
    {
      id: 8,
      image: "/logo.png",
      name: "Urban Classic Fit",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 9,
      image: "/shirt2.png",
      name: "Relaxed Vibe Tee",
      price: "$22.00",
      rating: 3,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const colorOptions = {
    Yellow: "#ffff00",
    White: "white",
    Blue: "#3b82f6",
    Red: "#ef4444",
  };

  // Variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HeroSection />
      {/* Initial page animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="min-h-screen w-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#d1d5ff] p-6 relative overflow-hidden"
      >
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-400 opacity-30 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-[100px] rounded-full z-0" />

        <h1 className="text-center text-4xl font-bold mb-10 relative z-10 text-gray-800 drop-shadow-lg">
          Shirt Design (3D)
        </h1>

        {/* Left: 3D Model */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-white/70 shadow-2xl backdrop-blur-md rounded-xl p-6 relative z-10">
          <div className="flex-1 flex justify-end items-end">
            <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 3]} intensity={0.8} />
                <OrbitControls />
                <TshirtModel selectedColor={selectedColor} />
                <ContactShadows
                  position={[0, -0.4, 0]}
                  opacity={0.4}
                  scale={10}
                  blur={1.5}
                  far={6}
                />
              </Canvas>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Men's Classic Fit T-Shirt
              </h2>
              <p className="text-gray-600 mt-2">
                Made with 100% cotton for a breathable and comfortable fit.
                Perfect for everyday casual wear with a relaxed fit and classic
                crew neck.
              </p>
            </div>

            {/* Size and Color Selection */}
            <div>
              <h3 className="font-medium mb-2 text-gray-800">Size</h3>
              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-800">Color</h3>
              <div className="flex gap-3">
                {Object.entries(colorOptions).map(([label, color]) => (
                  <button
                    key={label}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "ring-2 ring-black" : ""
                    } ${
                      color === "white"
                        ? "border-gray-400"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Selected: <strong>{selectedSize}</strong>
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
      <section ref={ref}>
        <motion.h2
          className="text-3xl font-bold text-center mt-16 mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          You May Also Like
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: product.id * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
            >
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
