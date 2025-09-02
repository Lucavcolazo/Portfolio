'use client'

import { ReactNode, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface FullPageWrapperProps {
  children: ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detectar scroll y actualizar sección actual
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return
      
      const sections = container.querySelectorAll('.section')
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      
      // Detectar sección actual
      let activeSection = 0
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollTop
        const sectionBottom = sectionTop + rect.height
        
        if (scrollTop + windowHeight / 2 >= sectionTop && 
            scrollTop + windowHeight / 2 < sectionBottom) {
          activeSection = index
        }
      })
      
      // Si cambió la sección, actualizar estado
      if (activeSection !== currentSection) {
        setCurrentSection(activeSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al inicio
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection])

  return (
    <>
      {/* Fondo de partículas animado */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Partículas flotantes */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Efectos de luz según la sección */}
        <motion.div 
          className="absolute inset-0 transition-all duration-1000"
          animate={{
            background: 
              currentSection === 0 ? 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)' : // Home - Azul sutil
              currentSection === 1 ? 'radial-gradient(circle at 70% 40%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)' : // Tecnologías - Cyan
              currentSection === 2 ? 'radial-gradient(circle at 50% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)' : // Proyectos - Púrpura
              currentSection === 3 ? 'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)' : // Contacto - Verde
              'transparent'
          }}
        />
      </div>
      
      {/* Contenedor principal con scroll-snap */}
      <div 
        ref={containerRef}
        className="fullpage-wrapper"
      >
        {children}
      </div>
    </>
  )
}
