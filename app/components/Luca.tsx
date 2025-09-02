'use client'

import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'

export default function Luca() {
  return (
    <div className="section" data-anchor="home">
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        {/* Contenido principal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Luca Colazo
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Estudiante y geek de la tecnología
          </motion.p>
        </motion.div>

        {/* Flecha hacia abajo */}
        <motion.div
          className="absolute bottom-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <ScrollArrow />
        </motion.div>
      </div>
    </div>
  )
}
