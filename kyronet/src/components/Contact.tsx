import { Network, Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Contactez-nous
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Prêt à transformer votre infrastructure IT ?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discutons de vos besoins et découvrez comment Kyronet peut propulser votre entreprise vers le futur.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Téléphone</div>
                  <a href="tel:+33184883310" className="text-slate-300 hover:text-white transition-colors">
                    +33 1 84 88 33 10
                  </a>
                  <p className="text-sm text-slate-400 mt-1">Lun-Ven 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:contact@kyronet.fr" className="text-slate-300 hover:text-white transition-colors">
                    contact@kyronet.fr
                  </a>
                  <p className="text-sm text-slate-400 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Adresse</div>
                  <p className="text-slate-300">
                    15 rue du Faubourg<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-slate-300 mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Demander un audit gratuit</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email professionnel</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="jean.dupont@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Entreprise</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Décrivez vos besoins en infrastructure IT..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Network className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">Kyronet</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Expert en infrastructure IT depuis plus de 15 ans. Nous transformons vos défis techniques en avantages compétitifs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure Réseau</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtualisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Développement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sauvegarde & DRP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Hybride</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notre équipe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Kyronet. Tous droits réservés.</p>
          <p>Fait avec passion à Paris 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
}
