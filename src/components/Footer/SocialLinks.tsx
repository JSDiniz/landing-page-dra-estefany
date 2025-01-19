import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};