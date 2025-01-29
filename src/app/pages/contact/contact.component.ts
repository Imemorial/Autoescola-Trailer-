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
  this.titleService.setTitle('ItnovaStudio - Contacto');
  this.meta.addTag({ name: 'description', content: 'Ponte en contacto con ItnovaStudio para consultas sobre desarrollo web, software personalizado, ecommerce, cámaras de seguridad y más.' });
  this.meta.addTag({ name: 'keywords', content: 'contacto ItnovaStudio, consultas, desarrollo web, software personalizado, ecommerce, cámaras de seguridad, soluciones digitales' });
  this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Contacto' });
  this.meta.addTag({ property: 'og:description', content: '¿Tienes alguna consulta? Contáctanos y descubre cómo podemos ayudarte con tus necesidades tecnológicas y de seguridad.' });
}

ngOnInit() {
  this.updateMetaTagsContacto();
}

}
