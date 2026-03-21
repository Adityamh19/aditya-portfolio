"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Play } from "lucide-react";
import Image from "next/image";

const works = [
  { id: 1, title: "Customer Personality Analysis", github: "https://github.com/Adityamh19/clustering", live: "https://clustering01.streamlit.app/", image: "/aditya-portfolio/customer_personality.png" },
  { id: 2, title: "Liver Disease Predictor", github: "https://github.com/Adityamh19/Liver-Disease-Predictor-App", live: "https://liver-disease-predictor-app-flspwmy3igbjywmzwwxnm4.streamlit.app/", image: "/aditya-portfolio/liver_disease.png" },
  { id: 3, title: "Bank Loan Approval", github: "https://github.com/Adityamh19/Bank-Loan-Approval-Prediction", live: "https://bank-loan-approval-prediction-dndxyvbr4unmuhkaxwfcb4.streamlit.app/", image: "/aditya-portfolio/bank_loan_approval.png" },
  { id: 4, title: "Marketing Campaign Conversion", github: "https://github.com/Adityamh19/Marketing-Campaign-Conversion-Predictor", live: "https://marketing-campaign-conversion-predictor-aqyqjqmejbyqcu4dfkeauz.streamlit.app/", image: "/aditya-portfolio/marketing_campaign.png" },
  { id: 5, title: "Heart Disease Prediction", github: "https://github.com/Adityamh19/Heart-Disease-Prediction-Dataset", live: "https://heart-disease-prediction-dataset-fxthmfupnkkzy6maspegim.streamlit.app/", image: "/aditya-portfolio/heart_disease.png" },
  { id: 6, title: "Amazon Review Sentiment", github: "https://github.com/Adityamh19/Amazon-Review-Sentiment-Analysis", live: "https://amazon-review-sentiment-analysis-hdmycqhcr4ccu2koqpvskp.streamlit.app/", image: "/aditya-portfolio/amazon_review.png" }
];

export default function SelectedWorks() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-8 lg:px-24 xl:px-32 bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Execution.</h2>
        <div className="w-16 h-[2px] bg-blue-500/50" />
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            className="group relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card block"
          >
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={work.image} 
                alt={work.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex flex-col justify-between h-full pointer-events-none">
              <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-auto translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
                <a href={work.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/90 text-white text-xs font-bold hover:bg-blue-400 transition-colors shadow-lg backdrop-blur-md">
                  <Play className="w-3.5 h-3.5" /> Live Demo
                </a>
                <a href={work.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md">
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
              </div>
              
              <div className="mt-4 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-blue-400 font-mono text-xs tracking-wider mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100 uppercase">Streamlit App</p>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">{work.title}</h3>
              </div>
            </div>
            
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
