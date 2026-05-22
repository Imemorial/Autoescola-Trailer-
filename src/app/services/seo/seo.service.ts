import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
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
  robots?: string;
  structuredData?: object | object[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly BASE_URL = 'https://autoescolatrailer.cat';
  private readonly OG_IMAGE = `${this.BASE_URL}/assets/images/logo2.png`;

  private readonly KNOWN_ROUTES = new Set([
    '/inici',
    '/serveis',
    '/testos',
    '/galeria',
    '/contacte',
    '/nosaltres',
    '/termes',
    '/politica',
    '/cookies',
    '/recuperar'
  ]);

  private readonly defaultData: SEOData = {
    title: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    description: 'A l\'AutoescolaTrailer de Mollerussa oferim cursos de conducció personalitzats per a totes les edats. Obten el teu carnet de conduir de forma còmoda i ràpida amb els nostres instructors professionals.',
    keywords: 'AutoescolaTrailer Mollerussa, conducció, carnet de conduir, formació de conducció, cursos de conducció, conducció personalitzada, autoescola Mollerussa, examen de conducció, autoescola professional, Mollerussa',
    ogTitle: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    ogDescription: 'Descobreix els cursos personalitzats que ofereix l\'AutoescolaTrailer a Mollerussa per obtenir el teu carnet de conduir de manera ràpida i efectiva.',
    ogImage: this.OG_IMAGE,
    twitterCard: 'summary_large_image',
    twitterTitle: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
    twitterDescription: 'Descobreix els cursos personalitzats que ofereix l\'AutoescolaTrailer a Mollerussa per obtenir el teu carnet de conduir de manera ràpida i efectiva.',
    twitterImage: this.OG_IMAGE,
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  };

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
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

  private normalizeRoute(route: string): string {
    const path = route.split('?')[0].split('#')[0];
    if (path === '' || path === '/') {
      return '/inici';
    }
    return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  }

  private updateSEOForCurrentRoute(): void {
    const route = this.normalizeRoute(this.router.url);
    this.clearDynamicStructuredData();

    if (route.startsWith('/admin')) {
      this.updateSEO(this.getAdminSEOData(route));
      return;
    }

    if (!this.KNOWN_ROUTES.has(route)) {
      this.updateSEO(this.getNotFoundSEOData());
      return;
    }

    const seoData = this.getSEODataForRoute(route);
    this.updateSEO({
      ...seoData,
      canonicalUrl: `${this.BASE_URL}${route}`,
      ogUrl: `${this.BASE_URL}${route}`,
      ogImage: this.OG_IMAGE,
      twitterImage: this.OG_IMAGE
    });

    this.addAutoBreadcrumbs(route);
  }

  private addAutoBreadcrumbs(route: string): void {
    const routesWithComponentBreadcrumbs = new Set(['/inici', '/serveis', '/contacte']);
    if (routesWithComponentBreadcrumbs.has(route)) {
      return;
    }

    const labels: Record<string, string> = {
      '/testos': 'Testos',
      '/galeria': 'Galeria',
      '/nosaltres': 'Sobre nosaltres',
      '/termes': 'Termes i condicions',
      '/politica': 'Política de privacitat',
      '/cookies': 'Política de cookies',
      '/recuperar': 'Recuperació'
    };

    const label = labels[route];
    if (!label) {
      return;
    }

    this.addBreadcrumbData([
      { name: 'Inici', url: '/inici' },
      { name: label, url: route }
    ]);
  }

  private getAdminSEOData(route: string): SEOData {
    return {
      title: 'Panell d\'administració | AutoescolaTrailer',
      description: 'Àrea privada d\'administració d\'AutoescolaTrailer Mollerussa.',
      keywords: 'admin, AutoescolaTrailer, Mollerussa',
      ogTitle: 'Panell d\'administració | AutoescolaTrailer',
      ogDescription: 'Àrea privada d\'administració d\'AutoescolaTrailer Mollerussa.',
      ogImage: this.OG_IMAGE,
      twitterImage: this.OG_IMAGE,
      canonicalUrl: `${this.BASE_URL}${route}`,
      ogUrl: `${this.BASE_URL}${route}`,
      robots: 'noindex, nofollow'
    };
  }

  private getNotFoundSEOData(): SEOData {
    return {
      title: '404 - Pàgina no trobada | AutoescolaTrailer',
      description: 'La pàgina que busques no existeix. Torna a l\'inici o explora els nostres serveis d\'autoescola a Mollerussa.',
      keywords: '404, pàgina no trobada, AutoescolaTrailer, Mollerussa',
      ogTitle: '404 - Pàgina no trobada | AutoescolaTrailer',
      ogDescription: 'La pàgina que busques no existeix. Torna a l\'inici o explora els nostres serveis d\'autoescola a Mollerussa.',
      ogImage: this.OG_IMAGE,
      twitterImage: this.OG_IMAGE,
      canonicalUrl: `${this.BASE_URL}${this.normalizeRoute(this.router.url)}`,
      ogUrl: `${this.BASE_URL}${this.normalizeRoute(this.router.url)}`,
      robots: 'noindex, nofollow'
    };
  }

  private getSEODataForRoute(route: string): SEOData {
    const routeSEOData: Record<string, SEOData> = {
      '/inici': {
        ...this.defaultData,
        title: 'AutoescolaTrailer Mollerussa - Formació i conducció professional',
        description: 'A l\'AutoescolaTrailer de Mollerussa oferim cursos de conducció personalitzats per a totes les edats. Obten el teu carnet de conduir de forma còmoda i ràpida amb els nostres instructors professionals.',
        keywords: 'AutoescolaTrailer Mollerussa, conducció, carnet de conduir, formació de conducció, cursos de conducció, autoescola Mollerussa, examen de conducció'
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
        title: 'Prova els nostres tests a AutoescolaTrailer',
        description: 'Accedeix a les nostres pàgines de tests d\'AutoescolaTrailer a Mollerussa. Practica amb els nostres tests per preparar-te per obtenir el teu carnet de conduir.',
        keywords: 'tests, AutoescolaTrailer, tests de conducció, pràctiques de tests, carnet de conduir, preparar tests de conducció',
        ogTitle: 'Prova els nostres tests a AutoescolaTrailer',
        ogDescription: 'Accedeix als tests de conducció personalitzats d\'AutoescolaTrailer a Mollerussa i prepara\'t per al teu examen de conduir.',
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
        title: 'Galeria d\'AutoescolaTrailer a Mollerussa',
        description: 'Descobreix la galeria d\'imatges d\'AutoescolaTrailer a Mollerussa. Veure el nostre equip i les instal·lacions dedicades a la formació de conducció personalitzada.',
        keywords: 'galeria, AutoescolaTrailer, Mollerussa, imatges, conducció, formació, carnet de conduir, instal·lacions',
        ogTitle: 'Galeria d\'AutoescolaTrailer a Mollerussa',
        ogDescription: 'Mira la nostra galeria d\'imatges d\'AutoescolaTrailer a Mollerussa i coneix les nostres instal·lacions i l\'equip que fa possible la nostra formació personalitzada.',
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
        ogDescription: 'Contacta amb l\'AutoescolaTrailer de Mollerussa. Troba la nostra ubicació i informació de contacte.'
      },
      '/nosaltres': {
        title: 'AutoescolaTrailer - Sobre nosaltres',
        description: 'Coneix l\'equip darrere d\'AutoescolaTrailer a Mollerussa. Oferim formació personalitzada per obtenir el teu carnet de conduir de manera eficient i ràpida.',
        keywords: 'AutoescolaTrailer, Mollerussa, equip, formació conducció, carnet de conduir, cursos personalitzats, formació a mida',
        ogTitle: 'AutoescolaTrailer - Sobre nosaltres',
        ogDescription: 'Descobreix l\'equip d\'AutoescolaTrailer a Mollerussa i els nostres serveis de formació personalitzada per aconseguir el teu carnet de conduir de forma eficaç.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'Sobre nosaltres',
          'description': 'Informació sobre l\'equip i la història de l\'AutoescolaTrailer Mollerussa'
        }
      },
      '/termes': {
        title: 'Termes i condicions d\'AutoescolaTrailer a Mollerussa',
        description: 'Llegeix els termes i condicions d\'AutoescolaTrailer, on trobaràs la informació sobre les nostres polítiques de cursos de conducció, cancel·lacions i responsabilitats.',
        keywords: 'termes i condicions, AutoescolaTrailer, Mollerussa, cursos de conducció, polítiques, responsabilitats, cancel·lacions',
        ogTitle: 'Termes i condicions d\'AutoescolaTrailer a Mollerussa',
        ogDescription: 'Consulta els termes i condicions d\'AutoescolaTrailer per obtenir informació sobre els serveis de formació de conducció i les nostres polítiques.'
      },
      '/politica': {
        title: 'Política de privacitat d\'AutoescolaTrailer a Mollerussa',
        description: 'Consulta la política de privacitat d\'AutoescolaTrailer a Mollerussa i com gestionem les teves dades personals en el procés de formació de conducció i serveis relacionats.',
        keywords: 'política de privacitat, AutoescolaTrailer, Mollerussa, dades personals, protecció de dades, cursos de conducció, serveis de conducció',
        ogTitle: 'Política de privacitat d\'AutoescolaTrailer a Mollerussa',
        ogDescription: 'Llegeix la nostra política de privacitat per entendre com protegim les teves dades personals en el procés d\'obtenció del carnet de conduir i altres serveis.'
      },
      '/cookies': {
        title: 'Política de Cookies d\'AutoescolaTrailer a Mollerussa',
        description: 'Consulta la nostra política de cookies d\'AutoescolaTrailer a Mollerussa. Descobreix com utilitzem cookies per millorar l\'experiència d\'usuari al nostre lloc web.',
        keywords: 'política de cookies, AutoescolaTrailer, Mollerussa, cookies, privacitat, ús de cookies, experiència d\'usuari',
        ogTitle: 'Política de Cookies d\'AutoescolaTrailer a Mollerussa',
        ogDescription: 'Llegeix la nostra política de cookies per saber com utilitzem cookies per millorar la navegació al nostre lloc web i protegir la teva privacitat.'
      },
      '/recuperar': {
        title: 'Recupera el carnet o punts amb AutoescolaTrailer a Mollerussa',
        description: 'Oferim serveis per ajudar-te a recuperar el carnet de conduir o punts de manera ràpida i efectiva a AutoescolaTrailer, Mollerussa.',
        keywords: 'recuperar carnet, recuperar punts, AutoescolaTrailer, Mollerussa, cursos de conducció, serveis personalitzats',
        ogTitle: 'Recupera el carnet o punts amb AutoescolaTrailer a Mollerussa',
        ogDescription: 'Recupera el carnet o punts amb els nostres cursos personalitzats i serveis professionals a AutoescolaTrailer, Mollerussa.'
      }
    };

    return routeSEOData[route] || this.defaultData;
  }

  updateSEO(data: SEOData): void {
    this.titleService.setTitle(data.title);

    this.updateMetaTag('description', data.description);
    this.updateMetaTag('keywords', data.keywords);
    this.updateMetaTag('robots', data.robots || this.defaultData.robots || '');

    this.updateMetaTag('og:title', data.ogTitle || data.title);
    this.updateMetaTag('og:description', data.ogDescription || data.description);
    this.updateMetaTag('og:image', data.ogImage || this.OG_IMAGE);
    this.updateMetaTag('og:url', data.ogUrl || `${this.BASE_URL}${this.normalizeRoute(this.router.url)}`);
    this.updateMetaTag('og:type', 'website');
    this.updateMetaTag('og:site_name', 'AutoescolaTrailer Mollerussa');
    this.updateMetaTag('og:locale', 'ca_ES');

    this.updateMetaTag('twitter:card', data.twitterCard || this.defaultData.twitterCard || '');
    this.updateMetaTag('twitter:title', data.twitterTitle || data.ogTitle || data.title);
    this.updateMetaTag('twitter:description', data.twitterDescription || data.ogDescription || data.description);
    this.updateMetaTag('twitter:image', data.twitterImage || this.OG_IMAGE);

    if (data.canonicalUrl) {
      this.updateCanonicalLink(data.canonicalUrl);
    }

    if (data.structuredData) {
      const items = Array.isArray(data.structuredData) ? data.structuredData : [data.structuredData];
      items.forEach((item, index) => this.addStructuredData(item, `route-${index}`));
    }
  }

  private updateMetaTag(name: string, content: string): void {
    this.meta.removeTag(`name="${name}"`);
    this.meta.removeTag(`property="${name}"`);

    if (!content) {
      return;
    }

    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      this.meta.addTag({ property: name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  private updateCanonicalLink(url: string): void {
    const head = this.document.head;
    let link = head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      head.appendChild(link);
    }

    link.href = url;
  }

  private clearDynamicStructuredData(): void {
    this.document.querySelectorAll('script[type="application/ld+json"][data-seo-dynamic]').forEach(el => el.remove());
  }

  addStructuredData(data: object, id = 'dynamic'): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-dynamic', 'true');
    script.setAttribute('data-seo-id', id);
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  updatePageSEO(data: Partial<SEOData>): void {
    const route = this.normalizeRoute(this.router.url);
    const currentData = this.getSEODataForRoute(route);
    this.updateSEO({ ...currentData, ...data });
  }

  addBreadcrumbData(items: Array<{ name: string; url: string }>): void {
    this.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${this.BASE_URL}${item.url}`
      }))
    }, 'breadcrumb');
  }

  addFAQData(faqs: Array<{ question: string; answer: string }>): void {
    this.addStructuredData({
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
    }, 'faq');
  }
}
