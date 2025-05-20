import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent } from './components/services/services.component';
import { TypesComponent } from './components/types/types.component';
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [TopComponent ,ServicesComponent, TypesComponent, ContactComponent],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss'
})
export class LostComponent {

   constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsLost() {
    this.titleService.setTitle('Recupera el carnet o punts amb AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Oferim serveis per ajudar-te a recuperar el carnet de conduir o punts de manera ràpida i efectiva a AutoescolaTrailer, Mollerussa.' });
    this.meta.addTag({ name: 'keywords', content: 'recuperar carnet, recuperar punts, AutoescolaTrailer, Mollerussa, cursos de conducció, serveis personalitzats' });
    this.meta.addTag({ property: 'og:title', content: 'Recupera el carnet o punts amb AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Recupera el carnet o punts amb els nostres cursos personalitzats i serveis professionals a AutoescolaTrailer, Mollerussa.' });
  }

  ngOnInit() {
    this.updateMetaTagsLost();
  }

}
