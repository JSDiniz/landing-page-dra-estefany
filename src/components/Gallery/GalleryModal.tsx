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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
          aria-label="Fechar"
        >
          <FiX size={22} />
        </button>

        {/* Imagem */}
        <div className="flex items-center justify-center bg-white">
          <img
            src={image.url}
            alt={image.description}
            className="max-h-[60vh] w-full object-contain"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6">
          <h3 className="mb-2 text-xl font-semibold">{image.title}</h3>

          <p className="text-gray-600">{image.description}</p>

          {image.treatment && (
            <p className="mt-2 text-sm text-gray-500">
              <strong>Tratamento:</strong> {image.treatment}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
