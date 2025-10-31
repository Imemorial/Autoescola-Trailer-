import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTags() {
    this.titleService.setTitle('404 - Pàgina no trobada | AutoescolaTrailer');
    this.meta.addTag({ name: 'description', content: 'La pàgina que busques no existeix. Torna a l\'inici o explora els nostres serveis d\'autoescola a Mollerussa.' });
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }

}

