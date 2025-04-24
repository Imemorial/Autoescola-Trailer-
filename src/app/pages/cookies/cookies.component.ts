import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';  // Import Meta and Title for SEO

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsCookies() {
    this.titleService.setTitle('Política de Cookies d\'AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Consulta la nostra política de cookies d\'AutoescolaTrailer a Mollerussa. Descobreix com utilitzem cookies per millorar l\'experiència d\'usuari al nostre lloc web.' });
    this.meta.addTag({ name: 'keywords', content: 'política de cookies, AutoescolaTrailer, Mollerussa, cookies, privacitat, ús de cookies, experiència d\'usuari' });
    this.meta.addTag({ property: 'og:title', content: 'Política de Cookies d\'AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Llegeix la nostra política de cookies per saber com utilitzem cookies per millorar la navegació al nostre lloc web i protegir la teva privacitat.' });
  }

  ngOnInit() {
    this.updateMetaTagsCookies();
  }

}
