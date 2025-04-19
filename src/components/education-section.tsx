
import { useActiveTab } from "@/context/ActiveTabContext";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

const educationData: Education[] = [
  {
    id: "icc",
    degree: "ITP Diploma",
    institution: "Information Technology institute (ITI)",
    period: "May–Oct 2024",
    description: "Intensive training program in information technology institute covering both frontend and backend development.",
  },
  {
    id: "bs",
    degree: "BS, Chemistry & Zoology",
    institution: "Mansoura University",
    period: "2019–2023",
    description: "Bachelor of Science with a focus on chemistry and zoology, developing strong analytical and research skills.",
  },
];

const certificatesData: Certificate[] = [
  {
    id: "cert1",
    name: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn Learning",
    date: "Not specified",
    description: "Completed essential training in software development fundamentals through Microsoft and LinkedIn Learning.",
  },
  {
    id: "cert2",
    name: "Database Fundamentals",
    issuer: "MaharaTech - ITIMooca",
    date: "Not specified",
    description: "Fundamentals of database concepts and technologies with MaharaTech's ITIMooca platform.",
  },
  {
    id: "cert3",
    name: "JavaScript Certificate",
    issuer: "HackerRank",
    date: "Not specified",
    description: "Demonstrated JavaScript proficiency by completing the HackerRank JavaScript certification.",
  },
  {
    id: "cert4",
    name: "Meta React.JS",
    issuer: "Coursera",
    date: "Not specified",
    description: "In-depth learning of React.js fundamentals and component-driven development, issued by Meta via Coursera.",
  },
  {
    id: "cert5",
    name: "Meta Introduction to Front-End Development",
    issuer: "Coursera",
    date: "Not specified",
    description: "Introduction to front-end web development covering basic HTML, CSS, JavaScript, and frameworks.",
  },
  {
    id: "cert6",
    name: "EF SET English Certificate",
    issuer: "EF SET",
    date: "Not specified",
    description: "B2 Upper-Intermediate English proficiency certified by EF Standard English Test (EF SET).",
  }
]

export function EducationSection() {
  const { setActiveTab } = useActiveTab()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const certificateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onViewportEnter={(): void => setActiveTab("education")}

          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-8">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass p-6 rounded-lg border border-border hover-lift"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <div className="mt-2 text-primary font-medium">
                    {edu.institution}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="mt-4">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {certificatesData.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  custom={i}
                  variants={certificateVariants}
                  className="glass p-6 rounded-lg border border-border hover-lift"
                >
                  <h4 className="text-lg font-semibold">{cert.name}</h4>
                  <div className="mt-1 flex justify-between items-center">
                    <span className="text-primary font-medium">{cert.issuer}</span>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <p className="mt-3 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20"
            >
              <p className="text-sm">
                <span className="font-semibold">Note:</span> Continuously pursuing new certifications and learning opportunities to stay updated with the latest technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
