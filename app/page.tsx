
import FullPageWrapper from './components/FullPageWrapper'
import Luca from './components/Luca'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <FullPageWrapper>
      {/* Sección Personal */}
      <Luca />
      
      {/* Sección de Tecnologías */}
      <Technologies />
      
      {/* Sección de Proyectos */}
      <Projects />

      {/* Sección de Contacto */}
      <Contact />
    </FullPageWrapper>
  )
}
