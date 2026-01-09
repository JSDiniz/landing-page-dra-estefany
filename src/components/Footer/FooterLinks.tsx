interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};