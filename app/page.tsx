import FindPhysician from "@/components/FindPhysician";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FindPhysician />
      <MainContent />
    </main>
  );
}
