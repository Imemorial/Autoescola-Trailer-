import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { CaseStudiesComponent } from "../../shaders/case-studies/case-studies.component";
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, ContactComponent, AboutComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsSoluciones() {
    this.titleService.setTitle('ItnovaStudio - Soluciones Digitales');
    this.meta.addTag({ name: 'description', content: 'ItnovaStudio ofrece soluciones digitales a medida en desarrollo web, software personalizado, redes sociales y mucho más para potenciar tu negocio.' });
    this.meta.addTag({ name: 'keywords', content: 'soluciones digitales, desarrollo web, software personalizado, redes sociales, ecommerce, tecnología a medida, transformación digital' });
    this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Soluciones Digitales' });
    this.meta.addTag({ property: 'og:description', content: 'Descubre cómo nuestras soluciones en desarrollo web, software personalizado y redes sociales pueden impulsar tu negocio y mejorar tu presencia digital.' });
  }
  
  ngOnInit() {
    this.updateMetaTagsSoluciones();
  }

}
