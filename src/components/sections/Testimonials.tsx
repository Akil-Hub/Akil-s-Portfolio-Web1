"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Hard worker....I will hire again.",
    author: "gamblerspassion",
    role: "Marketing Agency (USA)",
    avatar: "/client1.png",
  },
  {
    quote: `Perfect highly recommend.\n(Order-1)`,
    author: "imahardthinker",
    role: "Ship Yard Manager (Nigeria)",
    avatar: "/client2.png",
  },
  {
    quote: `great service, will order again.\n(Order-2)`,
    author: "imahardthinker",
    role: "Ship Yard Manager (Nigeria)",
    avatar: "/client2.png",
  },
  {
    quote: `the results were perfect.\n(Order-3)`,
    author: "imahardthinker",
    role: "Ship Yard Manager (Nigeria)",
    avatar: "/client2.png",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <section
        className="wrapper 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people{" "}
              <span className="text-secondary-foreground">Fiverr</span> Work
              Rating.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 flex flex-col md:flex-row justify-center mx-auto gap-5 md:gap-10  items-center ">
              <div className="relative">
                <div className="absolute -top-15 md:-top-3 lg:-top-1  left-1/2 md:left-10  -translate-x-1/1 md:-translate-y-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center
">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <summary className="flex flex-col-reverse md:flex-col pt-5 gap-5">
                  <blockquote className="text-md sm:text-lg md:text-2xl font-medium leading-relaxed mb-10  break-all  whitespace-pre-wrap">
                    "{testimonials[activeIdx].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                      height={50}
                      width={50}
                      src={testimonials[activeIdx].avatar}
                      alt={testimonials[activeIdx].author}
                      className=" rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonials[activeIdx].author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[activeIdx].role}
                      </div>
                    </div>
                  </div>
                </summary>
              </div>

              {/* rating div */}
              <article className="flex flex-col gap-2">
                <section className="flex justify-between  items-center gap-14">
                  <h3 className=" text-xs sm:text-sm md:text-base">
                    Seller communication level{" "}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="flex gap-1 items-center text-amber-400">
                      <FaStar /> <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="mt-1.5">5</span>
                  </div>
                </section>
                <section className="flex justify-between  items-center gap-14">
                  <h3 className=" text-xs sm:text-sm md:text-base">
                    Recommend to a friend
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="flex gap-1 items-center text-amber-400">
                      <FaStar /> <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="mt-1.5">5</span>
                  </div>
                </section>
                <section className="flex justify-between  items-center gap-14">
                  <h3 className=" text-xs sm:text-sm md:text-base">
                    Service as described
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="flex gap-1 items-center text-amber-400">
                      <FaStar /> <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="mt-1.5">5</span>
                  </div>
                </section>
              </article>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
