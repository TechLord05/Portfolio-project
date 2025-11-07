
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Ife.Dev | Backend Engineer";
    
    // Scroll reveal animation with improved options
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use setTimeout to create a staggered effect
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 150); // Small delay for a smoother effect
        }
      });
    }, { 
      threshold: 0.15, // Slightly higher threshold for better timing
      rootMargin: "0px 0px -50px 0px" // Start animation slightly before element is fully in view
    });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
