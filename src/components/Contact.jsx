import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './shared/animations';

const LINKS = [
  {
    label: 'Email',
    value: 'sureshrishab6@gmail.com',
    href: 'mailto:sureshrishab6@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rishab-suresh',
    href: 'https://linkedin.com/in/rishab-suresh-a3a632191/',
  },
  {
    label: 'GitHub',
    value: 'github.com/rishab-suresh',
    href: 'https://github.com/rishab-suresh',
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="section-label">
            Contact
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            Let&apos;s talk
          </motion.h2>
          <div className="accent-rule mt-6" aria-hidden="true" />
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            Open to roles and collabs where frontend craft and interactive 3D matter.
          </motion.p>

          <div className="mt-12">
            {LINKS.map((link) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group grid gap-1 border-t py-6 hairline transition-colors duration-200 last:border-b sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: 'var(--fg-muted)' }}>
                  {link.label}
                </span>
                <span className="text-lg transition-colors duration-200 group-hover:text-[var(--accent)] md:text-xl">
                  {link.value}
                </span>
                <span className="font-mono text-sm" style={{ color: 'var(--accent)' }} aria-hidden="true">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
