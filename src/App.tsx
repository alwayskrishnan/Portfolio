import './index.css';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CreativePosters from './components/CreativePosters';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CreativePosters />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
