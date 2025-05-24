import { motion } from 'framer-motion';
import CustomButton from './shared/CustomButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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

const CONTACT_INFO = {
  email: {
    icon: 'email',
    label: 'Email',
    value: 'sureshrishab6@gmail.com',
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sureshrishab6@gmail.com&su=Let's Connect&body=Hi Rishab,"
  }
};

const SOCIAL_LINKS = [
  {
    icon: <EmailIcon />,
    label: 'Send me an email',
    href: CONTACT_INFO.email.href,
    className: 'justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white'
  },
  {
    icon: <LinkedInIcon />,
    label: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/rishab-suresh-a3a632191/',
    variant: 'outlined',
    className: 'justify-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20'
  },
  {
    icon: <GitHubIcon />,
    label: 'Check my GitHub',
    href: 'https://github.com/rishab-suresh',
    variant: 'outlined',
    className: 'justify-center gap-2 border-gray-500 text-gray-600 hover:bg-gray-50 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-900/20'
  }
];

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-3 sm:gap-4 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{label}</p>
      {href ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm sm:text-base text-gray-800 dark:text-white">
          {value}
        </p>
      )}
    </div>
  </div>
);

const SocialButton = ({ icon, label, href, variant, className, size }) => (
  <CustomButton
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variant={variant}
    className={`${className} w-full sm:w-auto px-4 sm:px-6`}
    startIcon={
      <span className="flex items-center text-lg sm:text-xl">
        {icon}
      </span>
    }
    size={size}
  >
    <span className="text-sm sm:text-base">{label}</span>
  </CustomButton>
);

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>

      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 inline-block">
              Get In Touch
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-green-100 dark:border-green-900 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                    Let's Connect
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    I'm currently open to new opportunities and collaborations.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactInfoItem 
                    icon={<EmailIcon />}
                    label={CONTACT_INFO.email.label}
                    value={CONTACT_INFO.email.value}
                  />
                </div>
              </div>

              {/* Right Column - Social Links */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Connect with me
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialButton 
                      key={link.label} 
                      {...link} 
                      size="medium"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 