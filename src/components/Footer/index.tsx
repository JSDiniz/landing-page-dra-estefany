import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

import Logo from "/logo.svg";

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
            <a
              href="https://www.google.com/maps/place/Av.+Djalma+Batista,+946+-+Nossa+Sra.+das+Gra%C3%A7as,+Manaus+-+AM,+69050-010/@-3.107814,-60.0237158,3a,75y,52.05h,79.93t/data=!3m7!1e1!3m5!1slqgfRd4NIR8Ms7pg43tmbg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.072868983982076%26panoid%3DlqgfRd4NIR8Ms7pg43tmbg%26yaw%3D52.04828613260053!7i16384!8i8192!4m6!3m5!1s0x926c0555d62591e1:0xd79a1c6165e1c585!8m2!3d-3.1075816!4d-60.0235423!16s%2Fg%2F11c2dx0s1d?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
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
