import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';  
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-policity',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './policity.component.html',
  styleUrl: './policity.component.scss'
})
export class PolicityComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsPrivacyPolicy() {
    this.titleService.setTitle('Política de privacitat d\'AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Consulta la política de privacitat d\'AutoescolaTrailer a Mollerussa i com gestionem les teves dades personals en el procés de formació de conducció i serveis relacionats.' });
    this.meta.addTag({ name: 'keywords', content: 'política de privacitat, AutoescolaTrailer, Mollerussa, dades personals, protecció de dades, cursos de conducció, serveis de conducció' });
    this.meta.addTag({ property: 'og:title', content: 'Política de privacitat d\'AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Llegeix la nostra política de privacitat per entendre com protegim les teves dades personals en el procés d\'obtenció del carnet de conduir i altres serveis.' });
  }

  ngOnInit() {
    this.updateMetaTagsPrivacyPolicy();
  }

}
