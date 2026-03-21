import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function CallToAction() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Cada Sorriso é Único
        </h2>
        <p className="text-xl mb-8 text-purple-100">
          Faça seu clareamento com segurança e acompanhamento profissional personalizado
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Dra. Estefany Oliveira</h3>
          <p className="text-lg mb-8 text-purple-100">
            Cirurgiã-Dentista especializada em estética dental, comprometida com a saúde
            e beleza do seu sorriso. Atendimento humanizado e resultados seguros.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/#contato" className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg flex items-center gap-2 text-lg w-full md:w-auto justify-center">
              <Calendar size={24} />
              Agendar Consulta
            </Link>

            <a
              target="_blank"
              href="https://wa.me/5592986185420?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta."
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 transition-all border-2 border-white/30 flex items-center gap-2 text-lg w-full md:w-auto justify-center"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
