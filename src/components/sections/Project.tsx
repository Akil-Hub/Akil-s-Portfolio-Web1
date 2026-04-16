import { AnimatedBorderButton } from "@/src/components/ui/AnimatedBorderButton";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Fatro E-Commerce",
    description:
      "A comprehensive E-Commerce Website with real-time data visualization, Amazing Design,Modern Layout,Fully Responsiveness.",
    image: "/projects/project1.png",
    tags: ["React", "javaScript", "Tailwindcss"],
    link: "https://e-commerce-website1-six.vercel.app/",
    github: "https://github.com/Akil-Hub/E-Commerce-website1",
  },
  
  {
    title: "Company Growth Booster",
    description:
      "It's a Marketing Website for boosting the growth of any kind fo startUp Companies on Earth.",
    image: "/projects/project3.png",
    tags: ["React", "Boost Traffic", "Framer Motion", "Eye Catching animation"],
    link: "https://modern-react-website-by-akil.vercel.app/",
    github: "https://github.com/Akil-Hub/modern-react-website-by-Akil",
  },
  {
    title: "Oribie E-Commerce",
    description:
      "Modern E-commerce website with Add to cart, management, Dynamic Slider,Categorized filter and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["React.js", "Redux-Toolkit", "javaScript", "Tailwind"],
    link:"https://oribie-e-commerce-website.vercel.app/",
    github: "https://github.com/Akil-Hub/Oribie-E-Commerce-Website",
  },
  {
    title: "English || জানালা",
    description:
      "In this website we can learn so many english words by playing step by step level. It helps to Boost our vocabulary learning",
    image: "/projects/project4.png",
    tags: ["React.js", "javaScript", "DasisyUi"],
    link: "https://english-janala-word-learning-system.vercel.app/",
    github: "https://github.com/Akil-Hub/English-Janala-Word-learning-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video pb-6 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className=" w-full object-contain transition-transform duration-700 group-hover:scale-110 scale-105   pb-1"
                />
                <div
                  className="absolute inset-0 
                bg-liner-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <Link href={'https://vercel.com/akil-anjum-mahis-projects'}>
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton></Link>
        </div>
      </div>
    </section>
  );
};