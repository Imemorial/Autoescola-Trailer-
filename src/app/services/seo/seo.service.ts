import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly defaultData: SEOData = {
    title: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    description: 'A l\'AutoescolaTrailer de Mollerussa oferim cursos de conducció personalitzats per a totes les edats. Obten el teu carnet de conduir de forma còmoda i ràpida amb els nostres instructors professionals.',
    keywords: 'AutoescolaTrailer Mollerussa, conducció, carnet de conduir, formació de conducció, cursos de conducció, conducció personalitzada, autoescola Mollerussa, examen de conducció',
    ogTitle: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    ogDescription: 'Descobreix els cursos personalitzats que ofereix l\'AutoescolaTrailer a Mollerussa per obtenir el teu carnet de conduir de manera ràpida i efectiva.',
    ogImage: '/assets/images/logo2.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    twitterDescription: 'Descobreix els cursos personalitzats que ofereix l\'AutoescolaTrailer a Mollerussa per obtenir el teu carnet de conduir de manera ràpida i efectiva.',
    twitterImage: '/assets/images/logo2.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'AutoescolaTrailer Mollerussa',
      'description': 'Autoescola professional a Mollerussa especialitzada en formació de conducció i preparació per a l\'examen del carnet de conduir.',
      'url': 'https://autoescolatrailer.cat',
      'telephone': '+34 973 123 456',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Carrer Principal, 123',
        'addressLocality': 'Mollerussa',
        'postalCode': '25230',
        'addressCountry': 'ES'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 41.6300,
        'longitude': 0.8900
      },
      'openingHours': 'Mo-Fr 08:00-20:00, Sa 09:00-14:00',
      'priceRange': '€€',
      'sameAs': [
        'https://www.facebook.com/autoescolatrailer',
        'https://www.instagram.com/autoescolatrailer'
      ]
    }
  };

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {
    this.initializeRouterListener();
  }

  private initializeRouterListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSEOForCurrentRoute();
    });
  }

  private updateSEOForCurrentRoute(): void {
    const currentUrl = this.router.url;
    const seoData = this.getSEODataForRoute(currentUrl);
    this.updateSEO(seoData);
  }

  private getSEODataForRoute(route: string): SEOData {
    const routeSEOData: { [key: string]: SEOData } = {
      '/inici': {
        title: 'AutoescolaTrailer Mollerussa - Inici | Formació de conducció professional',
        description: 'Benvinguts a l\'AutoescolaTrailer de Mollerussa. Oferim formació de conducció professional per obtenir el teu carnet de conduir de manera ràpida i segura.',
        keywords: 'autoescola Mollerussa, carnet de conduir, formació conducció, examen conducció, autoescola professional',
        ogTitle: 'AutoescolaTrailer Mollerussa - Formació de conducció professional',
        ogDescription: 'Benvinguts a l\'AutoescolaTrailer de Mollerussa. Oferim formació de conducció professional per obtenir el teu carnet de conduir.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'AutoescolaTrailer Mollerussa',
          'url': 'https://autoescolatrailer.cat',
          'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://autoescolatrailer.cat/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      },
      '/serveis': {
        title: 'Serveis - AutoescolaTrailer Mollerussa | Cursos de conducció personalitzats',
        description: 'Descobreix tots els serveis que ofereix l\'AutoescolaTrailer de Mollerussa: cursos de conducció personalitzats, preparació per a l\'examen i formació professional.',
        keywords: 'serveis autoescola, cursos conducció, formació personalitzada, examen carnet, autoescola Mollerussa',
        ogTitle: 'Serveis - AutoescolaTrailer Mollerussa',
        ogDescription: 'Descobreix tots els serveis que ofereix l\'AutoescolaTrailer de Mollerussa: cursos de conducció personalitzats i formació professional.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Formació de Conducció',
          'description': 'Cursos de conducció personalitzats per obtenir el carnet de conduir',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'AutoescolaTrailer Mollerussa'
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Mollerussa'
          }
        }
      },
      '/testos': {
        title: 'Tests de conducció - AutoescolaTrailer Mollerussa | Preparació per a l\'examen',
        description: 'Practica amb els nostres tests de conducció interactius. Preparació completa per a l\'examen del carnet de conduir amb simulacions reals.',
        keywords: 'tests conducció, examen carnet, simulacions conducció, preparació examen, tests interactius',
        ogTitle: 'Tests de conducció - AutoescolaTrailer Mollerussa',
        ogDescription: 'Practica amb els nostres tests de conducció interactius. Preparació completa per a l\'examen del carnet de conduir.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'EducationalService',
          'name': 'Tests de Conducció',
          'description': 'Tests interactius per a la preparació de l\'examen de conducció',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'AutoescolaTrailer Mollerussa'
          }
        }
      },
      '/galeria': {
        title: 'Galeria - AutoescolaTrailer Mollerussa | Instal·lacions i vehicles',
        description: 'Descobreix les nostres instal·lacions, vehicles i equipament a la galeria de l\'AutoescolaTrailer de Mollerussa.',
        keywords: 'galeria autoescola, instal·lacions, vehicles, equipament, autoescola Mollerussa',
        ogTitle: 'Galeria - AutoescolaTrailer Mollerussa',
        ogDescription: 'Descobreix les nostres instal·lacions, vehicles i equipament a la galeria de l\'AutoescolaTrailer.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          'name': 'Galeria AutoescolaTrailer',
          'description': 'Galeria d\'instal·lacions i vehicles de l\'autoescola'
        }
      },
      '/contacte': {
        title: 'Contacte - AutoescolaTrailer Mollerussa | Informació i ubicació',
        description: 'Contacta amb l\'AutoescolaTrailer de Mollerussa. Troba la nostra ubicació, horaris i informació de contacte per començar la teva formació de conducció.',
        keywords: 'contacte autoescola, ubicació Mollerussa, horaris, informació contacte, autoescola',
        ogTitle: 'Contacte - AutoescolaTrailer Mollerussa',
        ogDescription: 'Contacta amb l\'AutoescolaTrailer de Mollerussa. Troba la nostra ubicació i informació de contacte.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Contacte AutoescolaTrailer',
          'description': 'Pàgina de contacte de l\'AutoescolaTrailer Mollerussa'
        }
      },
      '/nosaltres': {
        title: 'Sobre nosaltres - AutoescolaTrailer Mollerussa | La nostra història',
        description: 'Coneix l\'equip de l\'AutoescolaTrailer de Mollerussa. Més de 10 anys d\'experiència en formació de conducció professional.',
        keywords: 'sobre nosaltres, equip autoescola, experiència, història, autoescola Mollerussa',
        ogTitle: 'Sobre nosaltres - AutoescolaTrailer Mollerussa',
        ogDescription: 'Coneix l\'equip de l\'AutoescolaTrailer de Mollerussa. Més de 10 anys d\'experiència en formació de conducció.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'Sobre nosaltres',
          'description': 'Informació sobre l\'equip i la història de l\'AutoescolaTrailer Mollerussa'
        }
      }
    };

    return routeSEOData[route] || this.defaultData;
  }

  updateSEO(data: SEOData): void {
    // Update title
    this.titleService.setTitle(data.title);

    // Update meta tags
    this.updateMetaTag('description', data.description);
    this.updateMetaTag('keywords', data.keywords);

    // Update Open Graph tags
    this.updateMetaTag('og:title', data.ogTitle || data.title);
    this.updateMetaTag('og:description', data.ogDescription || data.description);
    this.updateMetaTag('og:image', data.ogImage || this.defaultData.ogImage || '');
    this.updateMetaTag('og:url', data.ogUrl || window.location.href);
    this.updateMetaTag('og:type', 'website');
    this.updateMetaTag('og:site_name', 'AutoescolaTrailer Mollerussa');

    // Update Twitter Card tags
    this.updateMetaTag('twitter:card', data.twitterCard || this.defaultData.twitterCard || '');
    this.updateMetaTag('twitter:title', data.twitterTitle || data.title);
    this.updateMetaTag('twitter:description', data.twitterDescription || data.description);
    this.updateMetaTag('twitter:image', data.twitterImage || this.defaultData.twitterImage || '');

    // Update canonical URL
    if (data.canonicalUrl) {
      this.updateMetaTag('canonical', data.canonicalUrl);
    }

    // Add structured data
    if (data.structuredData) {
      this.addStructuredData(data.structuredData);
    }
  }

  private updateMetaTag(name: string, content: string): void {
    // Remove existing tag
    this.meta.removeTag(`name="${name}"`);
    this.meta.removeTag(`property="${name}"`);

    // Add new tag
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      this.meta.addTag({ property: name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  public addStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Method to update SEO for specific components
  updatePageSEO(data: Partial<SEOData>): void {
    const currentData = this.getSEODataForRoute(this.router.url);
    const updatedData = { ...currentData, ...data };
    this.updateSEO(updatedData);
  }

  // Method to add breadcrumb structured data
  addBreadcrumbData(items: Array<{ name: string, url: string }>): void {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `https://autoescolatrailer.cat${item.url}`
      }))
    };

    this.addStructuredData(breadcrumbData);
  }

  // Method to add FAQ structured data
  addFAQData(faqs: Array<{ question: string, answer: string }>): void {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    this.addStructuredData(faqData);
  }
} 