"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-8 lg:px-24 xl:px-32 bg-[#050505] relative border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Connect.</h2>
        <div className="w-16 h-[2px] bg-blue-500/50 mb-8" />
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
          Open to new opportunities, cutting-edge collaborations, and strategic discussions revolving around Data Science, AI, and comprehensive Web Systems.
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
        <motion.a
          href="https://www.linkedin.com/in/aditya-hiremath-320063375/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 glass-card px-8 py-5 rounded-2xl w-full md:w-auto"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
             <Linkedin className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-lg font-semibold text-white tracking-wide">LinkedIn</span>
        </motion.a>
        
        <motion.a
          href="https://github.com/Adityamh19"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 glass-card px-8 py-5 rounded-2xl w-full md:w-auto"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
             <Github className="w-5 h-5 text-neutral-300" />
          </div>
          <span className="text-lg font-semibold text-white tracking-wide">GitHub</span>
        </motion.a>
        
        <motion.a
          href="mailto:adityamh19@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-2xl w-full md:w-auto hover:bg-neutral-200 transition-colors shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 transform duration-300"
        >
          <Mail className="w-5 h-5" />
          <span className="text-lg font-bold tracking-wide">Email Me</span>
        </motion.a>
      </div>
    </section>
  );
}
