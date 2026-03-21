import { Search, Smile, BookOpen, Eye, Sparkles } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Avaliação Odontológica',
    description: 'Consulta inicial para avaliar a saúde bucal completa',
    details: [
      'Verificação de cáries e necessidade de tratamentos prévios',
      'Análise de restaurações e próteses existentes',
      'Avaliação da saúde gengival',
      'Definição da cor inicial dos dentes'
    ],
    icon: Search,
    color: 'purple'
  },
  {
    number: 2,
    title: 'Moldagem Personalizada',
    description: 'Confecção de moldeiras sob medida para seu conforto',
    details: [
      'Moldagem precisa da sua arcada dentária',
      'Confecção de moldeiras individuais',
      'Ajuste perfeito para maior conforto',
      'Garantia de distribuição uniforme do gel'
    ],
    icon: Smile,
    color: 'purple'
  },
  {
    number: 3,
    title: 'Orientação de Uso',
    description: 'Instruções detalhadas para aplicação correta',
    details: [
      'Quantidade exata de gel a ser utilizada',
      'Tempo diário de uso das moldeiras',
      'Melhores horários para aplicação',
      'Cuidados com alimentação durante o tratamento'
    ],
    icon: BookOpen,
    color: 'purple'
  },
  {
    number: 4,
    title: 'Acompanhamento',
    description: 'Monitoramento regular do seu tratamento',
    details: [
      'Consultas de retorno periódicas',
      'Ajustes no protocolo se necessário',
      'Monitoramento de sensibilidade',
      'Avaliação da evolução do clareamento'
    ],
    icon: Eye,
    color: 'purple'
  },
  {
    number: 5,
    title: 'Resultado Final',
    description: 'Sorriso mais branco de forma gradual e segura',
    details: [
      'Clareamento progressivo e natural',
      'Resultado duradouro',
      'Orientações para manutenção',
      'Dicas para prolongar o resultado'
    ],
    icon: Sparkles,
    color: 'purple'
  }
];

export function StepByStep() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Passo a Passo do Clareamento Caseiro
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Entenda cada etapa do seu tratamento com a Dra. Estefany Oliveira
        </p>

        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="text-purple-600" size={28} />
                      <h3 className="text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 text-lg">
                      {step.description}
                    </p>

                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-600 font-bold mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
