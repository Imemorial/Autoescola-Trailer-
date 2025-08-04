import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { ContactComponent } from '../../shaders/contact/contact.component';
import { AboutComponent } from "./components/about/about.component";
import { StatsComponent } from './components/stats/stats.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { TestimonialsComponent } from '../../shaders/testimonials/testimonials.component';
import { NewsComponent } from "../../shaders/news/news.component";
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, ContactComponent, AboutComponent, StatsComponent, GalleryComponent, FaqsComponent, ServicesComponent, TestimonialsComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    // Add FAQ structured data for the home page
    const faqs = [
      {
        question: "Quins són els horaris de l'autoescola?",
        answer: "Els nostres horaris són de dilluns a divendres de 8:00 a 20:00 i dissabtes de 9:00 a 14:00."
      },
      {
        question: "Quin és el preu dels cursos de conducció?",
        answer: "Els preus varien segons el tipus de curs. Contacta amb nosaltres per obtenir informació detallada sobre els preus."
      },
      {
        question: "Quants temps trigo a obtenir el carnet de conduir?",
        answer: "El temps depèn de cada persona, però normalment es pot obtenir en 2-3 mesos amb la nostra formació personalitzada."
      },
      {
        question: "Ofereix tests de pràctica per a l'examen?",
        answer: "Sí, oferim tests interactius per a la preparació de l'examen del carnet de conduir."
      },
      {
        question: "On està ubicada l'autoescola?",
        answer: "Estem ubicats a Mollerussa, Lleida. Pots trobar la nostra adreça exacta a la pàgina de contacte."
      }
    ];

    this.seoService.addFAQData(faqs);

    // Add breadcrumb data
    this.seoService.addBreadcrumbData([
      { name: 'Inici', url: '/inici' }
    ]);
  }
}
