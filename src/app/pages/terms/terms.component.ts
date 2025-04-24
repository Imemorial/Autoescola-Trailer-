import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsTerms() {
    this.titleService.setTitle('Termes i condicions d\'AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Llegeix els termes i condicions d\'AutoescolaTrailer, on trobaràs la informació sobre les nostres polítiques de cursos de conducció, cancel·lacions i responsabilitats.' });
    this.meta.addTag({ name: 'keywords', content: 'termes i condicions, AutoescolaTrailer, Mollerussa, cursos de conducció, polítiques, responsabilitats, cancel·lacions' });
    this.meta.addTag({ property: 'og:title', content: 'Termes i condicions d\'AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Consulta els termes i condicions d\'AutoescolaTrailer per obtenir informació sobre els serveis de formació de conducció i les nostres polítiques.' });
  }

  ngOnInit() {
    this.updateMetaTagsTerms();
  }

}
