import Tech from "@/components/Tech";
import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "AR CHAUHAN",
  description: "AR Chauhan's Portfolio",
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Projects />
        {/* <Tech /> */}
        {/* <Timeline /> */}
      </main>

      <Footer />
      <Analytics />
    </>
  );
}
