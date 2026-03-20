"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "Oct 2025 - Jan 2026",
    role: "Machine Learning Intern",
    company: "AI Variant — Bangalore, India",
    description: "Applied predictive modeling and machine learning to extract actionable insights for real-world business problems. Collaborated with cross-functional teams to deliver impactful, data-driven solutions."
  },
  {
    year: "Dec 2024 - Apr 2025",
    role: "Python & ML Developer",
    company: "VTUxRooman — Vijayapur, India",
    description: "Developed Python ML applications, including spam classifiers and data preprocessing utilities. Engineered practical Git workflows and foundational ML deployment pipelines."
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-8 lg:px-24 bg-black relative overflow-hidden">
      <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 z-10 relative"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Experience.</h2>
        <div className="w-16 h-[2px] bg-blue-500/50" />
      </motion.div>
      
      <div className="relative max-w-3xl ml-4 md:ml-12 border-l border-white/[0.08] z-10">
        <motion.div 
          className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-12 py-10 group">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.2 + 0.3 }}
              className="absolute left-[-6px] top-12 w-3 h-3 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-400 transition-colors duration-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <span className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3 block">{exp.year}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-neutral-400 font-medium mb-6 text-sm uppercase tracking-wide">{exp.company}</p>
              <p className="text-neutral-500 text-base leading-relaxed">{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
