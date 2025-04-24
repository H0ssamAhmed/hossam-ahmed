
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Be Baby Shop 2",
    description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1719676645/BeBabyShop-2/Be_Baby_Shop_2_-_1_vmshps.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/H0ssamAhmed/BeBabyShop-2",
    live: "https://be-baby-shop-2.vercel.app/",
    category: ["Next.JS", "Full-Stack"]
  },
  {
    id: "2",
    title: "Masna3y - Fabric Works",
    description: "A modern, user-friendly, and fully responsive web application designed to streamline and manage fabric works efficiently. Featuring seamless dark and light modes for an enhanced user experience across all devices.",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1744912582/%D9%84%D9%88%D8%AD%D8%A9_%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85_md92r5.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    github: "https://github.com/H0ssamAhmed/fabric-works-harmony",
    live: "https://masna3y.vercel.app/dashboard",
    category: ["React.JS", "Full-Stack"]
  },
  {
    id: "3",
    title: "Jotion",
    description: "Dark-Light full stack note-taking app connected with convex back-end, authentication and authorization by clerk",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709397201/my-portfolio/jotion_aktfiy.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Convex"],
    github: "https://github.com",
    live: "https://example.com",
    category: ["Next.JS", "Full-Stack"]
  },
  {
    id: "4",
    title: "Wazaker",
    description: "Wzaker is web application for Muslim's azkar, the Holy Quran, and Tsapeeh The Holy Quran (Audio), Random Ayah with (Audio), Add Ayah to Favorite with (Audio), Show Surah's name of Ayah and It's all details, and Azkar (Morning and Evening) in Arabic",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1744913747/my-portfolio/1d23b1de-3304-4326-86bb-c2ca1576b954.png",
    technologies: ["React", "Context API", "Restful API", "Tailwind CSS"],
    github: "https://github.com/H0ssamAhmed/wzaker",
    live: "https://wzaker.vercel.app",
    category: ["React.JS"]
  },
  {
    id: "5",
    title: "Tseppas",
    description: "Dark-Light full stack E-commerce for oriental desserts with payment method, Strapi CMS, authentication , authorization by clerk",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709360043/my-portfolio/1_ps8fkc.png",
    technologies: ["Next.js", "Clerk", "Strapi", "stripe", "Tailwind CSS"],
    github: "https://github.com/H0ssamAhmed/Tseppas-Front-end",
    live: "",
    category: ["Full-Stack", "Next.JS"]
  },
  {
    id: "6",
    title: "Speacial Design Agency",
    description: "A dark-light landing page for An Agency That Offers A Variety Of Services That Fall Under The Umbrella Of Marketing And Advertising",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709400081/my-portfolio/Speacial-Design-Agency-1_ypjb8e.png",
    technologies: ["HTML", "CSS", "JavaScript", "Grid", "Flexbox"],
    github: "https://github.com/H0ssamAhmed/Speacial-Design-Agency",
    live: "https://h0ssamahmed.github.io/Speacial-Design-Agency/",
    category: ["HTML&CSS", "JavaScript"]
  },
  {
    id: "7",
    title: "Ominofood",
    description: "A Bootstrap 5 reimplementation of the Omnifood food",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709400041/my-portfolio/ominfood_lmer5x.png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/H0ssamAhmed/Omnifood-Food",
    live: "https://h0ssamahmed.github.io/Omnifood-Food/",
    category: ["HTML&CSS"]
  },
  {
    id: "8",
    title: "Blondi",
    description: "A Bootstrap 5 reimplementation of the Omnifood food",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1745061130/my-portfolio/8ef8a374-1f4b-4f57-801e-7e69f824adbb.png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/H0ssamAhmed/Blondi-Bootstrap-5",
    live: "https://h0ssamahmed.github.io/Blondi-Bootstrap-5/",
    category: ["HTML&CSS"]
  },
  {
    id: "9",
    title: "Run",
    description: "Online Cart for running shoes  responsive design.",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1745060819/my-portfolio/c6b6cc91-6672-42bb-b5d9-1783f7be6d7d.png",
    technologies: ["HTML", "CSS", "JavaScript", "Grid", "Flexbox"],
    github: "https://github.com/H0ssamAhmed/Run",
    live: "https://h0ssamahmed.github.io/Run/",
    category: ["HTML&CSS", "JavaScript"]
  },
  {
    id: "10",
    title: "HooBank",
    description: "A Landing Page For HooBank, Online Platform For the future of banking",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709400042/my-portfolio/HooBank_x7uy9m.png",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/H0ssamAhmed/HooBank/tree/gh-pages",
    live: "https://h0ssamahmed.github.io/HooBank/",
    category: ["React.JS"]
  },
  {
    id: "11",
    title: "GPT-3",
    description: "GPT-3 React Web Application is a landing page for  that demonstrates the capabilities of the GPT-3 language model by OpenAI.",
    image: "https://res.cloudinary.com/dc5eb9lmi/image/upload/v1709400114/my-portfolio/%D9%84%D9%82%D8%B7%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9_2024-03-02_192027_ldyuck.png",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/H0ssamAhmed/HooBank/tree/gh-pages",
    live: "https://h0ssamahmed.github.io/gpt3-react/",
    category: ["React.JS"]
  }
];

type CategoryType = "All" | "HTML&CSS" | "JavaScript" | "React.JS" | "Next.JS" | "Full-Stack";
const categories: CategoryType[] = ["All", "HTML&CSS", "JavaScript", "React.JS", "Next.JS", "Full-Stack"];

export function ProjectsSection() {
  const [searchParmas, setSearchParams] = useSearchParams()
  const cuurentFilterroject = searchParmas.get('activeCategory') || "All"
  const [filter, setFilter] = useState<CategoryType | string>(cuurentFilterroject);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;


  const filteredProjects = projects
    .filter((project) => filter === "All" || project.category.includes(filter));

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };
  const handleProjectsFilter = (category: string) => {
    console.log(category);
    setFilter(category);
    setCurrentPage(1);
    setSearchParams({ activeCategory: category })
  }
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've been using.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex justify-center mb-12" id="projects">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleProjectsFilter(category)}
                className={filter === category ? "bg-primary text-white" : ""}
              >
                {category === "All" && <Layers className="mr-2 h-4 w-4" />}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group bg-card rounded-lg overflow-hidden shadow-lg hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10 border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-primary/5 border-primary/10">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500 ${hoveredProject === project.id ? "animate-glow" : ""}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
