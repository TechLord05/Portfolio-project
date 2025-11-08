import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

type Category = 'all' | 'backend';

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      title: 'UbuntuPortal B2B E-commerce Platform',
      description:
        'A scalable B2B e-commerce platform with real-time inventory management and order processing.',
      tags: ['Django', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ', 'Celery'],
      image: 'uportal.jpg',
      liveUrl: 'https://ubuntuportal.net/',
      category: 'backend',
    },
    {
      title: 'Ubuntu Port Experience(UPE)',
      description:
        'A comprehensive digital logistics and shipment management platform designed to streamline trade and supply chain operations across Africa. It connects Freight Forwarders, Clients (Importers/Exporters), Logistics Partners, and Admins in a seamless, real-time ecosystem, ensuring efficiency, transparency, and secure transactions.',
      tags: ['Python', 'Django', 'OAuth 2.0', 'PostgreSQL', 'Celery', 'RabbitMQ'],
      image: 'log.jpg',
      liveUrl: 'https://ubuntuport.com/',
      category: 'backend',
    },
    {
      title: 'DaaviSpecial Restaurant Web App',
      description:
        'A fast and user-friendly web platform designed for DaaviSpecial Restaurant. It features a dynamic digital menu, smooth ordering experience, and backend integration for kitchen operations.',
      tags: ['Python', 'Django', 'DRF', 'PostgreSQL'],
      image: 'daavi.jpg',
      githubUrl: 'https://github.com/Pcosby5/DaaviSpecial-backend',
      liveUrl: 'https://daavispecial.vercel.app/',
      category: 'backend',
    },
    {
      title: 'Care Time',
      description:
        'A healthcare solution streamlining specialist consultations by bypassing traditional hospital queues. Patients connect directly with verified specialists via a structured digital workflow.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      image: 'Tcare.png',
      githubUrl: 'https://github.com/hunterxcobby/TimelyCare',
      liveUrl: '#',
      category: 'backend',
    },
    {
      title: 'Dockerized Blog API',
      description:
        'A RESTful API built with Django REST Framework that allows users to create, read, update, and delete blog posts and comments. Features include user authentication, follower/following system, and efficient data handling for scalable blogging platforms. Perfect for developers looking to integrate blogging functionality into web or mobile applications.',
      tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'JWT', 'redis', 'celery'],
      image: 'blog.png',
      githubUrl: 'https://github.com/TechLord05/Blog_API',
      liveUrl: '#',
      category: 'backend',
    },
    {
      title: 'Airbnb Clone',
      description:
        'A full-stack web application that mimics the functionality of Airbnb, allowing users to book and list properties.',
      tags: ['Python', 'Flask', 'OAuth 2.0', 'MySQL', 'Celery', 'RabbitMQ'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      githubUrl: 'https://github.com/TechLord05/AirBnB_clone_v4',
      liveUrl: '#',
      category: 'backend',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work focused on backend engineering and API development
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
