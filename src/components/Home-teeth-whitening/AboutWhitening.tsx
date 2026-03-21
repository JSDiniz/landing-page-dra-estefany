import { Shield, AlertTriangle } from 'lucide-react';

export function AboutWhitening() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          O que é o Clareamento Dental Caseiro?
        </h2>

        <div className="bg-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="text-purple-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tratamento Profissional em Casa
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O clareamento dental caseiro é um procedimento supervisionado por um cirurgião-dentista,
                que utiliza moldeiras personalizadas e gel clareador prescrito especificamente para você.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Moldeiras personalizadas feitas sob medida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Gel clareador prescrito pela dentista</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Acompanhamento profissional indispensável</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-amber-600 flex-shrink-0" size={28} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Atenção: Cuidado com Produtos sem Orientação
              </h4>
              <p className="text-gray-700">
                Clareamento sem orientação profissional pode causar sensibilidade severa,
                danos ao esmalte dentário e irritação nas gengivas. Sempre procure um dentista
                antes de iniciar qualquer tratamento clareador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
