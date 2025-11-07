import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-lg font-bold text-foreground">
              Ifeoluwa Adebayo 
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Specialized in backend engineering solutions. Let's collaborate on your next project.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Techlord05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ifeoluwa-adebayo-124363272/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ifeoluwa.adebayo2003@gmail.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ifeoluwa Adebayo | All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
