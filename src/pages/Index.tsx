
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import CodingProfiles from '../components/CodingProfiles';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
