import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Star } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const experiences = [
    {
      title: 'Backend Engineer',
      company: 'Testraca (Healthcare Diagnostics Platform)',
      period: 'Nov 2025 - Present',
      achievements: [
        'Own and maintain backend API services for a multi-user healthcare diagnostics platform serving patients, phlebotomists, doctors, pharmacists, and lab scientists across Nigeria.',
        'Implemented split-payment functionality allowing users to apply wallet balance first and charge the remaining amount to a card through Paystack.',
        'Developed cart, checkout, and booking workflows with geolocation-based distance calculation and pricing for healthcare test requests and facility selection.',
        'Designed and implemented a specimen dispatch workflow allowing phlebotomists to either deliver samples directly to laboratories or route them through designated drop-off locations for dispatch pickup.',
        'Maintain and extend the existing GraphQL API, resolving bugs and implementing new backend features and modules using Django, Graphene-Django, and PostgreSQL.',
      ],
    },
    {
      title: 'Backend Engineer & Team Lead',
      company: 'Ubuntu Africa',
      period: '2024 - Present',
      achievements: [
        'Leading backend development for UbuntuPortal and Ubuntu Port Experience (UPE), building scalable B2B commerce and logistics platforms.',
        'Designed and implemented REST and GraphQL APIs powering authentication, product management, RFQs, shopping cart, chat, and logistics workflows.',
        'Built secure authentication and role-based authorization for buyers, suppliers, logistics providers, and administrators.',
        'Implemented asynchronous processing with Celery, Redis, and RabbitMQ to improve scalability and system responsiveness.',
        'Collaborated with product, AI, and engineering teams to deliver production-ready MVPs using Django, PostgreSQL, and Docker.',
      ],
    },
  ];

  const skills = [
    'Python',
    'TypeScript',
    'Django',
    'NestJS',
    'Django REST Framework',
    'GraphQL',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'Celery',
    'Docker',
    'JWT',
    'Paystack',
    'Swagger',
    'System Design',
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">

        {/* Header */}

        <div className="text-center mb-16 reveal">
          <h2 className="section-title">About</h2>

          <p className="section-subtitle mx-auto">
            Building secure, scalable backend systems for startups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left */}

          <div className="reveal">

            <h3 className="text-2xl font-semibold mb-6">
              What I Do
            </h3>

            <div className="space-y-5 text-muted-foreground leading-8">

              <p>
                I'm a Backend Engineer specializing in building
                production-ready backend systems for startups.
                My work focuses on designing secure APIs,
                payment integrations, scalable architectures,
                and backend infrastructure that help products
                move from MVP to production.
              </p>

              <p>
                Over the past few years, I've contributed to
                backend systems across fintech, B2B commerce,
                logistics, and healthcare. My primary stack is
                Django and NestJS, with experience building
                REST APIs, GraphQL services, authentication
                systems, asynchronous task processing, and
                PostgreSQL-backed applications.
              </p>

              <p>
                I enjoy solving backend challenges that go
                beyond CRUD—designing resilient payment
                workflows, optimizing database performance,
                implementing secure authentication, and
                building APIs that remain reliable as products
                scale.
              </p>

              <p>
                I'm currently focused on helping startups build
                reliable backend infrastructure while
                continually expanding my expertise in system
                design, distributed systems, and modern backend
                architecture.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="reveal">

            <h3 className="text-2xl font-semibold mb-6">
              Professional Experience
            </h3>

            <div className="space-y-8">

              {experiences.map((exp, index) => (

                <div
                  key={index}
                  className="border-l-2 border-primary/20 pl-5 relative"
                >

                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>

                  <h4 className="text-lg font-semibold">
                    {exp.title}
                  </h4>

                  <div className="flex justify-between text-sm text-muted-foreground mb-3">

                    <span>{exp.company}</span>

                    <span>{exp.period}</span>

                  </div>

                  <ul className="space-y-3">

                    {exp.achievements.map((achievement, i) => (

                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                      >

                        <Star
                          size={15}
                          className="mt-1 text-tech-teal flex-shrink-0"
                        />

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
              href="/Ifeoluwa_Adebayo_CV.pdf"
              download="Ifeoluwa_Adebayo_CV.pdf"
            >

              <Download size={16} />

              Download Resume

            </a>

          </Button>

          <Button variant="outline" asChild className="gap-2">

            <a href="mailto:ifeoluwa.adebayo2003@gmail.com">

              Get in Touch

              <ArrowRight size={16} />

            </a>

          </Button>

        </div>

        {/* Skills */}

        <div className="mt-20 reveal">

          <h3 className="text-2xl font-semibold mb-6 text-center">

            Technical Skills

          </h3>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">

            Technologies I use to design, build, and scale
            modern backend systems.

          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {skills.map((skill) => (

              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition"
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