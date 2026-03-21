import { Link, useLocation } from 'react-router-dom';

import { SERVICES } from "../../mocks/services";
import { getGoogleMapsLink } from "../../utils/googleMaps";
import { clinicAddresses } from "../../mocks/clinicAddresses";

import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

import Logo from "/logo.svg";

export const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* LOGO + DESCRIÇÃO */}
          <Link to="/" onClick={handleLogoClick} className="space-y-3">
            <div className="flex items-center space-x-2">
              <img src={Logo} className="w-9 h-9" />
              <span className="text-lg md:text-xl font-bold">
                Dra. Estefany
              </span>
            </div>
            <p className="text-gray-400">
              Cuidando do seu sorriso com excelência e dedicação.
            </p>
          </Link>

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
              { label: "Sobre", href: "#sobre" },
              { label: "Serviços", href: "#servicos" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          {/* CONTATO */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contato</h3>

            <ul className="space-y-3">
              {clinicAddresses.map((clinic) => (
                <li key={clinic.id}>
                  <a
                    href={getGoogleMapsLink(clinic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-gray-400  hover:text-white transition"
                  >
                    <div>
                      {clinic.street}, {clinic.number} – {clinic.neighborhood},{" "}
                      {clinic.city} – {clinic.state}, {clinic.zip}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

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
