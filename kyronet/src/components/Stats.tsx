import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '99.98%',
    label: 'Disponibilité garantie',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Users,
    value: '120+',
    label: 'Clients actifs',
    color: 'from-emerald-600 to-green-600'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Années d\'expertise',
    color: 'from-amber-600 to-orange-600'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support disponible',
    color: 'from-rose-600 to-pink-600'
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
