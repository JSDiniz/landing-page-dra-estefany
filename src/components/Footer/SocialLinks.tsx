import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* <a
        href="#"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a> */}
      <a
        target="_blank"
        href="https://www.instagram.com/dra.estefany.oliveira/"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        target="_blank"
        href="https://wa.me/5592986185420?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta."
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};
