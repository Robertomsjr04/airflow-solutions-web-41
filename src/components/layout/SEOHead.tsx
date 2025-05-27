
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'AirFlow Climatização - Refrigeração Industrial e AVAC',
  description = 'Especialistas em climatização industrial, PMOC, projetos AVAC, retrofit e manutenção. Atendimento em Brasília e região. Solicite um orçamento gratuito.',
  keywords = 'climatização industrial, PMOC, AVAC, refrigeração, ar condicionado, manutenção, projeto, retrofit, Brasília',
  image = '/lovable-uploads/28a47dbe-cbaf-4eda-a45f-c9e7adb9ec02.png',
  url = 'https://airflow-climatizacao.lovable.app'
}) => {
  useEffect(() => {
    // Atualizar title
    document.title = title;

    // Função para atualizar ou criar meta tag
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Meta tags básicas
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'AirFlow Climatização');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('', title, 'og:title');
    updateMetaTag('', description, 'og:description');
    updateMetaTag('', 'website', 'og:type');
    updateMetaTag('', url, 'og:url');
    updateMetaTag('', image, 'og:image');
    updateMetaTag('', 'AirFlow Climatização', 'og:site_name');
    updateMetaTag('', 'pt_BR', 'og:locale');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AirFlow Climatização",
      "description": description,
      "url": url,
      "logo": image,
      "image": image,
      "telephone": "+55-61-3081-3550",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Quadra 12 conjunto H lote 09",
        "addressLocality": "Setor Sul Gama",
        "addressRegion": "DF",
        "postalCode": "72415-608",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-15.9853725",
        "longitude": "-48.0644611"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "serviceArea": {
        "@type": "City",
        "name": "Brasília"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Climatização",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PMOC"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climatização Industrial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Projetos e Retrofit"
            }
          }
        ]
      }
    };

    // Remover script anterior se existir
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adicionar novo structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url]);

  return null;
};
