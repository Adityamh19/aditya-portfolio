"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, ChevronRight } from "lucide-react";
import { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Cursor Spotlight that follows the mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle Aurora Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-32">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm font-medium text-neutral-300 mb-8 border border-white/10 hover:border-white/30 transition-colors mx-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Massive Typography Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8">
          <motion.span 
            className="block text-gradient-premium pb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Engineering
          </motion.span>
          <motion.span 
            className="block text-gradient-accent pb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Possibilities.
          </motion.span>
        </h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-medium tracking-tight leading-relaxed"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I am Aditya, an AI & ML Engineer specializing in Data Science where I handle complex data architectures and fluid, high-impact predictive models.
        </motion.p>
        
        {/* Call to Actions & Socials */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#works" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform active:scale-95"
          >
            <span className="relative z-10 transition-transform group-hover:-translate-x-1">Explore Work</span>
            <ChevronRight className="w-4 h-4 relative z-10 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a 
            href="/aditya-portfolio/LATEST%20ADITYA%20RESUME%202026.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 glass-premium text-white font-medium rounded-full hover:bg-white/10 transition-all active:scale-95"
          >
            Download Resume
          </a>
          
          <div className="flex items-center gap-4 ml-0 sm:ml-4 border-l border-white/10 pl-0 sm:pl-6">
            <a 
              href="https://github.com/Adityamh19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-all active:scale-95"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-hiremath-320063375/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-all active:scale-95"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
}
