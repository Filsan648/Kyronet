import React, { useState } from 'react';
import Reseaux  from '../asset/HeroImages/reseaux.png';
import sauvegarde from '../asset/HeroImages/sauvegarde.png';
import vitualisation from '../asset/HeroImages/virtialisation.png';
import developpement from '../asset/HeroImages/devellopement.png';
const slides = [
  {
    id: "01",
    tag: "Réseau & Sécurité",
    title: "Architecture réseau haute performance",
    desc: "Des infrastructures réseau robustes, sécurisées et optimisées pour garantir une connectivité rapide, stable et adaptée à la croissance de votre entreprise.",
    image: Reseaux,
    color: "bg-blue-600"
  },
  {
    id: "02",
    tag: "Cloud & Virtualisation",
    title: "Virtualisation et cloud hybride",
    desc: "Modernisez votre système d'information grâce à des solutions cloud flexibles et une virtualisation performante pour plus d'agilité et de disponibilité.",
    image: vitualisation,
    color: "bg-yellow-600"
  },
  {
    id: "03",
    tag: "Protection des données",
    title: "Sauvegarde et continuité d'activité",
    desc: "Assurez la protection de vos données critiques avec des solutions de sauvegarde fiables et des plans de continuité garantissant la reprise rapide de vos activités.",
    image: sauvegarde,
    color: "bg-green-600"
  },
  {
    id: "04",
    tag: "Développement & Automatisation",
    title: "Développement et automatisation",
    desc: "Automatisez vos processus et développez des solutions sur mesure pour améliorer votre productivité, réduire les tâches répétitives et accélérer votre transformation digitale.",
    image: developpement,
    color: "bg-red-600"
  },
];

const Hero2 = () => {
  const [current, setCurrent] = useState(0);

  return (
    
    <section className="relative min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4 md:p-10 overflow-hidden font-sans">
          
           
      {/* 1. ORBES DE LUMIÈRE (Fond dynamique) */}
      <div className={`absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000 ${slides[current].color}`}></div>
      <div className={`absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 transition-colors duration-1000 ${slides[current].color}`}></div>

      <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 2. CÔTÉ GAUCHE : TEXTE & NAVIGATION */}
        <div className="lg:col-span-5 px-4">
          <div className="overflow-hidden mb-6">
             <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
               {slides[current].tag}
             </span>
          </div>

          <h1 className="text-6xl md:text-6xl font-black tracking-tighter leading-[0.85] text-slate-900 mb-8 transition-all">
            {slides[current].title} <br />
           
          </h1>

          <p className="text-lg text-slate-500 max-w-sm mb-12 leading-relaxed italic border-l-2 border-slate-200 pl-6">
            "{slides[current].desc}"
          </p>

          {/* Navigation Custom (Rounded) */}
          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`group relative h-14 transition-all duration-500 rounded-full flex items-center justify-center border ${
                  i === current ? "w-32 bg-slate-900 border-slate-900" : "w-14 bg-white border-slate-200 hover:border-slate-400"
                }`}
              >
                {i === current ? (
                  <span className="text-white text-xs font-bold uppercase tracking-widest px-4">0{i+1}</span>
                ) : (
                  <span className="text-slate-400 font-bold">0{i+1}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3. CÔTÉ DROIT : LA CARTE "SUPER-ROUNDED" */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[700px] w-full">
          
          {/* Cadre de fond flottant */}
          <div className="absolute inset-4 bg-white/40 backdrop-blur-xl rounded-[60px] border border-white/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"></div>

          {/* Container Image Principal */}
          <div className="absolute inset-0 p-6">
            <div className="relative h-full w-full overflow-hidden rounded-[50px] shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute object-cover inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    index === current ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-125 translate-y-20"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ))}
              
              {/* Badge CTA flottant sur l'image */}
              <button className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center group hover:scale-110 transition-all shadow-xl">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:rotate-45 transition-transform">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </button>
            </div>
          </div>

          {/* Élément décoratif "Floating Pill" */}
          <div className={`absolute -top-6 right-12 px-6 py-3 rounded-full text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl transition-all duration-700 ${slides[current].color}`}>
            High Performance Architecture
          </div>
        </div>

      </div>

      {/* 5. INFOS DE BAS DE PAGE */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
          <span>Infra</span>
          <span>•</span>
          <span>Security</span>
          <span>•</span>
          <span>DevOps</span>
        </div>
      </div>

    </section>
  );
};

export default Hero2;