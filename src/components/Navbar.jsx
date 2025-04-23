"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 60,
    },
  },
};

const itemVariants = {
  hover: {
    scale: 1.1,
    color: "#000000",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05, color: "#1f2937" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-2xl font-bold text-gray-800 cursor-pointer"
          >
            Shirtly
          </motion.h1>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((item) => (
            <Link key={item.name} href={item.path}>
              <motion.li
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>

        {/* Cart Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-4 py-2 rounded transition"
        >
          Cart
        </motion.button>
      </div>
    </motion.nav>
  );
}
