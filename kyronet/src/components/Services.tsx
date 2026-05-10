import React, { useRef } from "react";
import {
  Network,
  Server,
  Code,
  Database,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Infrastructure Réseau",
    description:
      "Conception d’architectures réseau ultra modernes, sécurisées et évolutives pour entreprises exigeantes.",
    features: ["LAN/WAN", "SD-WAN", "Firewall"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Server,
    title: "Virtualisation",
    description:
      "Optimisation des ressources grâce à des environnements virtualisés haute disponibilité.",
    features: ["VMware", "Hyper-V", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Code,
    title: "Développement",
    description:
      "Applications modernes, APIs intelligentes et automatisation conçues pour accélérer votre business.",
    features: ["Python", "Go", "API REST"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Database,
    title: "Backup & DRP",
    description:
      "Protection avancée des données avec sauvegarde immutable et reprise d’activité instantanée.",
    features: ["Veeam", "Réplication", "3-2-1"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function ServicesAwwwards() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#050816] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-semibold">
              Expertise digitale
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] text-white">
              Des solutions
              <br />
              <span className="text-white/40">qui marquent.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative min-w-[92vw] lg:min-w-[75vw] h-[85vh] rounded-[40px] overflow-hidden snap-center"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

              {/* Glass */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-14">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center">
                    <service.icon
                      className="text-white"
                      size={34}
                      strokeWidth={1.5}
                    />
                  </div>

                  <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={24} />
                  </button>
                </div>

                {/* Bottom */}
                <div className="max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-5">
                    0{index + 1}
                  </p>

                  <h3 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-[-0.04em] mb-6">
                    {service.title}
                  </h3>

                  <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-sm tracking-wide hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-default"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-cyan-400/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs">
            Scroll pour explorer
          </p>

          <div className="h-[1px] flex-1 mx-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-white/20 text-sm">
            Inspired by Awwwards UI Experience
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}