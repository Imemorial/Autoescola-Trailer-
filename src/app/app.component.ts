import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shaders/header/header.component';
import { FooterComponent } from './shaders/footer/footer.component';
import { LoaderComponent } from './shaders/loader/loader.component';
import { UpComponent } from './shaders/up/up.component';
import AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from './services/seo/seo.service';
import { PerformanceService } from './services/seo/performance.service';

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

  title = 'AutoescolaTrailer Mollerussa';

  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) { }

  ngOnInit() {
    // Inicia AOS per a animacions
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      delay: 100,
    });

    // Initialize performance optimizations
    this.initializePerformanceOptimizations();

    // El SEO service s'encarrega automàticament de gestionar les meta tags
    // segons la ruta actual
  }

  private initializePerformanceOptimizations(): void {
    // Preload critical resources
    this.performanceService.preloadCriticalResources();

    // Preconnect to external domains
    this.performanceService.preconnectToExternalDomains();

    // DNS prefetch
    this.performanceService.dnsPrefetch();

    // Optimize font loading
    this.performanceService.optimizeFontLoading();

    // Optimize CSS delivery
    this.performanceService.optimizeCSSDelivery();

    // Optimize JavaScript loading
    this.performanceService.optimizeJSLoading();

    // Optimize Core Web Vitals
    this.performanceService.optimizeCoreWebVitals();

    // Setup service worker for caching
    this.performanceService.setupServiceWorker();

    // Lazy load images after page load
    setTimeout(() => {
      this.performanceService.lazyLoadImages();
    }, 100);
  }
}