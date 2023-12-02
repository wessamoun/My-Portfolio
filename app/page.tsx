import About from "@/components/About";
import Contact from "@/components/Contact";
import DarkModeButton from "@/components/DarkModeButton";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ActiveSection from "@/context/activeSection";

export default function Home() {
  return (
    <main className="w-full">
      <ActiveSection>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      </ActiveSection>
      <DarkModeButton />
    </main>
  );
}
