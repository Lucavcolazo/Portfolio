'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className="section" data-anchor="projects">
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-12">
          {/* Título principal */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Mis Proyectos
          </motion.h2>

          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Aquí encontrarás una selección de mis proyectos más destacados, 
              donde he aplicado las últimas tecnologías web para crear experiencias 
              digitales únicas e innovadoras.
            </p>
          </motion.div>

          {/* Grid de proyectos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {/* Proyecto 1 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Portfolio Web</h3>
              <p className="text-gray-300 mb-6">
                Portfolio personal construido con Next.js, Tailwind CSS y animaciones fluidas.
              </p>
              <a
                href="https://github.com/tu-usuario/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Ver en GitHub
              </a>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">App Web</h3>
              <p className="text-gray-300 mb-6">
                Aplicación web full-stack con React, Node.js y base de datos.
              </p>
              <a
                href="https://github.com/tu-usuario/app-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Ver en GitHub
              </a>
            </motion.div>

            {/* Proyecto 3 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Juego Web</h3>
              <p className="text-gray-300 mb-6">
                Juego interactivo desarrollado con Canvas API y JavaScript moderno.
              </p>
              <a
                href="https://github.com/tu-usuario/juego-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Ver en GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Botón principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-lg rounded-full hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Ver Todos los Proyectos en GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

