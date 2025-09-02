'use client'

import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
// status: 'completed', 'in-progress', 'not-started' depende del status del proyecto es el color de la card
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Books and Reviews',
      description: 'Pagina simple para poder usar la API de Google Books y poder buscar libros y hacer reviews de ellos',
      technologies: ['React', 'Tailwind', 'TypeScript', 'Next.js'],
      backgroundColor: '#000000',
      repoUrl: 'https://github.com/Lucavcolazo/BooksandReviews',
      status: 'completed'
    },
    {
      id: 2,
      title: 'FearFinder',
      description: 'Pagina para buscar peliculas cuando no sabes que ver',
      technologies: ['Python'],
      backgroundColor: '#000000',
      repoUrl: 'https://github.com/Lucavcolazo/FearFinder',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Reconocimiento Facial',
      description: 'App para reconocer las emociones de una persona mediante una webcam',
      technologies: ['Python'],
      backgroundColor: '#000000',
      repoUrl: 'https://github.com/Lucavcolazo/Reconocimiento-Facial',
      status: 'in-progress'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-500/20'
      case 'in-progress':
        return 'border-yellow-500 bg-yellow-500/20'
      case 'not-started':
        return 'border-red-500 bg-red-500/20'
      default:
        return 'border-gray-500 bg-gray-500/20'
    }
  }


  const getHoverClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'hover-completed'
      case 'in-progress':
        return 'hover-in-progress'
      case 'not-started':
        return 'hover-not-started'
      default:
        return ''
    }
  }

  return (
    <div className="section" data-anchor="projects">
      <div className="min-h-screen flex flex-col relative z-10 px-4">
        
        {/* Título centrado arriba con divs - Mismo estilo que tecnologías */}
        <div className="flex justify-center items-center pt-40 pb-20">
          <div className="text-center">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Mis Proyectos
            </motion.h2>
          </div>
        </div>

        {/* Contenido principal - 3 cards de proyectos */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`project-card-simple ${getHoverClass(project.status)}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + index * 0.1, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Título del proyecto */}
                  <div className="project-title">
                    <h3 className="text-2xl font-bold text-white text-center">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tecnologías utilizadas - Recuadros negros */}
                  <div className="technologies-section mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-black text-white text-xs rounded-md border border-gray-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Descripción del proyecto */}
                  <div className="project-description">
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {project.description}
                    </p>
                  </div>

                  {/* Botón de repositorio - Cada tarjeta tiene su propio botón */}
                  <div className="project-button">
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-transparent border border-white text-white py-3 px-6 rounded-lg font-medium block text-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Repositorio
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* Flecha hacia abajo */}
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

