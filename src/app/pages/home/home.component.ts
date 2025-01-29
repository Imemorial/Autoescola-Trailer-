import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { SolutionsComponent } from "./components/solutions/solutions.component";
import { GoSolutionsComponent } from "./components/go-solutions/go-solutions.component";
import { CaseStudiesComponent } from "../../shaders/case-studies/case-studies.component";
import { AdvantagesComponent } from "./components/advantages/advantages.component";
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, SolutionsComponent, GoSolutionsComponent, CaseStudiesComponent, AdvantagesComponent, WorkComponent, ContactComponent],
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
