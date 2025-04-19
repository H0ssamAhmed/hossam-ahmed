
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Calendar, MapPin, Building } from "lucide-react";
import { useActiveTab } from "@/context/ActiveTabContext";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Freelance",
    location: "Jeddah, Remote",
    period: "Apr 2025 – Present",
    type: "Remote",
    description: [
      "Develop responsive and performant web applications for various clients",
      "Implement modern UI/UX designs using React and Next.js",
      "Optimize website performance and SEO",
      "Collaborate with clients to transform requirements into functional features"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Heeiz",
    location: "Iraq, Remote",
    period: "Sep 2024 – Jan 2025",
    type: "Remote",
    description: [
      "Developed and maintained responsive web applications",
      "Collaborated with designers to implement UI/UX designs",
      "Optimized website performance and SEO",
      "Integrated third-party APIs and services"
    ],
    technologies: ["React", "JavaScript", "CSS", "Styled Components", "REST APIs"]
  },
  {
    id: 3,
    title: "Full-Stack Intern",
    company: "ITI",
    location: "El Mansoura, Hybrid",
    period: "May 2024 – Oct 2024",
    type: "Hybrid",
    description: [
      "Developed full-stack web applications using MERN stack",
      "Implemented user authentication and authorization",
      "Created RESTful APIs for frontend consumption",
      "Participated in code reviews and team meetings"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "GitHub"]
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Freelance",
    location: "Egypt",
    period: "Jun 2023 – May 2024",
    type: "Remote",
    description: [
      "Built responsive websites for small businesses",
      "Implemented modern UI designs with HTML, CSS, and JavaScript",
      "Optimized website performance and user experience",
      "Maintained and updated existing websites"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]
  }
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  const { setActiveTab, activeTab } = useActiveTab()
  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div

          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <motion.div
          onViewportEnter={(): void => setActiveTab("experience")}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 -ml-px sm:-ml-0.5 h-full w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-8 flex items-start  ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2  -ml-3 sm:-ml-3 h-6 w-6 rounded-full border-2 border-primary bg-background" />

              {/* Content */}
              <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                <div
                  className={`p-5 rounded-lg glass shadow-lg hover-lift cursor-pointer ${expandedId === exp.id ? "border-primary neon-border " : "border border-border"
                    }`}
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="flex justify-between items-center ">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <button
                      className="p-1 rounded-full hover:bg-muted transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                    >
                      {expandedId === exp.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  <div className="mt-2 text-primary font-medium">{exp.company}</div>

                  <div className="mt-2 flex flex-wrap gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {exp.type}
                    </div>
                  </div>

                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <h4 className="text-sm font-medium mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-medium mt-4 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
