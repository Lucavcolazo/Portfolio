'use client'

import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
import { useState } from 'react'

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  
  const technologies = [
    { name: 'Next.js', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'React', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TypeScript', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'CSS3', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'HTML5', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'Python', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'MongoDB', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Figma', logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ]

  return (
    <div className="section" data-anchor="technologies">
      <div className="min-h-screen flex flex-col relative z-10 px-4">
        
        {/* Título centrado arriba con divs - Más padding desde el techo */}
        <div className="flex justify-center items-center pt-40 pb-20">
          <div className="text-center">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Tecnologías
            </motion.h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center">
            
            {/* Lado izquierdo - Rectángulo más grande con logos */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Rectángulo más grande para que entren mejor los logos */}
              <div className="tech-container w-full h-100 lg:h-90 rounded-xl relative overflow-hidden">
                {/* Logos distribuidos en el rectángulo con MÁS ESPACIADO */}
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`absolute transition-all duration-300 ${
                      hoveredTech === tech.name 
                        ? 'scale-125 filter drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)) z-20' 
                        : ''
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.3 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    style={{
                      '--delay': index * 0.2,
                      left: `${12 + (index % 4) * 20}%`,
                      top: `${18 + Math.floor(index / 4) * 26}%`,
                    } as React.CSSProperties}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img 
                      src={tech.logoPath} 
                      alt={tech.name} 
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Lado derecho - 6 tecnologías en cada columna */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Lista de tecnologías en dos columnas de 6 */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {/* Columna izquierda - Primeras 6 */}
                <div className="space-y-4">
                  {technologies.slice(0, 6).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-list-item cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.05, 
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="text-xl md:text-2xl text-white font-medium transition-colors duration-300 hover:text-blue-300">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Columna derecha - Últimas 6 */}
                <div className="space-y-4">
                  {technologies.slice(6, 12).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-list-item cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.05, 
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="text-xl md:text-2xl text-white font-medium transition-colors duration-300 hover:text-blue-300">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Flecha hacia abajo - Solo ella se mueve */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <ScrollArrow />
        </motion.div>
      </div>
    </div>
  )
}
