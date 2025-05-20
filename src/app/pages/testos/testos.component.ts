import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { TestComponent } from './components/test/test.component';
import { DoTestComponent } from './components/do-test/do-test.component';
import { NgIf } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-testos',
  standalone: true,
  imports: [TopComponent, TestComponent, DoTestComponent, NgIf],
  templateUrl: './testos.component.html',
  styleUrl: './testos.component.scss'
})
export class TestosComponent {

  doTest: boolean = false;

  constructor(private meta: Meta, private titleService: Title) { }

  setTest(event: any) {
    this.doTest = event;
  }

  updateMetaTagsTestos() {
    this.titleService.setTitle('Prova els nostres tests a AutoescolaTrailer');
    this.meta.addTag({ name: 'description', content: 'Accedeix a les nostres pàgines de tests d\'AutoescolaTrailer a Mollerussa. Practica amb els nostres tests per preparar-te per obtenir el teu carnet de conduir.' });
    this.meta.addTag({ name: 'keywords', content: 'tests, AutoescolaTrailer, tests de conducció, pràctiques de tests, carnet de conduir, preparar tests de conducció' });
    this.meta.addTag({ property: 'og:title', content: 'Prova els nostres tests a AutoescolaTrailer' });
    this.meta.addTag({ property: 'og:description', content: 'Accedeix als tests de conducció personalitzats d\'AutoescolaTrailer a Mollerussa i prepara’t per al teu examen de conduir.' });
  }

  ngOnInit() {
    this.updateMetaTagsTestos();
  }

}
