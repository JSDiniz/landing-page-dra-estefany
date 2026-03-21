import { Link } from 'react-router-dom';

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
            <Link
              to={`/${link.href}`}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};