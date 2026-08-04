import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

type Category = 'all' | 'backend';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: Category;
  featured?: boolean;
  highlights?: string[];
}

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

  const projects: Project[] = [
    {
      title: 'Mini Wallet API',
      description:
        'A production-style fintech backend built with NestJS featuring secure wallet funding, peer-to-peer transfers, Paystack payment integration, bank withdrawals, JWT authentication, atomic database transactions, webhook verification, rate limiting, and Swagger API documentation.',
      tags: [
        'NestJS',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Paystack',
        'JWT',
        'Swagger',
        'REST API',
      ],
      image: 'wallet.png',
      githubUrl: 'https://github.com/TechLord05/Mini-Wallet_API',
      liveUrl: '#',
      category: 'backend',
      featured: true,
      highlights: [
        'Wallet funding, peer-to-peer transfers and bank withdrawals',
        'Atomic database transactions on every balance change',
        'Verified Paystack webhooks with request rate limiting',
        'JWT authentication and Swagger-documented endpoints',
      ],
    },

    {
      title: 'UbuntuPortal B2B Marketplace',
      description:
        'Built core backend services for a multi-country B2B commerce platform, including authentication, product management, RFQs, shopping cart, chat, and asynchronous background processing using Django, PostgreSQL, Redis, Celery, and Docker.',
      tags: [
        'Django',
        'PostgreSQL',
        'Redis',
        'Celery',
        'Docker',
        'GraphQL',
      ],
      image: 'uportal.jpg',
      liveUrl: 'https://ubuntuportal.net/',
      category: 'backend',
    },

    {
      title: 'Ubuntu Port Experience (UPE)',
      description:
        'Designed backend services for a logistics platform connecting freight forwarders, logistics providers, and clients through secure APIs, role-based access control, shipment workflows, and asynchronous task processing.',
      tags: [
        'Django',
        'Python',
        'OAuth 2.0',
        'PostgreSQL',
        'Celery',
      ],
      image: 'log.jpg',
      liveUrl: 'https://ubuntuport.com/',
      category: 'backend',
    },

    {
      title: 'Care Time',
      description:
        'Developed backend APIs for a healthcare platform that connects patients with verified specialists, streamlining appointment workflows and improving access to specialist care.',
      tags: [
        'Django',
        'Python',
        'PostgreSQL',
        'REST API',
      ],
      image: 'Tcare.png',
      githubUrl: 'https://github.com/hunterxcobby/TimelyCare',
      liveUrl: '#',
      category: 'backend',
    },

    {
      title: 'DaaviSpecial Restaurant Platform',
      description:
        'Built the backend powering a restaurant ordering platform with menu management, order processing, and REST APIs designed for a seamless customer experience.',
      tags: [
        'Django',
        'Python',
        'DRF',
        'PostgreSQL',
      ],
      image: 'daavi.jpg',
      githubUrl: 'https://github.com/Pcosby5/DaaviSpecial-backend',
      liveUrl: 'https://daavispecial.vercel.app/',
      category: 'backend',
    },

    {
      title: 'Dockerized Blog API',
      description:
        'Developed and containerized a RESTful Blog API featuring JWT authentication, PostgreSQL persistence, Redis caching, Celery background tasks, and Docker deployment.',
      tags: [
        'Django',
        'Python',
        'DRF',
        'JWT',
        'PostgreSQL',
        'Redis',
        'Celery',
        'Docker',
      ],
      image: 'blog.png',
      githubUrl: 'https://github.com/TechLord05/Blog_API',
      liveUrl: '#',
      category: 'backend',
    },

    {
      title: 'Property Booking Platform',
      description:
        'Built a full-stack property booking platform inspired by Airbnb, implementing secure authentication, property listings, booking workflows, and backend services.',
      tags: [
        'Python',
        'Flask',
        'MySQL',
        'OAuth 2.0',
        'Celery',
      ],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      githubUrl: 'https://github.com/TechLord05/AirBnB_clone_v4',
      liveUrl: '#',
      category: 'backend',
    },
  ];

  const filteredProjects = projects
    .filter(
      (project) =>
        activeCategory === 'all' || project.category === activeCategory
    )
    // The featured project always leads the grid.
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle mx-auto">
            Production backend systems I have designed and shipped — APIs,
            payments, authentication and asynchronous processing.
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

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
              highlights={project.highlights}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
