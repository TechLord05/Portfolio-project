import React from 'react';
import { Button } from '@/components/ui/button';

const TECH_STACK = [
  "Django",
  "NestJS",
  "PostgreSQL",
  "GraphQL",
  "Redis",
  "Docker",
];

/* Beyond this index the pills only show from md up, so mobile keeps a single row. */
const MOBILE_TECH_COUNT = 3;

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-20 lg:pt-24 pb-14 md:pb-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] md:opacity-10 z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-tech-teal/10 rounded-full blur-3xl"></div>

      {/* py-0 on mobile: the section owns the vertical rhythm there so the hero stays short. */}
      <div className="section-container relative z-10 py-0 md:py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary mb-5 md:mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-xs md:text-sm font-medium">
              <span className="md:hidden">🚀 Building Startup Backends</span>
              <span className="hidden md:inline">
                🚀 Helping startups build secure, production-ready backend systems
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[1.625rem] md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] md:leading-none mb-4 md:mb-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-teal">
              <span className="md:hidden">Backend Engineer<br />Building Production-Ready Backends</span>
              <span className="hidden md:inline">
                Backend Engineer Building Scalable APIs & Secure Backend Systems
              </span>
            </span>
          </h1>

          {/* Description. md:leading-relaxed is required: md:text-xl carries its own
              line-height and, from inside a media query, beats bare leading-relaxed. */}
          <p
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 animate-fade-in leading-relaxed md:leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="md:hidden">
              I build production-ready backend systems with{" "}
              <strong>Django</strong> and <strong>NestJS</strong>, from secure
              authentication to payment integrations and scalable APIs.
            </span>
            <span className="hidden md:inline">
              I help startups transform ideas into reliable backend products using{" "}
              <strong>Django</strong> and <strong>NestJS</strong>. From
              authentication and payment integrations to scalable REST &
              GraphQL APIs, I build backend systems that are secure,
              maintainable, and ready for production.
            </span>
          </p>

          {/* Tech Stack */}
          <div
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-7 md:mb-10 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            {TECH_STACK.map((tech, i) => (
              <span
                key={tech}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border bg-background text-xs md:text-sm font-medium ${
                  i >= MOBILE_TECH_COUNT ? "hidden md:inline-block" : ""
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-sm mx-auto md:max-w-none animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Button size="lg" className="flex-1 px-6 md:flex-initial md:px-8" asChild>
              <a href="#projects">View My Work</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="flex-1 px-6 md:flex-initial md:px-8"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
