import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import finImage from '../assets/fin.jpg';
import finHoverImage from '../assets/fin2.jpg';
import CustomButton from './CustomButton';

const containerVariants = {
  hidden: { 
    x: "-100vw",
    opacity: 0
  },
  visible: { 
    x: "calc(100vw - 12rem)",
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.4, 0, 0.2, 1],
      opacity: { duration: 0.3 }
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export default function Fin() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;
      
      const contactRect = contactSection.getBoundingClientRect();
      setIsVisible(contactRect.bottom <= window.innerHeight + 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>

      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <CustomButton
              href="mailto:rishabsuresh2003@gmail.com"
              variant="contained"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
            >
              Get in Touch
            </CustomButton>
            <CustomButton
              href="https://drive.google.com/file/d/1-2YQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ/view?usp=sharing"
              variant="outlined"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
            >
              View Resume
            </CustomButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-slate-50 to-transparent dark:from-gray-900"
      />
    </section>
  );
} 