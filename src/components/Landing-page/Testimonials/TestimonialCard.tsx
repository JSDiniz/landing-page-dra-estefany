import { motion } from 'framer-motion';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -top-4 left-8 text-purple-600"
      >
        <FaQuoteLeft size={32} />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
      {testimonial.image ? (
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-24 h-24 text-gray-300" />
        )}
        
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 mb-4 italic"
          >
            "{testimonial.text}"
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-purple-600 text-sm">{testimonial.treatment}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};