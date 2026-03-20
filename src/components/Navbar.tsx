"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Intro", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-6 left-1/2 z-50 w-[95%] max-w-fit"
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 glass-premium rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border border-white/10 bg-black/40">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
