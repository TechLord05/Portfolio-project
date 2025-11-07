import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Code, Server, Database, Link, Settings, Gauge } from 'lucide-react';

const Services = () => {
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const services = [
    {
      title: "API Development",
      description:
        "Building robust, well-documented, and scalable APIs that power frontend applications and enable seamless integrations.",
      icon: Code,
      technologies: ["Django REST", "PostgreSQL", "JWT", "Swagger", "Celery"],
      colorClass: "tech-teal",
      iconColorClass: "tech-teal"
    },
    {
      title: "Backend Architecture",
      description:
        "Designing clean, maintainable backend systems following best practices and industry standards.",
      icon: Server,
      technologies: ["Microservices", "Docker", "Redis", "Nginx", "Celery"],
      colorClass: "tech-indigo",
      iconColorClass: "tech-indigo"
    },
    {
      title: "Database Design",
      description:
        "Architecting efficient database schemas, optimizing queries, and ensuring data integrity and security.",
      icon: Database,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "ORM", "Indexing"],
      colorClass: "tech-rose",
      iconColorClass: "tech-rose"
    },
    {
      title: "System Integration",
      description:
        "Connecting diverse systems and services to create unified, cohesive backend ecosystems.",
      icon: Link,
      technologies: ["REST", "Webhooks", "gRPC", "OAuth", "Third-Party APIs"],
      colorClass: "tech-yellow",
      iconColorClass: "tech-yellow"
    },
    {
      title: "DevOps Support",
      description:
        "Setting up CI/CD pipelines, containerization, and infrastructure management for seamless deployment.",
      icon: Settings,
      technologies: ["GitHub Actions", "Docker", "AWS", "Linux", "NGINX"],
      colorClass: "tech-green",
      iconColorClass: "tech-green"
    },
    {
      title: "Performance Optimization",
      description:
        "Identifying and resolving bottlenecks to ensure your backend systems run at peak efficiency.",
      icon: Gauge,
      technologies: ["Caching", "Profiling", "Load Testing", "Redis", "Optimization"],
      colorClass: "tech-orange",
      iconColorClass: "tech-orange"
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tech-indigo/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title relative inline-block">
            My Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-tech-teal rounded"></span>
          </h2>
          <p className="section-subtitle mx-auto">
            Leveraging technical expertise to solve complex problems and deliver high-quality backend solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              technologies={service.technologies}
              colorClass={service.colorClass}
              iconColorClass={service.iconColorClass}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
