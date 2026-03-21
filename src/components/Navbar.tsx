"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Intro", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-fit hidden sm:block"
      >
        <div className="flex items-center justify-center gap-2 px-4 py-2 glass-premium rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border border-white/10 bg-black/40">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] p-3 glass-premium rounded-full border border-white/10 bg-black/40 text-white sm:hidden backdrop-blur-md cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Vertical Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 right-6 w-48 z-50 sm:hidden"
          >
            <div className="flex flex-col items-end gap-1 p-3 glass-premium rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border border-white/10 bg-black/60 backdrop-blur-xl">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-right px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
