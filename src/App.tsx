import { useScrollReveal } from './hooks/useScrollReveal';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Logros from './components/Logros';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();
  return (
    <div>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Historia />
      <Proyectos />
      <Experiencia />
      <Educacion />
      <Logros />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}
