
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useActiveTab } from "@/context/ActiveTabContext";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    name: "UI Libraries",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "ShadCN UI", level: 80 },
      { name: "Material UI", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Framer Motion", level: 80 },

    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "SQL", level: 50 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Vite", level: 80 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

function SkillBar({ name, level, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium">{level}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          onViewportEnter={(): void => setActiveTab("skills")}

        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My toolkit of technologies and expertise in web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillData.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="glass p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.name}
              </h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 glass rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Key Abilities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Responsive Design",
                "Performance Optimization",
                "Accessibility",
                "Cross-Browser Compatibility",
                "SEO Best Practices",
                "API Integration",
                "CI/CD",
                "Problem Solving",
                "Technical Documentation",
                "Team Collaboration"
              ].map((ability) => (
                <span
                  key={ability}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
