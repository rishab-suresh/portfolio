// src/components/Fin.jsx (Ultra-Simple Test Version)

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import finImageDefault from '../assets/fin.jpg';
import finImageHover from '../assets/fin2.jpg';

export default function Fin() {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactSectionInView, setIsContactSectionInView] = useState(false);
  const contactSectionObserverTargetRef = useRef(null);

  useEffect(() => {
    const targetElement = document.getElementById('contact'); 

    if (!targetElement) {
      console.warn("Fin.jsx: Target element with id 'contact' not found for IntersectionObserver.");
      return;
    }
    contactSectionObserverTargetRef.current = targetElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactSectionInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(targetElement);

    return () => {
      if (contactSectionObserverTargetRef.current) {
        observer.unobserve(contactSectionObserverTargetRef.current);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isContactSectionInView && (
        <motion.div
          key="fin-animated-button-intersect"
          className="fixed bottom-10 right-10 z-50 flex items-center pointer-events-auto"
          initial={{ x: "-250%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-250%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleScrollToTop}
        >
          <motion.div
            className="mr-4 pointer-events-none"
            key={isHovered ? 'backToTopTextFinIntersect' : 'finTextFinIntersect'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            <span className="text-lg font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
              {isHovered ? "Back to Top" : "Fin"}
            </span>
          </motion.div>

          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-white dark:border-slate-700 shadow-xl cursor-pointer"
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={isHovered ? 'hoverImageFinIntersect' : 'defaultImageFinIntersect'}
                src={isHovered ? finImageHover : finImageDefault}
                alt={isHovered ? "Scroll to top" : "Fin indicator"}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 