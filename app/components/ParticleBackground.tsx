'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Configurar dimensiones iniciales
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Crear partículas iniciales
    const createParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = Math.floor((dimensions.width * dimensions.height) / 20000) // Ajustar densidad según pantalla

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 3 + 1, // Tamaño entre 1-4px
          speedX: (Math.random() - 0.5) * 0.5, // Velocidad horizontal
          speedY: (Math.random() - 0.5) * 0.5, // Velocidad vertical
          opacity: Math.random() * 0.6 + 0.2 // Opacidad entre 0.2-0.8
        })
      }
      setParticles(newParticles)
    }

    // Animar partículas
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Rebotar en los bordes
          if (newX <= 0 || newX >= dimensions.width) {
            particle.speedX = -particle.speedX
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.speedY = -particle.speedY
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY
          }
        })
      )
    }

    // Crear partículas cuando cambien las dimensiones
    if (dimensions.width > 0 && dimensions.height > 0) {
      createParticles()
    }

    // Iniciar animación
    const animationId = setInterval(animateParticles, 50) // 20 FPS

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearInterval(animationId)
    }
  }, [dimensions.width, dimensions.height])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity * 0.8})`
          }}
        />
      ))}
    </div>
  )
}
