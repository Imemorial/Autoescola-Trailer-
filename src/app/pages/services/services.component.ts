import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent as ServicesComponentsShaders } from '../../shaders/services/services.component';
import { NgFor } from '@angular/common';
import { AboutServicesComponent } from "./components/about-services/about-services.component";
import { StatsComponent } from './components/stats/stats.component';
import { LostComponent } from './components/lost/lost.component';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopComponent, NgFor, AboutServicesComponent, ServicesComponentsShaders, StatsComponent, LostComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    // Add breadcrumb data for services page
    this.seoService.addBreadcrumbData([
      { name: 'Inici', url: '/inici' },
      { name: 'Serveis', url: '/serveis' }
    ]);

    // Add service-specific structured data
    const serviceData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Serveis de Formació de Conducció',
      'description': 'Llista de serveis oferts per AutoescolaTrailer Mollerussa',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Service',
            'name': 'Curs de Conducció Bàsica',
            'description': 'Curs complet per obtenir el carnet de conduir de categoria B',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'AutoescolaTrailer Mollerussa'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Service',
            'name': 'Tests de Conducció',
            'description': 'Tests interactius per a la preparació de l\'examen de conducció',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'AutoescolaTrailer Mollerussa'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'Service',
            'name': 'Formació Personalitzada',
            'description': 'Cursos adaptats a les necessitats específiques de cada alumne',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'AutoescolaTrailer Mollerussa'
            }
          }
        }
      ]
    };

    this.seoService.addStructuredData(serviceData);
  }
}
