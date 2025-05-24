import { motion, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CustomButton from './shared/CustomButton';

const PROJECTS = [
  {
    title: "DirtCube Landing Page",
    description: "Created a modern, animated landing page for DirtCube's latest project using Next.js, implementing complex animations with Framer Motion and Lottie. Built with a focus on performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lottie"],
    period: "Aug 2023 - Oct 2023",
    type: "Freelance",
    link: "https://www.specterapp.xyz/"
  },
  {
    title: "Tesla Cone Website",
    description: "Made this because I was bored and wanted to see if I still had the dog in me. I used React, Next.js, and Tailwind CSS to create this website.",
    technologies: ["TypeScript", "React", "Tailwind", "Mobile Responsiveness", "CSS"],
    link: "https://tesla-clone-iota-seven.vercel.app/"
  },
  {
    title: "Employee Management System",
    description: "Built a comprehensive management system for administrators to monitor employee status. Integrated Firebase authentication and real-time database updates with Redux state management. Also There is so much lore behind this this looks very basic but it is a funny story",
    technologies: ["React", "Firebase", "Redux", "Material-UI"],
    type: "Company Project",
    link: "https://rmc-dashboard.vercel.app/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={itemVariants}
    custom={index}
    className="flex-none w-[280px] sm:w-[320px] md:w-[360px] bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
  >
    <div className="p-4 sm:p-6">
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1 sm:mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {project.period}
            </span>
            <span className="text-xs sm:text-sm px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
              {project.type}
            </span>
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 sm:mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const useCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const items = container.getElementsByClassName('project-card');
      if (items.length === 0) return;

      const firstItemWidth = items[0].offsetWidth;
      const gap = 32; // 8rem = 32px
      setItemWidth(firstItemWidth + gap);

      const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + gap, 0);
      setContainerWidth(totalWidth / 2); // Divide by 2 because we have duplicate items
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    setIsInitialized(true);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!isInitialized || !containerWidth) return;

    const animation = animate(x, -containerWidth, {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      onUpdate: (latest) => {
        if (latest <= -containerWidth) {
          x.set(0);
        }
      }
    });

    if (isHovered) {
      animation.pause();
    } else {
      animation.play();
    }

    return () => animation.stop();
  }, [x, containerWidth, isHovered, isInitialized]);

  return {
    containerRef,
    isHovered,
    setIsHovered,
    x
  };
};

export default function Projects() {
  const { containerRef, scrollX, handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } = useCarousel();

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>

      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 inline-block">
              Projects
            </h2>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'grab' }}
          >
            <motion.div
              className="flex gap-4 sm:gap-6 pb-4 sm:pb-6"
              style={{ x: scrollX }}
            >
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{
                  width: '30%',
                  x: useTransform(
                    scrollX,
                    [-containerRef.current?.scrollWidth || 0, 0],
                    [0, (containerRef.current?.scrollWidth || 0) * 0.7]
                  ),
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 