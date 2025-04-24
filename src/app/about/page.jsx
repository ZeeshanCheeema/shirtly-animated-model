"use client";

import { motion } from "framer-motion";
import { FaTshirt, FaHeart, FaSmile } from "react-icons/fa";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#2c3e50] via-[#3a3f47] to-[#1a252f] text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Shirtly</h1>

        <p className="text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          At <span className="font-semibold text-[#98c067]">Shirtly</span>, we
          believe in blending creativity, comfort, and craftsmanship. Our
          mission is to empower individuality through stylish, high-quality
          T-shirts that make a statement — your statement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <FaTshirt className="text-4xl text-[#98c067] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Crafted with Quality</h3>
            <p className="text-gray-600">
              Each tee is made from premium cotton, designed to last and feel
              soft with every wear.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <FaHeart className="text-4xl text-pink-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Driven by Passion</h3>
            <p className="text-gray-600">
              We're a team of designers and dreamers who love making you feel
              confident in your style.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <FaSmile className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Made for You</h3>
            <p className="text-gray-600">
              Whether you're bold or minimalist, Shirtly lets you express your
              personality in style.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-2">Join the Shirtly Movement</h2>
          <p className="text-gray-400 mb-4">
            Follow us on social media and be part of a growing community of
            fashion-forward creators.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Follow Shirtly on social media"
            className="bg-[#98c067] hover:bg-[#7f9a5d] text-white px-6 py-3 rounded shadow transition"
          >
            Follow Us
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
