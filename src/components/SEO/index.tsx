import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export const SEO = ({
  title = 'Dra. Estefany Oliveira 🦷 - Implantes • Periodontia • Ortodontia.',
  description = 'Consultório odontológico com ênfase em Implantes, Periodontia e Ortodontia, localizado em Manaus. Oferecemos tratamentos personalizados, com foco na saúde e no bem-estar. Agende sua consulta!',
  keywords = 'Dentista em Manaus, Ortodontia em Manaus, Periodontia em Manaus, Ortopedia dos Maxilares, Aparelho Ortodôntico, Tratamento Dentário, Clínica Odontológica em Manaus, Dra. Estefany, Dra. Estefany Oliveira, Saúde Bucal, Implantes Dentários, Restauração Dental.',
  image = '/logo.svg',
  url = 'https://draestefany.com.br',
  type = 'website',
  noindex = false,
}: SEOProps) => {
  useEffect(() => {
    // Atualizar título
    document.title = title;

    // Função auxiliar para atualizar ou criar meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph Tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', `${url}${image}`, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type, noindex]);

  return null;
};



