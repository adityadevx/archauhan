import Tech from "@/app/components/Tech";
import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>AR CHAUHAN</title>
        <meta name="description" content="Portfolio of AR Chauhan" />
      </Head>
      <Header />
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
