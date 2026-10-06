import { useState, useEffect } from 'react';

const ROLES = ['SE2 @ Zensible', 'React + TypeScript', 'Three.js / R3F'];

const TIMING = {
  TYPE_SPEED: 70,
  DELETE_SPEED: 36,
  PAUSE_FULL: 1800,
  PAUSE_EMPTY: 400,
};

export default function RoleLoop() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[loopNum % ROLES.length];
    const speed = isDeleting ? TIMING.DELETE_SPEED : TIMING.TYPE_SPEED;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), TIMING.PAUSE_FULL);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        return;
      }

      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );
    }, text === '' && !isDeleting ? TIMING.PAUSE_EMPTY : speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div>
      <p className="sr-only">{ROLES.join('. ')}</p>
      <p className="font-mono text-sm sm:text-base md:text-lg" style={{ color: 'var(--fg)' }} aria-hidden="true">
      <span>{text}</span>
      <span
        className="ml-1 inline-block h-[1em] w-[2px] align-[-0.1em] animate-pulse"
        style={{ background: 'var(--accent)' }}
      />
      </p>
    </div>
  );
}
