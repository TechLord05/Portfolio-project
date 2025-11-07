import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#home"
            className="text-lg md:text-xl font-bold text-foreground"
          >
            Ifeoluwa Adebayo
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4 flex items-center space-x-2">
              <a
                href="https://github.com/Techlord05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ifeoluwa-adebayo-124363272/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ifeoluwa.adebayo2003@gmail.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden fixed inset- 0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform bg-red- 500 flex flex-col space-y-4 bg-white  w-full",
          isMenuOpen ? "translate-x-0" : "translate-x-[450%]"
        )}
      >
        {/* <div className="pt-20 pb-6 px-4 bg-yellow 400"> */}
        <nav className="flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-3 text-base font-medium text-foreground hover:bg-primary hover:text-muted rounded-md transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* Menu footer (social icons) */}
          <div className="flex items-center space-x-4 px-4 pt-4">
            <a
              href="https://github.com/TechLord05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ifeoluwa-adebayo-124363272/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ifeoluwa.adebayo2003@gmail.com"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </nav>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
