import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white container mx-auto px-4 md:px-6 pt-24 pb-32 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Clareamento Dental Caseiro: Passo a Passo Seguro
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Entenda como funciona o clareamento feito em casa, com acompanhamento profissional.
            </p>
            <Link to="/#contato" className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg flex items-center gap-2 text-lg">
              <Calendar size={24} />
              Agendar avaliação
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="text-8xl mb-4">😁</div>
                <p className="text-2xl font-semibold">Sorriso Radiante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
