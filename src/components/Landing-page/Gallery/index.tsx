import { motion } from 'framer-motion';

import { GalleryGrid } from './GalleryGrid';
import { galleryData } from '../../../mocks/galleryData';

import Url from '/logo.svg';

export const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Galeria de Casos
          </h2>

          <div className="grid grid-rows-1 grid-flow-col gap-1 items-center justify-center">
            <span className="w-11 h-[2px] bg-fuchsia-700" />
            <img src={Url} alt="" className="w-6 h-6" />
            <span className="w-11 h-[2px] bg-fuchsia-700" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos casos de sucesso e transformações realizadas
            em nossos pacientes.
          </p>
        </motion.div>

        <GalleryGrid images={galleryData} />

      </div>
    </section>
  );
};