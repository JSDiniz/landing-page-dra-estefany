import { motion } from 'framer-motion';
import { FaStar, FaSmile, FaAward } from 'react-icons/fa';

const stats = [
  {
    icon: FaStar,
    value: '4.9',
    label: 'Avaliação Média',
    suffix: '/5',
  },
  {
    icon: FaSmile,
    value: '98',
    label: 'Pacientes Satisfeitos',
    suffix: '%',
  },
  // {
  //   icon: FaAward,
  //   value: '15',
  //   label: 'Anos de Experiência',
  //   suffix: '+',
  // },
];

export const TestimonialStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                <Icon size={24} />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-lg text-gray-600 ml-1">{stat.suffix}</span>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};