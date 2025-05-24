import { motion } from 'framer-motion';
import CustomButton from './shared/CustomButton';
import RoleLoop from './RoleLoop';
import { useTheme } from '../context/ThemeContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'];

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={toggleTheme}
    className="fixed top-4 right-4 z-30 p-2 sm:p-3 rounded-full bg-opacity-20 backdrop-blur-sm transition-colors duration-300"
    style={{ backgroundColor: theme.colors.primary + '20' }}
  >
    {theme.name === 'dark' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke={theme.colors.text}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke={theme.colors.text}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )}
  </motion.button>
);

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
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={`min-h-screen flex flex-col items-start justify-center relative overflow-hidden w-full transition-colors duration-300 ${theme.name === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-left flex flex-col p-6 sm:p-8 md:p-16 lg:p-24 relative z-20 w-full"
      >
        <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${theme.name === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Hi, I'm{" "}
            <motion.span 
              style={{ color: theme.colors.primary }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Rishab Suresh
            </motion.span>
          </h1>
          
          <div className={`h-10 sm:h-12 pb-8 sm:pb-12 text-xl sm:text-2xl md:text-3xl transition-colors duration-300 ${theme.name === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <RoleLoop />
          </div>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Crafting beautiful, performant, and user-friendly web experiences with modern front-end technologies.
            Specializing in Next.js, TypeScript, and React.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
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
          variants={itemVariants}
          className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-4 items-center"
        >
          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Tech Stack:</span>
          {techStack.map((tech, index) => (
            <TechStackItem key={tech} tech={tech} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}