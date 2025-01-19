import { motion } from 'framer-motion';
import { FAQCategory } from './types';
import { categoryIcons } from './categoryIcons';

interface FAQCategoriesProps {
  selectedCategory: FAQCategory | null;
  onSelectCategory: (category: FAQCategory | null) => void;
}

export const FAQCategories = ({ selectedCategory, onSelectCategory }: FAQCategoriesProps) => {
  return (
    <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
      {Object.entries(categoryIcons).map(([category, { icon: Icon, label }]) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(selectedCategory === category as FAQCategory ? null : category as FAQCategory)}
          className={`flex flex-col items-center p-4 rounded-full md:rounded-lg transition-colors ${
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-white text-gray-600 hover:bg-purple-50'
          }`}
        >
          <div className="relative">
            <Icon size={24} />
            <motion.div
              className="absolute inset-0 bg-purple-200 rounded-full -z-10"
              initial={false}
              animate={{
                scale: selectedCategory === category ? 1.2 : 1,
                opacity: selectedCategory === category ? 0.2 : 0
              }}
            />
          </div>
          <span className="text-sm mt-2 whitespace-nowrap">{label}</span>
        </motion.button>
      ))}
    </div>
  );
};