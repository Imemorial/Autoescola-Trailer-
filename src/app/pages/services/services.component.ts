import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent as ServicesComponentsShaders } from '../../shaders/services/services.component';
import { NgFor } from '@angular/common';
import { AboutServicesComponent } from "./components/about-services/about-services.component";
import { StatsComponent } from './components/stats/stats.component';
import { LostComponent } from './components/lost/lost.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopComponent, NgFor, AboutServicesComponent, ServicesComponentsShaders, StatsComponent, LostComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsServices() {
    this.titleService.setTitle('Serveis d\'Autoescola Trailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Descobreix els serveis de formació i conducció personalitzada que ofereix AutoescolaTrailer a Mollerussa. Cursos per obtenir el teu carnet de conduir de manera ràpida i efectiva.' });
    this.meta.addTag({ name: 'keywords', content: 'autoescola, serveis de conducció, formació a mida, carnet de conduir, cursos personalitzats, autoescola a Mollerussa' });
    this.meta.addTag({ property: 'og:title', content: 'Serveis d\'Autoescola Trailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Obten el teu carnet de conduir amb els serveis personalitzats d\'AutoescolaTrailer a Mollerussa. Formació professional i eficient.' });
  }

  ngOnInit() {
    this.updateMetaTagsServices();
  }

}
