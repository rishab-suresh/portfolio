import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './shared/animations';

const PROJECTS = [
  {
    featured: true,
    type: 'Featured · Game',
    title: 'Zombie Survivor',
    description:
      'Browser survival game — scarce ammo, brutal nights, key objectives, flashlight battery, melee, auto-aim. Built for feel: camera capture, WASD relative to facing, wave pressure.',
    tech: ['JavaScript', 'Three.js', 'Game loop', 'WebGL'],
    link: 'https://zombie-game-ebon.vercel.app',
  },
  {
    type: '3D / R3F',
    title: 'R3F Landing + Shaders',
    description: 'A React Three Fiber landing with shader-driven surfaces and orbital camera work.',
    tech: ['React', 'R3F', 'Shaders', 'drei'],
    link: 'https://landing-page-r3f.vercel.app',
  },
  {
    type: '3D / R3F',
    title: '4D Tesseract',
    description: 'A tesseract projection experiment — a 4D form rotating in the browser.',
    tech: ['React', 'Three.js', 'R3F'],
    link: 'https://4-d-tesseract.vercel.app',
  },
  {
    type: '3D / R3F',
    title: 'Transform Controls + Valtio',
    description: 'Transform gizmos on a Three.js scene, with Valtio holding the object state.',
    tech: ['Three.js', 'R3F', 'Valtio'],
    link: 'https://3js-transform-controls.vercel.app',
  },
  {
    type: '3D / R3F',
    title: 'Open World Sandbox',
    description: 'A browser sandbox for moving through a simple open scene.',
    tech: ['React', 'R3F', 'Three.js'],
    link: 'https://openworld-sanbox.vercel.app',
  },
  {
    type: 'Freelance · Aug–Oct 2023',
    title: 'DirtCube Landing',
    description:
      'Animated landing for DirtCube, built in Next.js with Framer Motion and a focus on how the page feels on first load.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://www.specterapp.xyz/',
  },
  {
    type: 'Project',
    title: 'Spotify Vinyl Player',
    description: 'Spotify auth with PKCE and realtime playback, wrapped in a skeuomorphic vinyl UI.',
    tech: ['TypeScript', 'React', 'Spotify API'],
    link: 'https://vinyl-spotify.vercel.app/',
  },
  {
    type: 'Company',
    title: 'Employee Management System',
    description: 'Admin view for employee status, with Firebase auth and realtime updates.',
    tech: ['React', 'Firebase', 'Redux'],
    link: 'https://rmc-dashboard.vercel.app/',
  },
];

function ProjectRow({ project }) {
  return (
    <motion.a
      variants={itemVariants}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid items-start gap-4 border-b py-8 hairline transition-colors duration-200 md:grid-cols-[11rem_1fr_auto] md:gap-10 md:py-10 ${
        project.featured ? 'border-l-2 px-5 py-10 md:px-8 md:py-14' : ''
      }`}
      style={
        project.featured
          ? { borderLeftColor: 'var(--accent)', background: 'var(--bg-elevated)', borderBottomColor: 'var(--line)' }
          : undefined
      }
    >
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${project.featured ? 'md:pt-1' : ''}`}
        style={{ color: project.featured ? 'var(--accent)' : 'var(--fg-muted)' }}
      >
        {project.type}
      </p>

      <div>
        <h3
          className={`font-display font-bold tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)] ${
            project.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-3 max-w-2xl leading-relaxed ${project.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}
          style={{ color: 'var(--fg-muted)' }}
        >
          {project.description}
        </p>
        <p className="mt-4 font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>
          {project.tech.join(' · ')}
        </p>
      </div>

      <span
        className="font-mono text-sm tracking-wide transition-colors duration-200 group-hover:text-[var(--accent)] md:pt-2"
        style={{ color: 'var(--fg)' }}
      >
        Open ↗
      </span>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={itemVariants} className="section-label">
            Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            Games, WebGL experiments, and product UI — ranked by things I actually want you to click.
          </motion.p>

          <div className="mt-12 border-t hairline">
            {PROJECTS.map((project) => (
              <ProjectRow key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
