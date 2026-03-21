import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Clareamento caseiro dói?',
    answer: 'É normal sentir alguma sensibilidade durante o tratamento, mas não deve ser doloroso. A Dra. Estefany prescreve produtos dessensibilizantes quando necessário e ajusta o protocolo para tornar o tratamento confortável. Se houver dor intensa, é importante entrar em contato imediatamente.'
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'O tratamento geralmente dura entre 2 a 4 semanas, dependendo do grau de clareamento desejado e da resposta individual de cada paciente. O tempo de uso diário das moldeiras varia entre 2 a 4 horas, ou pode ser usado durante a noite, conforme orientação profissional.'
  },
  {
    question: 'O resultado é permanente?',
    answer: 'O clareamento dental não é permanente, mas pode durar de 1 a 3 anos ou mais, dependendo dos seus hábitos. Para prolongar os resultados, evite alimentos e bebidas com corantes, não fume, mantenha boa higiene bucal e faça manutenções periódicas conforme orientação.'
  },
  {
    question: 'Posso comprar gel clareador sem receita?',
    answer: 'Não é recomendado. O uso de gel clareador sem prescrição e acompanhamento profissional pode causar sensibilidade severa, danos ao esmalte, irritação gengival e resultados insatisfatórios. Somente um dentista pode avaliar se você está apto para o clareamento e prescrever o produto adequado.'
  },
  {
    question: 'Qualquer pessoa pode fazer clareamento dental?',
    answer: 'Não. Gestantes, lactantes, menores de 16 anos e pessoas com problemas dentários não tratados não devem fazer clareamento. É essencial passar por uma avaliação odontológica completa antes de iniciar o tratamento para garantir que não há contraindicações.'
  },
  {
    question: 'O clareamento danifica os dentes?',
    answer: 'Quando feito com supervisão profissional e seguindo as orientações corretas, o clareamento dental é seguro e não danifica os dentes. O importante é usar produtos aprovados, na concentração adequada, e seguir rigorosamente o tempo de uso recomendado pela dentista.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Tire suas dúvidas sobre o clareamento dental caseiro
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-purple-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
