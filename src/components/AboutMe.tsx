"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <motion.div 
        className="flex-1 w-full mb-12 md:mb-0 flex justify-center md:justify-start z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-64 h-[22rem] md:w-80 md:h-[28rem] rounded-2xl overflow-hidden relative glass-premium p-1 shadow-2xl">
          <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full rounded-2xl overflow-hidden glass-card">
            <Image 
              src="/aditya-portfolio/ADITYA_IMAGE.jpeg" 
              alt="Aditya M Hiremath Portrait" 
              fill
              className="object-cover hover:scale-105 transition-all duration-700 ease-in-out grayscale hover:grayscale-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 pointer-events-none" />
          </div>
        </div>
      </motion.div>

      <div className="flex-1 z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">The Engineer.</h2>
          <div className="w-16 h-[2px] bg-blue-500/50 mb-8" />
        </motion.div>
        
        <motion.div 
          className="text-lg md:text-xl text-neutral-400 space-y-6 max-w-xl leading-relaxed font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            I am <span className="text-white font-medium">Aditya M Hiremath</span>, a specialized Computer Science graduate with a relentless focus on Data Science, Artificial Intelligence & Machine Learning. I architect systems that transform raw data into elegant, actionable intelligence.
          </p>
          <p>
            Bridging the gap between complex ML models and human intuition, I ensure every technical solution provides clear, interpretable value for all stakeholders.
          </p>
          <p className="text-sky-400 italic">
            "Driven by curiosity. Defined by execution."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
