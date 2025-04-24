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

  updateMetaTagsAutoescola() {
    this.titleService.setTitle('AutoescolaTrailer - Sobre nosaltres');
    this.meta.addTag({ name: 'description', content: 'Coneix l\'equip darrere d\'AutoescolaTrailer a Mollerussa. Oferim formació personalitzada per obtenir el teu carnet de conduir de manera eficient i ràpida.' });
    this.meta.addTag({ name: 'keywords', content: 'AutoescolaTrailer, Mollerussa, equip, formació conducció, carnet de conduir, cursos personalitzats, formació a mida' });
    this.meta.addTag({ property: 'og:title', content: 'AutoescolaTrailer - Sobre nosaltres' });
    this.meta.addTag({ property: 'og:description', content: 'Descobreix l\'equip d\'AutoescolaTrailer a Mollerussa i els nostres serveis de formació personalitzada per aconseguir el teu carnet de conduir de forma eficaç.' });
  }

  ngOnInit() {
    this.updateMetaTagsAutoescola();
  }

}
