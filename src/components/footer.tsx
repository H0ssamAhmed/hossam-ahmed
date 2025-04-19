
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-primary">
                Portfolio
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Specialized in building exceptional digital experiences with modern
              technologies and clean, efficient code.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/H0ssamAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dev-hossam-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:hossamahmed8862@gmail.com"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Experience", path: "/experience" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
                { name: "Articles", path: "/articles" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <address className="not-italic">
              <div className="space-y-3 text-muted-foreground">
                <p>Jeddah, Saudi Arabia</p>
                <p>
                  <a
                    href="mailto:hossamahmed8862@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    hossamahmed8862@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+966510837149"
                    className="hover:text-primary transition-colors"
                  >
                    +966 51 083 7149
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
