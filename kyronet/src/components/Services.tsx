import { Network, Server, Code, Database, Activity, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Infrastructure Réseau',
    description: 'Conception et déploiement d\'architectures réseau haute performance avec SD-WAN, sécurité avancée et redondance.',
    features: ['LAN/WAN', 'SD-WAN', 'Firewall', 'Wi-Fi Pro'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Server,
    title: 'Virtualisation',
    description: 'Solutions de virtualisation complètes pour optimiser vos ressources et garantir la haute disponibilité.',
    features: ['VMware', 'Hyper-V', 'Proxmox', 'Kubernetes'],
    color: 'from-violet-600 to-purple-600'
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Développement d\'applications sur mesure, automatisation et intégration API pour votre système d\'information.',
    features: ['Python', 'PHP', 'Go', 'API REST'],
    color: 'from-emerald-600 to-green-600'
  },
  {
    icon: Database,
    title: 'Sauvegarde & DRP',
    description: 'Stratégie de sauvegarde immutable et plan de reprise d\'activité pour protéger vos données critiques.',
    features: ['Backup 3-2-1', 'Veeam', 'Réplication', 'Tests auto'],
    color: 'from-orange-600 to-amber-600'
  },
  {
    icon: Activity,
    title: 'Supervision 24/7',
    description: 'Monitoring proactif, alerting intelligent et tableaux de bord pour une visibilité complète de votre infrastructure.',
    features: ['Grafana', 'ELK Stack', 'Alerting', 'Métriques'],
    color: 'from-rose-600 to-pink-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Hybride',
    description: 'Orchestration multi-cloud et hybridation on-premise pour une flexibilité maximale et une scalabilité illimitée.',
    features: ['AWS', 'Azure', 'OVH', 'On-premise'],
    color: 'from-sky-600 to-blue-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Une expertise complète à votre service
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            De la conception à l&apos;exploitation, nous maîtrisons l&apos;ensemble de la chaîne de valeur IT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>

              <div className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all inline-flex items-center gap-2 hover:shadow-xl">
            Voir tous nos services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
