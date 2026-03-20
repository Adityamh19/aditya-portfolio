"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, Rocket, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Web Strategy",
    description: "Aligning business goals with scalable, future-proof digital architectures.",
    icon: <Rocket className="w-6 h-6 text-accent" />
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive, highly polished interfaces with deep dark-mode aesthetics.",
    icon: <Paintbrush className="w-6 h-6 text-accent" />
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern applications using Next.js and Tailwind CSS.",
    icon: <Code2 className="w-6 h-6 text-accent" />
  },
  {
    title: "Motion & Interaction",
    description: "Implementing seamless scroll animations and micro-interactions.",
    icon: <MonitorSmartphone className="w-6 h-6 text-accent" />
  }
];

export default function Services() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-black/40 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent opacity-10 blur-[100px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Do</h2>
        <div className="w-20 h-1 bg-accent mx-auto" />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass glow-hover p-8 rounded-2xl flex flex-col items-start"
          >
            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
