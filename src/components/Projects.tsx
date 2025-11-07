
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

type Category = 'all' | 'backend' | 'data' | 'devops';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "B2B E-commerce Platform",
      description: "A scalable B2B e-commerce platform with real-time inventory management and order processing.",
      tags: ["Django", "PostgreSQL", "Docker", "Kubernetes", "Redis", "RabbitMQ", "Celery"],
      image: "uportal.jpg",
      // githubUrl: "https://github.com",
      // liveUrl: "https://ubuntuportal.vercel.app/",
      category: "backend"
    },
    {
      title: "TimelyCare",
      description: "TimelyCare is a project that intends to streamline the healthcare journey for individuals seeking specialist care. Thereby Bypassing initial hospital visit.",
      tags: ["Python", "Django", "OAuth 2.0", "PostgresSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/hunterxcobby/TimelyCare",
      //liveUrl: "https://lilyhospitals.com/",
      category: "backend"
    },
    {
      title: "UbuntuPortal Logistics",
      description: "A secure RESTful API for seamless shipment management, real-time tracking, and optimized supply chain operations.",
      tags: ["Python", "Django", "OAuth 2.0", "postgreSQL", "Celery", "RabbitMQ"],
      image: "log.jpg",
      // githubUrl: "https://github.com",
      liveUrl: "https://ubuntu-logistics.vercel.app/",
      category: "backend"
    },
    {
      title: "Airbnb Clone",
      description: "A full-stack web application that mimics the functionality of Airbnb, allowing users to book and list properties.",
      tags: ["Python", "Flask", "OAuth 2.0", "MySQL", "Celery", "RabbitMQ"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      // githubUrl: "https://github.com",
      // liveUrl: "https://ubuntu-logistics.vercel.app/",
      githubUrl: "https://github.com/TechLord05/AirBnB_clone_v4",
      category: "backend"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work across backend engineering, data science, and DevOps
          </p>
        </div>

        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </Button>
            <Button
              variant={activeCategory === 'backend' ? 'default' : 'ghost'}
              className="rounded-md"
              onClick={() => setActiveCategory('backend')}
            >
              Backend
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
