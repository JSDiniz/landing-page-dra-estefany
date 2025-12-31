import { motion } from 'framer-motion';

import { TestimonialSlider } from './TestimonialSlider';
import { TestimonialStats } from './TestimonialStats';

import Url from '/logo.svg';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
          O Que Meus Pacientes Dizem
          </h2>

          <div className="grid grid-rows-1 grid-flow-col gap-1 items-center justify-center">
            <span className="w-11 h-[2px] bg-fuchsia-700" />
            <img src={Url} alt="" className="w-6 h-6" />
            <span className="w-11 h-[2px] bg-fuchsia-700" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pacientes que transformaram seus sorrisos conosco.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <TestimonialSlider />
          </div>
          <div className="lg:col-span-2">
            <TestimonialStats />
          </div>
        </div>
      </div>
    </section>
  );
};