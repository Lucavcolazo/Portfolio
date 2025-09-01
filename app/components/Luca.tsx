'use client'

import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'

export default function Luca() {
  return (
    <div className="section" data-anchor="home">
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-8 px-4">
          {/* Nombre principal */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Luca Colazo
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Estudiante y geek de la tecnología
          </motion.p>
        </div>

        {/* Flecha hacia abajo animada */}
        <motion.div
          className="absolute bottom-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <ScrollArrow />
        </motion.div>
      </div>
    </div>
  )
}
