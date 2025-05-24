import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const skills = [
  { name: 'Next.js', color: 'from-black to-gray-800', learning: false },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800', learning: false },
  { name: 'React', color: 'from-cyan-500 to-blue-600', learning: false },
  { name: 'Golang', color: 'from-blue-400 to-indigo-600', learning: true },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-700', learning: false },
  { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500', learning: false },
  { name: 'Three.js', color: 'from-purple-500 to-indigo-600', learning: true },
  { name: 'Framer Motion', color: 'from-pink-500 to-purple-600', learning: false }
];

const personalInfo = [
  {
    icon: '🎹',
    title: 'Creative Pursuits',
    description: 'Piano enthusiast, football player, and an Avid Pokemon Fan (Gen 4 and below). Finding balance between technical precision and creative expression.',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    textColor: 'text-blue-500 dark:text-blue-400'
  },
  {
    icon: '🎮',
    title: 'Tech Exploration',
    description: 'Currently diving into Three.js, creating immersive 3D web experiences that push the boundaries of modern web development. I have done backend development in the past but I am looking to expand my skills and knowledge in the field.',
    gradient: 'from-purple-500/10 to-indigo-500/10',
    textColor: 'text-purple-500 dark:text-purple-400'
  },
  {
    icon: '🌍',
    title: 'Global Perspective',
    description: 'Proficient in German, learning French (A1 on Duolingo though I can speak it much better in my opinion). Growing up abroad has shaped my ability to connect and fit in with different cultures and environments.',
    gradient: 'from-green-500/10 to-emerald-500/10',
    textColor: 'text-green-500 dark:text-green-400'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'My diverse perspectives has made me very culturally aware and I tend to be very open to new ideas and cultures making me a great team player.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    textColor: 'text-amber-500 dark:text-amber-400'
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 relative overflow-hidden">
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
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Main Info Card - Spans 7 columns */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-4 sm:space-y-6"
            >
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    RS
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">Front-End Specialist</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Crafting Digital Experiences</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  I'm a passionate Front-End Developer with a strong focus on creating elegant, performant, and user-friendly web applications.
                  With expertise in Next.js, TypeScript, and React, I specialize in building modern, responsive interfaces that deliver exceptional user experiences.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 sm:mb-6">Technical Stack</h3>
                <div className="relative">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="relative">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="group relative"
                        >
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          <div className="relative bg-white dark:bg-slate-800 rounded-lg p-2 sm:p-3 text-center border border-slate-200 dark:border-slate-700">
                            <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            {skill.learning && (
                              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-[8px] sm:text-[10px] text-white">L</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* Currently Learning Text */}
                  <div className="mt-6 sm:mt-8 text-center">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">Currently Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Info Card - Spans 5 columns */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 sm:mb-6">Beyond the Code</h3>
                <div className="space-y-4 sm:space-y-6">
                  {personalInfo.map((info) => (
                    <div key={info.title} className="flex gap-3 sm:gap-4 items-start group">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center ${info.textColor} text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium mb-0.5 sm:mb-1">{info.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 