import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/src/data/projectData.js";

const ProjectCard = ({
  project,
  idx,
}: {
  project: (typeof projects)[0];
  idx: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pre-load the video as soon as the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleMouseEnter = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = 0;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry once silently
        vid.muted = true;
        vid.play().catch(() => {});
      });
    }
  };

  const handleMouseLeave = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    vid.currentTime = 0;
  };

  return (
    <div
      key={idx}
      className="group glass rounded-3xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden aspect-video pb-6">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.thumbnail}
            loop
            muted={false}
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 scale-100"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full object-contain transition-transform duration-700 group-hover:scale-110 scale-105 pb-1"
          />
        )}
        <div className="absolute inset-0 bg-liner-to-t from-card via-card/50 to-transparent opacity-60" />
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

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
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
  );
};

export default ProjectCard;
