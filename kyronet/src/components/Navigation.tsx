import { useState, useEffect } from 'react';
import { Network, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-slate-900 group"
          >
            <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold tracking-tight">Kyronet</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30"
            >
              Nous contacter
            </button>
          </div>

          <button
            className="lg:hidden text-slate-600 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-slate-200 pt-4 bg-white rounded-2xl p-4 shadow-lg">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold mt-2"
            >
              Nous contacter
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
