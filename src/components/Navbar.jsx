"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 60 },
  },
};

const itemVariants = {
  hover: {
    scale: 1.1,
    color: "#f0f0f0",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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
      className="w-full bg-gradient-to-r from-[#42699d] via-[#4f85c2] to-[#5fa9e9] shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05, color: "#1f2937" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-2xl font-bold text-white drop-shadow-md cursor-pointer"
          >
            Shirtly
          </motion.h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map((item) => (
            <Link key={item.name} href={item.path}>
              <motion.li
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer text-white hover:text-gray-200 transition-colors"
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>

        {/* Login Button - Desktop */}
        <motion.button
          onClick={() => router.push("/auth")}
          whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#98c067] text-white px-4 py-2 rounded transition"
        >
          Login
        </motion.button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-md z-50 p-6 flex flex-col gap-6 text-lg font-medium text-gray-800 md:hidden"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                router.push("/auth");
              }}
              className="bg-black text-white py-2 px-4 rounded"
            >
              Login
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-auto bg-gray-200 py-2 rounded"
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
