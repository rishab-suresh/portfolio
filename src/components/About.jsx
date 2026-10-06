import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './shared/animations';

const NOTES = [
  {
    index: '01',
    title: 'Craft over chrome',
    body: 'Typography, motion, hierarchy first. If a border or card isn’t doing a job, it goes.',
  },
  {
    index: '02',
    title: '3D with intent',
    body: 'Shaders, orbitals, transform controls, particles, games — WebGL you can use, not just admire.',
  },
  {
    index: '03',
    title: 'Ship under constraints',
    body: 'Production React at Zensible: architecture, modularization, bundle discipline, UI that survives real users.',
  },
];

const STACK = [
  'React',
  'TypeScript',
  'Three.js / R3F',
  'Next.js',
  'Tailwind',
  'Angular',
  'Framer Motion',
  'Golang',
];

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={itemVariants} className="section-label">
            About
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            How I build
          </motion.h2>
          <div className="accent-rule mt-6" aria-hidden="true" />

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug md:text-3xl"
            style={{ color: 'var(--fg)' }}
          >
            Software Engineer 2 at Zensible — frontend that has to look sharp and stay fast.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            About 3.5 years in React and TypeScript. Day job is product UI, design systems, and performance. Side work is Three.js / R3F and interactive scenes, including a full zombie survival game in the browser.
          </motion.p>

          <ol className="mt-14 border-t hairline">
            {NOTES.map((note) => (
              <motion.li
                key={note.index}
                variants={itemVariants}
                className="grid gap-3 border-b py-8 hairline md:grid-cols-[5rem_14rem_1fr] md:gap-8 md:py-10"
              >
                <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
                  {note.index}
                </span>
                <h3 className="font-display text-xl font-bold md:text-2xl">{note.title}</h3>
                <p className="max-w-xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  {note.body}
                </p>
              </motion.li>
            ))}
          </ol>

          <motion.ul variants={itemVariants} className="mt-10 flex flex-wrap gap-2">
            {STACK.map((item) => (
              <li
                key={item}
                className="border px-3 py-1.5 font-mono text-xs"
                style={{ borderColor: 'var(--line)', color: 'var(--fg-muted)' }}
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="mt-12 max-w-xl border-t pt-8 text-sm leading-relaxed hairline"
            style={{ color: 'var(--fg-muted)' }}
          >
            Piano, football, Pokémon (Gen 4 and below). German speaker, French in progress. Grew up abroad.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
