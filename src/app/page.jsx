"use client";

import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import { products } from "./../data/products";
import Link from "next/link";
import CartDetail from "../components/CartDetail";

export default function Page() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HeroSection />

      <section
        ref={ref}
        className=" bg-gradient-to-br from-[#2c3e50] via-[#3a3f47] to-[#1a252f]
 "
      >
        <motion.h2
          className="text-3xl font-bold text-center py-15  text-white"
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
              <Link href={`/Products/${product.id}`}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CartDetail />
    </>
  );
}
