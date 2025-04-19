
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUser, FiCode, FiCoffee } from 'react-icons/fi';
import { useActiveTab } from '@/context/ActiveTabContext';

const About = () => {
  const { setActiveTab } = useActiveTab()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about me" className="section-container">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onViewportEnter={(): void => setActiveTab("about me")}

        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          About
          <span className="text-gradient"> Me</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my background, skills, and passion for crafting digital experiences.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="md:col-span-5"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <img
              // src="https://res.cloudinary.com/dc5eb9lmi/image/upload/v1739288593/hossam-ahmed-portfolio-v2/Formal_qudh0g.jpg"
              // src="https://res.cloudinary.com/dc5eb9lmi/image/upload/v1739288597/hossam-ahmed-portfolio-v2/hossam_fknfic.png"
              src="https://res.cloudinary.com/dc5eb9lmi/image/upload/v1744883099/hossam-ahmed-portfolio-v2/Formal-removebg_voe7lb.png"
              alt="Developer Portrait"
              className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-7"
        >
          <h1 className="text-5xl font-bold mb-4">Hossam <span className='text-gradient'>Ahmed</span> </h1>
          <h3 className="text-3xl font-bold mb-4">Enthusiast Front-end Developer &amp; UI/UX </h3>

          <p className="text-muted-foreground mb-6">
            I'm a passionate developer with 2 years of experience in creating responsive,
            user-friendly web applications. Specializing in modern JavaScript frameworks
            and with a keen eye for design, I build solutions that are both beautiful and functional.
          </p>

          <p className="text-muted-foreground mb-6">
            My approach combines technical expertise with creative problem-solving,
            ensuring that the applications I build not only meet but exceed expectations.
            I'm constantly exploring new technologies to stay at the forefront of web development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                <FiCode size={24} />
              </div>
              <h4 className="font-medium">+1.5 Years</h4>
              <p className="text-sm text-muted-foreground text-center">Coding Experience</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                <FiCoffee size={24} />
              </div>
              <h4 className="font-medium">30+ Projects</h4>
              <p className="text-sm text-muted-foreground text-center">Completed</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                <FiUser size={24} />
              </div>
              <h4 className="font-medium">15+ Clients</h4>
              <p className="text-sm text-muted-foreground text-center">Worldwide</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
