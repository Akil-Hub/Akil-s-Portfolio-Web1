
import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Experience } from "@/src/components/sections/Experience";
import { Hero } from "@/src/components/sections/Hero";
import { Projects } from "@/src/components/sections/Project";
import { Testimonials } from "@/src/components/sections/Testimonials";

export default function Home() {
  return (
    <>
    
    <section className="min-h-screen overflow-x-hidden">
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>

    </section>
    </>
  );
}
