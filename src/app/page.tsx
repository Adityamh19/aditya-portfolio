import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SelectedWorks from "@/components/SelectedWorks";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-background text-foreground antialiased selection:bg-accent selection:text-white relative overflow-x-hidden">
      <Navbar />
      
      <div id="hero"><Hero /></div>
      <div id="about"><AboutMe /></div>
      <div id="works"><SelectedWorks /></div>
      <div id="experience"><Experience /></div>
      <div id="credentials"><Certificates /></div>
      <div id="contact"><Contact /></div>
      
      <footer className="py-8 text-center bg-black/40 border-t border-neutral-900">
        <p className="text-neutral-500 text-sm font-mono">&copy; {new Date().getFullYear()} Aditya M Hiremath. All rights reserved.</p>
      </footer>
    </main>
  );
}
