import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent as Contact } from '../../shaders/contact/contact.component';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TopComponent, Contact],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    // Add breadcrumb data for contact page
    this.seoService.addBreadcrumbData([
      { name: 'Inici', url: '/inici' },
      { name: 'Contacte', url: '/contacte' }
    ]);

    // Add contact-specific structured data
    const contactData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contacte AutoescolaTrailer',
      'description': 'Pàgina de contacte de l\'AutoescolaTrailer Mollerussa',
      'mainEntity': {
        '@type': 'LocalBusiness',
        'name': 'AutoescolaTrailer Mollerussa',
        'telephone': '+34 973 123 456',
        'email': 'info@autoescolatrailer.cat',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Carrer Principal, 123',
          'addressLocality': 'Mollerussa',
          'postalCode': '25230',
          'addressRegion': 'Lleida',
          'addressCountry': 'ES'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 41.6300,
          'longitude': 0.8900
        },
        'openingHours': 'Mo-Fr 08:00-20:00, Sa 09:00-14:00',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 973 123 456',
          'contactType': 'customer service',
          'availableLanguage': 'Catalan'
        }
      }
    };

    this.seoService.addStructuredData(contactData);
  }
}
