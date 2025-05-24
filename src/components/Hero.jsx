import { motion } from 'framer-motion';
import CustomButton from './shared/CustomButton';
import RoleLoop from './RoleLoop';
import ThemeToggle from './shared/ThemeToggle';
import { staggerContainer, fadeInUp } from './shared/animations';

const TechStackItem = ({ tech, index }) => (
  <motion.span
    key={tech}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    {tech}
  </motion.span>
);

export default function Hero() {
  const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'];

  return (
    <section className="min-h-screen flex flex-col items-start justify-center relative overflow-hidden w-full transition-colors duration-300 bg-white dark:bg-black">
      <ThemeToggle />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-left flex flex-col p-6 sm:p-8 md:p-16 lg:p-24 relative z-20 w-full"
      >
        <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <motion.span 
              className="text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Rishab Suresh
            </motion.span>
          </h1>
          
          <div className="h-10 sm:h-12 pb-8 sm:pb-12 text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white">
            <RoleLoop />
          </div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Crafting beautiful, performant, and user-friendly web experiences with modern front-end technologies.
            Specializing in Next.js, TypeScript, and React.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="pt-8 sm:pt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <CustomButton 
            href="#projects" 
            size="large"
            className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
          >
            View My Work
          </CustomButton>
          <CustomButton 
            variant="outlined" 
            href="#contact" 
            size="large"
            className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
          >
            Let's Connect
          </CustomButton>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12"
        >
          {techStack.map((tech, index) => (
            <TechStackItem key={tech} tech={tech} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}