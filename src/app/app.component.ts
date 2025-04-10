import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shaders/header/header.component';
import { FooterComponent } from './shaders/footer/footer.component';
import { LoaderComponent } from './shaders/loader/loader.component';
import { Meta, Title } from '@angular/platform-browser';
import { UpComponent } from './shaders/up/up.component';
import AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    LoaderComponent, 
    UpComponent, 
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ItnovaStudio';

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTags() {
    this.titleService.setTitle('ItnovaStudio - Desarrollo Web, Software Personalizado, Ecommerce');
  
    this.meta.addTag({ name: 'description', content: 'ItnovaStudio se especializa en desarrollo web, software personalizado y soluciones ecommerce de alta calidad.' });
    this.meta.addTag({ name: 'keywords', content: 'ItnovaStudio, desarrollo web, software personalizado, ecommerce, soluciones digitales, desarrollo a medida' });
  
    this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Desarrollo Web, Software Personalizado, Ecommerce' });
    this.meta.addTag({ property: 'og:description', content: 'Descubre cómo ItnovaStudio puede ayudarte con desarrollo web, software personalizado y ecommerce.' });
  }

  ngOnInit() {
    // Inicia AOS para animaciones
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      delay: 100,
    });

    // Actualiza las meta tags
    this.updateMetaTags();
  }
}