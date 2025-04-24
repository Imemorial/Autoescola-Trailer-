import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { PaymentsTopComponent } from './components/payments-top/payments-top.component';
import { BuyComponent } from './components/buy/buy.component';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [TopComponent, PaymentsTopComponent, BuyComponent, RouterOutlet],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTagsPayments() {
    this.titleService.setTitle('Realitza el pagament per serveis d\'AutoescolaTrailer a Mollerussa');
    this.meta.addTag({ name: 'description', content: 'Realitza els pagaments de manera senzilla per cursos de conducció i serveis personalitzats d\'AutoescolaTrailer a Mollerussa.' });
    this.meta.addTag({ name: 'keywords', content: 'pagament, AutoescolaTrailer, cursos de conducció, serveis personalitzats, pagament online, Mollerussa' });
    this.meta.addTag({ property: 'og:title', content: 'Realitza el pagament per serveis d\'AutoescolaTrailer a Mollerussa' });
    this.meta.addTag({ property: 'og:description', content: 'Aprofita els nostres serveis d\'AutoescolaTrailer a Mollerussa i realitza els teus pagaments per cursos de conducció personalitzats fàcilment.' });
  }

  ngOnInit() {
    this.updateMetaTagsPayments();
  }

}
