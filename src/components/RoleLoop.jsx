import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROLES = ["SDE", "Front End Developer"];

const TIMING = {
  TYPE_SPEED: 100,    // ms per letter
  DELETE_SPEED: 50,   // ms per letter
  PAUSE_FULL: 2000,   // ms to pause at full text
  PAUSE_EMPTY: 500,   // ms to pause at empty
  INITIAL_DELAY: 1000 // ms before starting
};

export default function RoleLoop() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TIMING.TYPE_SPEED);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[loopNum % ROLES.length];
      const shouldDelete = isDeleting;
      
      setText(shouldDelete
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1)
      );

      setTypingSpeed(shouldDelete ? TIMING.DELETE_SPEED : TIMING.TYPE_SPEED);

      if (!shouldDelete && text === currentRole) {
        setTimeout(() => setIsDeleting(true), TIMING.PAUSE_FULL);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTimeout(() => {}, TIMING.PAUSE_EMPTY);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative h-8 sm:h-10 md:h-12 flex items-center justify-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: TIMING.INITIAL_DELAY }}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-slate-200"
      >
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 sm:w-1 h-4 sm:h-6 md:h-8 bg-blue-500 ml-1 sm:ml-2"
        />
      </motion.span>
    </div>
  );
} 