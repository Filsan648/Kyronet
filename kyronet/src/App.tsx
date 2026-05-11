import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Partenaire from './components/partenaire';
import Project from './components/project';
import AboutUs from './components/about';
function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Partenaire />
      <AboutUs />
      <Services />
       <Project />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
  
    </div>
  );
}

export default App;
