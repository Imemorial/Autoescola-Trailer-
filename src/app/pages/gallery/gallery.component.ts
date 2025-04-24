import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImagesComponent } from './components/images/images.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TopComponent, ImagesComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsGallery() {
    this.titleService.setTitle('Galeria d\'AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Descobreix la galeria d\'imatges d\'AutoescolaTrailer a Mollerussa. Veure el nostre equip i les instal·lacions dedicades a la formació de conducció personalitzada.' });
    this.meta.addTag({ name: 'keywords', content: 'galeria, AutoescolaTrailer, Mollerussa, imatges, conducció, formació, carnet de conduir, instal·lacions' });
    this.meta.addTag({ property: 'og:title', content: 'Galeria d\'AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Mira la nostra galeria d\'imatges d\'AutoescolaTrailer a Mollerussa i coneix les nostres instal·lacions i l\'equip que fa possible la nostra formació personalitzada.' });
  }

  ngOnInit() {
    this.updateMetaTagsGallery();
  }

}
