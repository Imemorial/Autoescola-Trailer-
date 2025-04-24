import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent as Contact } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TopComponent, Contact],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsContacto() {
    this.titleService.setTitle('Contacta amb AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Contacta amb AutoescolaTrailer a Mollerussa per a qualsevol consulta sobre cursos de conducció, obtenció del carnet de conduir i serveis personalitzats.' });
    this.meta.addTag({ name: 'keywords', content: 'contacte AutoescolaTrailer, consulta, cursos de conducció, carnet de conduir, Mollerussa, formació a mida, serveis personalitzats' });
    this.meta.addTag({ property: 'og:title', content: 'Contacta amb AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: '¿Tens alguna consulta sobre cursos de conducció o serveis personalitzats? Contacta amb AutoescolaTrailer a Mollerussa per obtenir més informació.' });
  }

  ngOnInit() {
    this.updateMetaTagsContacto();
  }

}
