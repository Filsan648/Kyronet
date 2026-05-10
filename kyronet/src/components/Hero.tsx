import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-50 -z-10"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Leader en infrastructure IT
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Votre infrastructure IT,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                notre expertise
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Nous concevons, déployons et gérons des infrastructures informatiques
              sur mesure pour propulser votre entreprise vers le futur.
            </p>

            <div className="space-y-4">
              {[
                'Architecture réseau haute performance',
                'Virtualisation et cloud hybride',
                'Sauvegarde et continuité d\'activité',
                'Développement et automatisation'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 hover:shadow-xl shadow-blue-600/50">
                <Calendar className="w-5 h-5" />
                Audit gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                Découvrir nos services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] p-1 shadow-2xl shadow-blue-600/20">
              <div className="bg-white rounded-[2.8rem] p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <div>
                      <div className="text-sm text-slate-600">Disponibilité</div>
                      <div className="text-2xl font-bold text-slate-900">99.98%</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                    <div>
                      <div className="text-sm text-slate-600">Clients actifs</div>
                      <div className="text-2xl font-bold text-slate-900">120+</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                    <div>
                      <div className="text-sm text-slate-600">Support</div>
                      <div className="text-2xl font-bold text-slate-900">24/7</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl rotate-12">
              +15 ans
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
