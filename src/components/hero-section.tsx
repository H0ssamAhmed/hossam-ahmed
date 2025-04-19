
import { motion } from "framer-motion";
import { HeroScene } from "@/components/hero-3d";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 pt-10 md:pt-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="block">Front-End Developer</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-primary">
                Creating Modern Web Experiences
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Specialized in building exceptional digital experiences with modern
              technologies and clean, efficient code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >

              <a href="#projects">
                <Button className="bg-primary hover:bg-primary/90">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  Contact Me
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 mt-10 md:mt-0"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
