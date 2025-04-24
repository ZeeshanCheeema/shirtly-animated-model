"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#17203d] text-white py-10 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">Shirtly</h2>
          <p className="text-sm mt-2 text-gray-400">
            © {new Date().getFullYear()} Shirtly. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 text-sm">
          {["Home", "Shop", "About", "Contact"].map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="cursor-pointer transition"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
