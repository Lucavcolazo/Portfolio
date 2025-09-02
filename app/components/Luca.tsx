'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollArrow from './ScrollArrow'

export default function Luca() {
  const [showConsole, setShowConsole] = useState(false)
  const [consoleInput, setConsoleInput] = useState('')
  const [consoleOutput, setConsoleOutput] = useState<string[]>([])
  const [cheatCode, setCheatCode] = useState<string[]>([])
  const [showCheatHint, setShowCheatHint] = useState(false)

  // Secuencia del cheat code ↑↑↓↓←→
  const secretCheatCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

  // Comandos disponibles
  const commands = {
    help: () => [
      'Comandos disponibles:',
      '  help - Muestra esta ayuda',
      '  whoami - Muestra información sobre mí',
      '  contact - Muestra formas de contactarme',
      '  projects - Lista mis proyectos',
      '  skills - Muestra mis habilidades técnicas',
      '  clear - Limpia la consola',
      '  exit - Cierra la consola'
    ],
    whoami: () => [
      'Soy Luca o Colo',
      'Estudiante apasionado por la tecnología',
      'Desarrollador web',
      'Un poco geek'
    ],
    contact: () => [
      'Formas de contactarme:',
      '  GitHub: https://github.com/Lucavcolazo',
      '  LinkedIn: https://www.linkedin.com/in/luca-valentino-colazo-21782637a/',
    ],
    projects: () => [
      'Mis proyectos:',
      '  BooksandReviews - Sistema de reseñas de libros',
      '  FearFinder - Aplicación de terror interactiva',
      '  Reconocimiento Facial - Proyecto con Python todavia en desarrollo',
    ],
    skills: () => [
      'Mis habilidades técnicas:',
      '  Frontend: React, Next.js, TypeScript, Tailwind CSS',
      '  Backend: Node.js, Express, Python',
      '  Base de datos: SQL, MongoDB, Supabase',
      '  Herramientas: Git, Cursor, Figma',
    ],
    clear: () => {
      setConsoleOutput([])
      return []
    },
    exit: () => {
      setShowConsole(false)
      setConsoleOutput([])
      return []
    }
  }

  // Procesar comandos
  const processCommand = (input: string) => {
    const command = input.trim().toLowerCase()
    const output = commands[command as keyof typeof commands]
    
    if (output) {
      const result = output()
      if (result.length > 0) {
        setConsoleOutput(prev => [...prev, `> ${input}`, ...result])
      }
    } else {
      setConsoleOutput(prev => [...prev, `> ${input}`, `Comando no encontrado: ${command}. Escribe 'help' para ver comandos disponibles.`])
    }
  }

  // Manejar envío de comando
  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (consoleInput.trim()) {
      processCommand(consoleInput)
      setConsoleInput('')
    }
  }

  // Detectar cheat code
  const handleKeyDown = (e: KeyboardEvent) => {
    const newCheatCode = [...cheatCode, e.code]
    
    // Mantener solo las últimas 6 teclas (longitud del nuevo cheat code)
    if (newCheatCode.length > 6) {
      newCheatCode.shift()
    }
    
    setCheatCode(newCheatCode)
    
    // Verificar si el cheat code es correcto
    if (newCheatCode.length === 6) {
      const isCorrect = newCheatCode.every((key, index) => key === secretCheatCode[index])
      if (isCorrect) {
        setShowConsole(true)
        setCheatCode([])
        // Mostrar mensaje de éxito
        setConsoleOutput(['🎉 ¡Cheat code activado! La consola está disponible.'])
      }
    }
  }

  // Mostrar hint del cheat code
  const showHint = () => {
    setShowCheatHint(true)
    setTimeout(() => setShowCheatHint(false), 3000)
  }

  // Escuchar teclas para el cheat code
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cheatCode])

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

                                   {/* Hint del cheat code - Easter Egg */}
         <motion.button
           className="fixed bottom-8 right-8 bg-black/60 hover:bg-black/80 border border-white/30 hover:border-white/50 text-white/80 hover:text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm z-20"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1.5 }}
           onClick={showHint}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           ?
         </motion.button>

         {/* Hint del cheat code */}
         {showCheatHint && (
           <motion.div
             className="fixed bottom-20 right-8 bg-black/80 border border-white/30 rounded-lg px-4 py-2 text-white/90 text-xs font-mono z-20"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 10 }}
           >
             <div>Cheat Code:</div>
             <div className="text-white/70 mt-1">↑↑↓↓←→</div>
           </motion.div>
         )}

        {/* Consola interactiva */}
        {showConsole && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
                         <motion.div
               className="bg-black/90 border-2 border-white/30 backdrop-blur-md rounded-lg w-full max-w-2xl h-96 flex flex-col shadow-2xl"
               initial={{ scale: 0.8, y: 50 }}
               animate={{ scale: 1, y: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
             >
               {/* Header de la consola */}
               <div className="bg-black/50 border-b border-white/30 px-4 py-3 rounded-t-lg flex items-center justify-between">
                 <div className="flex items-center space-x-2">
                 </div>
                 <span className="text-white/80 text-sm font-mono">Easter Egg Console</span>
                                   <button
                    onClick={() => setShowConsole(false)}
                    className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                  >
                    ✕
                  </button>
               </div>

               {/* Output de la consola */}
               <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-white/90 bg-black/30">
                 <div className="mb-4">
                   <div className="text-white/70">Escribe &quot;help&quot; para ver comandos disponibles</div>
                 </div>
                 {consoleOutput.map((line, index) => (
                   <div key={index} className="mb-1">
                     {line.startsWith('> ') ? (
                       <span className="text-white/80">{line}</span>
                     ) : (
                       <span className="text-white/90">{line}</span>
                     )}
                   </div>
                 ))}
               </div>

               {/* Input de la consola */}
               <form onSubmit={handleConsoleSubmit} className="p-4 border-t border-white/30">
                 <div className="flex items-center space-x-2">
                   <span className="text-white/80 font-mono">$</span>
                   <input
                     type="text"
                     value={consoleInput}
                     onChange={(e) => setConsoleInput(e.target.value)}
                     placeholder="Escribe un comando..."
                     className="flex-1 bg-transparent text-white font-mono outline-none placeholder-white/40"
                     autoFocus
                   />
                 </div>
               </form>
             </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
