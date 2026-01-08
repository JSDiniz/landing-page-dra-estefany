
import { SERVICES } from "../../mocks/services";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

import Logo from "/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* LOGO + DESCRIÇÃO */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} className="w-9 h-9" />
              <span className="text-lg md:text-xl font-bold">
                Dra. Estefany
              </span>
            </div>
            <p className="text-gray-400">
              Cuidando do seu sorriso com excelência e dedicação.
            </p>
          </div>

          {/* SERVIÇOS (VINDO DO SERVICES) */}
          <FooterLinks
            title="Serviços"
            links={SERVICES.map((service) => ({
              label: service.title,
              href: "#servicos",
            }))}
          />

          {/* LINKS ÚTEIS */}
          <FooterLinks
            title="Links Úteis"
            links={[
              { label: "Início", href: "#inicio" },
              { label: "Sobre Nós", href: "#sobre" },
              { label: "FAQ", href: "#faq" },
              { label: "Contato", href: "#contato" },
            ]}
          />

          {/* CONTATO */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>

            <a
              href="https://www.google.com/maps/place/Av.+Djalma+Batista,+946+-+Nossa+Sra.+das+Gra%C3%A7as,+Manaus+-+AM,+69050-010/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 mb-2 block"
            >
              Av. Djalma Batista, 946 - Nossa Sra. das Graças, 69050-010
            </a>

            <p className="text-gray-400 mb-2">Manaus - AM</p>
            <p className="text-gray-400 mb-4">(92) 9 8618-5420</p>

            <SocialLinks />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dra. Estefany. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
