"use client";

import { motion } from "framer-motion";
import { FileBadge, Download } from "lucide-react";

const certificates = [
  { name: "Data Science Certification", file: "/aditya-portfolio/DATA_SCIENCE_CERTIFICATE.pdf" },
  { name: "Aivariant Internship (6 Months)", file: "/aditya-portfolio/6%20months%20Aivariant%20internship%20certificate.pdf" },
  { name: "DevOps Engineering Certification", file: "/aditya-portfolio/New%20Rooman%20Certificate%20DEVOPS%20ORIGINAL%20.pdf" },
  { name: "Technologics Global Certification", file: "/aditya-portfolio/TECHNOLOGICSGLOBAL_CERTIFICATE.pdf" },
  { name: "Wadhwani Foundation Certification", file: "/aditya-portfolio/Wadhwani%20Foundation%20Certificate%20-%2067b0c1647a4b7721e2d88b29.pdf" }
];

export default function Certificates() {
  return (
    <section className="py-24 px-8 lg:px-24 xl:px-32 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 z-10 relative"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Certificates.</h2>
        <div className="w-16 h-[2px] bg-blue-500/50" />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certificates.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="glass-card rounded-2xl p-6 flex items-center justify-between group cursor-pointer h-32"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-black/50 flex items-center justify-center group-hover:bg-white transition-colors shrink-0">
                <FileBadge className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                {cert.name}
              </h3>
            </div>
            <div className="shrink-0 ml-4 hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
              <Download className="w-4 h-4 text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
