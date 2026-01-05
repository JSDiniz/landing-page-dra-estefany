// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { GalleryModal } from "./GalleryModal";
import { GalleryImage } from "./types";

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  // const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Container tipo Pinterest */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="mb-4 break-inside-avoid"
            // onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.description}
              className="w-full rounded-lg object-cover"
              style={{ display: "block" }}
            />
            {/* <div className="bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center -mt-20 p-4">
              <p className="text-white text-center">{image.description}</p>
            </div> */}
          </motion.div>
        ))}
      </div>

      {/* <AnimatePresence>
        {selectedImage && (
          <GalleryModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence> */}
    </>
  );
};
