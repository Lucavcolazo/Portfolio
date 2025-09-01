'use client'

import { motion } from 'framer-motion'

interface ScrollArrowProps {
  onClick?: () => void
  className?: string
}

export default function ScrollArrow({ onClick, className = "" }: ScrollArrowProps) {
  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Línea vertical */}
      <motion.div
        className="w-0.5 h-8 bg-white mb-2"
        animate={{
          height: [32, 40, 32]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Flecha hacia abajo */}
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
        animate={{
          y: [0, 4, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path d="m6 9 6 6 6-6"/>
      </motion.svg>
    </motion.div>
  )
}
