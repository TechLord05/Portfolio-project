import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Star } from 'lucide-react';

const About = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const experiences = [
    {
      title: 'Mid-Level Backend Engineer',
      company: 'Ubuntu Africa (B2B & Logistics Platform)',
      period: '2024 - Present',
      achievements: [
        'Contributed to building the UbuntuPortal MVP — a B2B and logistics platform designed to empower African businesses through digital trade',
        'Architected scalable backend services using Django, PostgreSQL, and Docker, ensuring clean, modular, and maintainable code',
        'Implemented JWT-based authentication and role management for buyers, suppliers, and logistics partners',
        'Collaborated with AI and logistics teams to integrate automation into workflow and verification processes',
        'Optimized API performance and database queries, improving system efficiency and reliability during MVP development',
      ],
    },
  ];

  const skills = [
    'Python', 'Django', 'C', 'DRF', 'PostgreSQL',
    'Docker', 'REST APIs', 'Redis', 'CI/CD',
    'Microservices', 'System Design', 'Database Design'
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            My journey, vision, and approach to software engineering
          </p>
        </div>

        {/* Grid: Background & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Background */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a backend engineer with a strong focus on building scalable, efficient systems using Django,
                PostgreSQL, and cloud technologies. My journey began with the <strong>ALX Software Engineering</strong> program — a
                transformative experience that shaped my technical foundation, problem-solving mindset, and collaborative leadership.
              </p>
              <p>
                Since then, I’ve grown into a leadership role, currently serving as the <strong>General Team Manager</strong> and <strong>Backend Lead</strong>
                at <strong> UbuntuPortal</strong> — a startup focused on empowering African businesses through technology.
                Our current focus is building the <strong>UbuntuPortal MVP</strong> and its companion <strong>Logistics platform MVP</strong>,
                designed to streamline B2B commerce and logistics operations across the continent.
              </p>
              <p>
                My engineering philosophy revolves around clean code, thoughtful architecture, and real-world impact.
                I believe software should do more than function — it should solve meaningful problems, create value,
                and open doors for people and businesses to grow.
              </p>
              <p>
                When I’m not coding or refining workflows, I’m usually exploring system design, DevOps, and emerging AI tools.
                And on those late-night <strong>“Batman duties”</strong>, you’ll probably find me sketching new ideas
                on how to make technology work better for Africa.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-lg font-medium">{exp.title}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-1 mt-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Star size={14} className="mt-1 text-tech-teal flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 reveal">
          <Button asChild className="gap-2">
            <a
              href="https://docs.google.com/document/d/16X5oXxkGaC2HV4oRQoAN2YuZtEpVwKslqGNcvem_2j0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <a href="mailto:stephen.erich243@gmail.com">
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>

        {/* Technical Skills */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            A diverse technical toolkit for designing, building, and scaling modern backend systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
