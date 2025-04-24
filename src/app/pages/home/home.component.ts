import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';
import { AboutComponent } from "./components/about/about.component";
import { StatsComponent } from './components/stats/stats.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { TestimonialsComponent } from '../../shaders/testimonials/testimonials.component';
import { NewsComponent } from "../../shaders/news/news.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, ContactComponent, AboutComponent, StatsComponent, GalleryComponent, FaqsComponent, ServicesComponent, TestimonialsComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsAutoescolaTrailer() {
    this.titleService.setTitle('AutoescolaTrailer Mollerussa - Formació i conducció');
    this.meta.addTag({ name: 'description', content: 'A l\'AutoescolaTrailer de Mollerussa oferim cursos de conducció personalitzats per a totes les edats. Obten el teu carnet de conduir de forma còmoda i ràpida.' });
    this.meta.addTag({ name: 'keywords', content: 'AutoescolaTrailer Mollerussa, conducció, carnet de conduir, formació de conducció, cursos de conducció, conducció personalitzada' });
    this.meta.addTag({ property: 'og:title', content: 'AutoescolaTrailer Mollerussa - Formació i conducció' });
    this.meta.addTag({ property: 'og:description', content: 'Descobreix els cursos personalitzats que ofereix l\'AutoescolaTrailer a Mollerussa per obtenir el teu carnet de conduir de manera ràpida i efectiva.' });
  }
  
  ngOnInit() {
    this.updateMetaTagsAutoescolaTrailer();
  }

}
