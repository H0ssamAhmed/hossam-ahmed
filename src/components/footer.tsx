
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useActiveTab } from "@/context/ActiveTabContext";

export function Footer() {
  const { activeTab, setActiveTab } = useActiveTab()
  const navigate = useNavigate()

  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {

    if (id === "articles") {
      setActiveTab(id)
      navigate("/articles")
      window.scrollTo(0, 0)
      return;
    }
    navigate("/")

    const section = document.getElementById(id);

    setActiveTab(id)
    section.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold flex items-center justify-start gap-0">
              <img src="https://res.cloudinary.com/dc5eb9lmi/image/upload/v1744880158/my-portfolio/logo-color_f9omtn.png" alt="Logo" className="w-8 h-8 mx-4" />

              <motion.span
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Dev
              </motion.span>

              <span className="">folio</span>
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
                { name: "Experience", path: "#experience" },
                { name: "Projects", path: "projects" },
                { name: "Skills", path: "skills" },
                { name: "Education", path: "education" },
                { name: "Contact", path: "contact" },
                { name: "Articles", path: "articles" },
              ].map((link) => (
                <li key={link.name}>
                  <p
                    onClick={() => scrollToSection(link.name.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </p>
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
