import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-tech-teal/10 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-sm font-medium">Available for freelance work</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-teal">
              Backend Engineer
            </span>
          </h1>

          <p
            className="text-xl text-muted-foreground mb-8 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            I design and build scalable backend systems, focusing on performance,
            security, and reliability to power modern digital experiences.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Button size="lg" asChild>
              <a href="#contact">Let's work together</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>

          {/* Removed the grid with the backend icon */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
