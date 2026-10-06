import { motion } from 'framer-motion';
import RoleLoop from './RoleLoop';
import ThemeToggle from './shared/ThemeToggle';
import { staggerContainer, fadeInUp } from './shared/animations';

const TECH = ['React', 'TypeScript', 'Three.js', 'R3F', 'Next.js'];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <ThemeToggle />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 !pb-16 !pt-28 md:!pb-24"
      >
        <motion.p variants={fadeInUp} className="section-label">
          Bengaluru · Frontend
        </motion.p>
        <div className="accent-rule mt-5" aria-hidden="true" />

        <motion.h1
          variants={fadeInUp}
          className="mt-8 font-display font-extrabold tracking-tight"
          style={{
            fontSize: 'clamp(4.25rem, 14vw, 9.5rem)',
            lineHeight: 0.84,
            color: 'var(--fg)',
          }}
        >
          Rishab
          <br />
          <span style={{ color: 'var(--accent)' }}>Suresh</span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="mt-8 min-h-[1.75rem]">
          <RoleLoop />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: 'var(--fg-muted)' }}
        >
          Production React by day. Three.js / R3F and game-feel experiments by night. Obsessed with how interfaces look, move, and hold up under load.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn">
            View work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Let&apos;s talk
          </a>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-10 font-mono text-xs tracking-wide sm:text-sm"
          style={{ color: 'var(--fg-muted)' }}
        >
          {TECH.join(' · ')}
        </motion.p>
      </motion.div>
    </section>
  );
}
