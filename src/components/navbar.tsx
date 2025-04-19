
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveTab } from "@/context/ActiveTabContext";

const navLinks = [
  // { name: "Home", path: "/" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
  { name: "Articles", path: "/articles" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useActiveTab()
  const navigate = useNavigate()
  const scrollToSection = (id: string) => {

    if (id === "articles") {
      setIsOpen(false)
      setActiveTab(id)
      navigate("/articles")
      window.scrollTo(0, 0)
      return;
    }
    navigate("/")

    const section = document.getElementById(id);
    setIsOpen(false)
    setActiveTab(id)
    section.scrollIntoView({ behavior: "smooth" });

  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center justify-center gap-0">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  className={cn("relative group  rounded-md transition-all duration-1000",
                    activeTab === link.name.toLowerCase() ? "from-primary to-neon-purple bg-gradient-to-r  " : "")}
                >
                  <p
                    onClick={() => scrollToSection(link.name.toLowerCase())}
                    className={cn("cursor-pointer text-sm px-2  py-1 text-foreground hover:text-primary transition-colors",
                      activeTab === link.name.toLowerCase() ? "text-white hover:text-white" : "")}
                  >
                    {link.name}
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}

            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-1 glass">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className="block py-2 px-3 text-base rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
