'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      iconClass: 'devicon-linkedin-plain',
      url: 'https://www.linkedin.com/in/luca-valentino-colazo-21782637a/', 
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      iconClass: 'devicon-github-plain',
      url: 'https://github.com/Lucavcolazo',
      color: 'hover:text-gray-300'
    }
  ]

  // Función para ir arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="section" data-anchor="contact">
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        
        {/* Título principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Contáctame
          </motion.h2>
          <br />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ¿Te gustó algo? Conectemos
          </motion.p>
        </motion.div>
        <br />


        {/* Iconos de redes sociales */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="cursor-pointer group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 1.2 + index * 0.2, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                                 <i 
                   className={`${social.iconClass} filter drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) text-white`}
                   style={{ 
                     fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                     width: 'clamp(2.5rem, 5vw, 4rem)',
                     height: 'clamp(2.5rem, 5vw, 4rem)',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}
                 />
                <div className="text-center mt-3">
                  <span className="text-base font-medium text-white transition-colors duration-300 group-hover:text-blue-300">
                    {social.name}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>        
      </div>
    </div>
  )
}
