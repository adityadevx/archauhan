

import Tech from "@/app/components/Tech";
import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Projects />
        {/* <Tech /> */}
        {/* <Timeline /> */}
      </main>
    
      <Footer />
    </>
  );
}
