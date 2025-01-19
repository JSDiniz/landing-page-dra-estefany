interface NavLinksProps {
  className?: string;
  onClick?: (() => void)
}

export const NavLinks = ({ className = '', onClick}: NavLinksProps) => {

  console.log("onClick: ", onClick)

  return (
    <nav className={`${className} items-center`}>
      <a href="#inicio" onClick={onClick} className="text-gray-700 font-medium hover:text-purple-600 transition-colors">Início</a>
      <a href="#sobre" onClick={onClick} className="text-gray-700 font-medium hover:text-purple-600 transition-colors">Sobre</a>
      <a href="#servicos" onClick={onClick} className="text-gray-700 font-medium hover:text-purple-600 transition-colors">Serviços</a>
      <a href="#faq" onClick={onClick} className="text-gray-700 font-medium hover:text-purple-600 transition-colors">FAQ</a>
      <a href="#contato" onClick={onClick} className="bg-purple-700 font-medium text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
        Agendar
      </a>
    </nav>
  );
};