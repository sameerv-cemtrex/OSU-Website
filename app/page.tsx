import Contact from "@/components/Contact";
import FindPhysician from "@/components/FindPhysician";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FindPhysician />
      <MainContent />
      <Contact />
      <Footer />
    </main>
  );
}
