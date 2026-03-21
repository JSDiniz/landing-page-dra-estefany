import { Coffee, Cigarette, Droplet, Clock } from 'lucide-react';

const tips = [
  {
    icon: Coffee,
    title: 'Evitar alimentos com corantes',
    description: 'Durante o tratamento, evite café, vinho tinto, refrigerantes escuros, molhos com corantes e alimentos muito pigmentados.',
    color: 'amber'
  },
  {
    icon: Cigarette,
    title: 'Não fumar',
    description: 'O cigarro mancha os dentes e pode comprometer severamente o resultado do clareamento, além de causar outros problemas bucais.',
    color: 'red'
  },
  {
    icon: Droplet,
    title: 'Manter boa higiene bucal',
    description: 'Escove os dentes após as refeições, use fio dental diariamente e mantenha a boca sempre limpa para melhores resultados.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Não exceder o tempo recomendado',
    description: 'Siga rigorosamente o tempo de uso indicado pela dentista. Mais tempo não significa mais clareamento, pode causar danos.',
    color: 'purple'
  }
];

export function CareTips() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Cuidados Durante o Clareamento
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Siga estas orientações para garantir o melhor resultado
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-${tip.color}-100 p-3 rounded-lg flex-shrink-0`}>
                    <Icon className={`text-${tip.color}-600`} size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Lembre-se: Cada Paciente é Único
          </h3>
          <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            O tempo de tratamento e os resultados podem variar de acordo com a condição inicial dos seus dentes,
            hábitos alimentares e características individuais. A Dra. Estefany criará um plano personalizado para você.
          </p>
        </div>
      </div>
    </section>
  );
}
