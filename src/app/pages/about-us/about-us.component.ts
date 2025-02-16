import { Component } from '@angular/core';
import { AboutUsInfoComponent } from './about-us-info/about-us-info.component';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';
import { OurTeamComponent } from './our-team/our-team.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopComponent, AboutUsInfoComponent, ContactComponent, OurTeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsSobreNosotros() {
    this.titleService.setTitle('ItnovaStudio - Sobre Nosotros');
    this.meta.addTag({ name: 'description', content: 'En ItnovaStudio, somos un equipo de expertos dedicados a ofrecer soluciones tecnológicas a medida en desarrollo web, software personalizado y ecommerce.' });
    this.meta.addTag({ name: 'keywords', content: 'ItnovaStudio, sobre nosotros, equipo, soluciones digitales, desarrollo web, software personalizado, ecommerce, tecnología a medida' });
    this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Sobre Nosotros' });
    this.meta.addTag({ property: 'og:description', content: 'Conoce al equipo detrás de ItnovaStudio y cómo ayudamos a transformar ideas en soluciones tecnológicas a medida.' });
  }

ngOnInit() {
  this.updateMetaTagsSobreNosotros();
}

}
