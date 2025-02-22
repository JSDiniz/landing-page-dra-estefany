import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

import Logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} className="text-purple-600 w-9 h-9" />
              <span className="text-lg md:text-xl font-bold">
                Dra. Estefany
              </span>
            </div>
            <p className="text-gray-400">
              Cuidando do seu sorriso com excelência e dedicação.
            </p>
          </div>

          <FooterLinks
            title="Serviços"
            links={[
              { label: "Implantes", href: "#implantes" },
              { label: "Ortodontia", href: "#ortodontia" },
              { label: "Clareamento", href: "#clareamento" },
              { label: "Lentes de Contato", href: "#lentes" },
            ]}
          />

          <FooterLinks
            title="Links Úteis"
            links={[
              { label: "Sobre Nós", href: "#sobre" },
              { label: "FAQ", href: "#faq" },
              { label: "Contato", href: "#contato" },
              { label: "Blog", href: "#blog" },
            ]}
          />

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">Rua Example, 123</p>
            <p className="text-gray-400 mb-2">São Paulo - SP</p>
            <p className="text-gray-400 mb-4">(11) 99999-9999</p>
            <SocialLinks />
          </div>
        </div>

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
