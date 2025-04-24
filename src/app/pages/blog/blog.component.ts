import { Component, OnInit } from '@angular/core';
import { BlogsComponent } from '../../shaders/blogs/blogs.component';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent } from '../../shaders/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TopComponent, BlogsComponent, ContactComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.updateMetaTagsUltimesNoticies();
  }

  updateMetaTagsUltimesNoticies() {
    this.titleService.setTitle('Autoescola Tràiler Mollerussa - Últimes Notícies');
    this.meta.addTag({ name: 'description', content: 'Consulta les últimes notícies d\'Autoescola Tràiler Mollerussa: novetats sobre els nostres serveis, cursos, i notícies relacionades amb la conducció.' });
    this.meta.addTag({ name: 'keywords', content: 'últimes notícies autoescola, notícies Mollerussa, actualitzacions autoescola, cursos de conduir, notícies trànsit, novetats formació vial' });
    this.meta.addTag({ property: 'og:title', content: 'Autoescola Tràiler Mollerussa - Últimes Notícies' });
    this.meta.addTag({ property: 'og:description', content: 'Mantén-te al dia amb les últimes novetats d\'Autoescola Tràiler Mollerussa. Actualitzacions sobre cursos, trànsit i notícies relacionades amb la formació de conducció.' });
  }
}
