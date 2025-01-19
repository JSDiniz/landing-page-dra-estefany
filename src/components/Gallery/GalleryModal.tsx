import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { GalleryImage } from './types';

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export const GalleryModal = ({ image, onClose }: GalleryModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <FiX size={24} />
        </button>
        
        <img
          src={image.url}
          alt={image.description}
          className="w-full h-auto"
        />
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-600">{image.description}</p>
          {image.treatment && (
            <p className="text-sm text-gray-500 mt-2">
              Tratamento: {image.treatment}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};