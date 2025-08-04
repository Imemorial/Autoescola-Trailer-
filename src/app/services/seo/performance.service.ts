import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor() { }

  /**
   * Preloads critical resources
   */
  preloadCriticalResources(): void {
    const criticalResources = [
      '/assets/images/logo2.png',
      '/assets/images/home/img-1.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  /**
   * Preconnects to external domains
   */
  preconnectToExternalDomains(): void {
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://cdn-cookieyes.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('fonts.gstatic.com')) {
        link.setAttribute('crossorigin', '');
      }
      document.head.appendChild(link);
    });
  }

  /**
   * DNS prefetch for performance
   */
  dnsPrefetch(): void {
    const domains = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimizes font loading
   */
  optimizeFontLoading(): void {
    // Add font-display: swap to critical fonts
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach(link => {
      link.setAttribute('media', 'print');
      link.setAttribute('onload', "this.media='all'");
    });
  }

  /**
   * Lazy loads non-critical images
   */
  lazyLoadImages(): void {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset['src'];
          if (src) {
            img.setAttribute('src', src);
          }
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Optimizes CSS delivery
   */
  optimizeCSSDelivery(): void {
    // Inline critical CSS
    const criticalCSS = `
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      .sr-only-focusable:focus {
        position: static !important;
        width: auto !important;
        height: auto !important;
        overflow: visible !important;
        clip: auto !important;
        white-space: normal !important;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  /**
   * Optimizes JavaScript loading
   */
  optimizeJSLoading(): void {
    // Add async/defer to non-critical scripts
    const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtm"]');
    scripts.forEach(script => {
      if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
        script.setAttribute('async', '');
      }
    });
  }

  /**
   * Sets up service worker for caching
   */
  setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered successfully');
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }

  /**
   * Optimizes Core Web Vitals
   */
  optimizeCoreWebVitals(): void {
    // Optimize Largest Contentful Paint (LCP)
    this.optimizeLCP();
    
    // Optimize First Input Delay (FID)
    this.optimizeFID();
    
    // Optimize Cumulative Layout Shift (CLS)
    this.optimizeCLS();
  }

  private optimizeLCP(): void {
    // Preload LCP image
    const lcpImage = document.querySelector('img[loading="eager"]') as HTMLImageElement;
    if (lcpImage) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = lcpImage.src;
      document.head.appendChild(link);
    }
  }

  private optimizeFID(): void {
    // Defer non-critical JavaScript
    const nonCriticalScripts = document.querySelectorAll('script[data-critical="false"]');
    nonCriticalScripts.forEach(script => {
      script.setAttribute('defer', '');
    });
  }

  private optimizeCLS(): void {
    // Set explicit dimensions for images
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.setAttribute('width', '100%');
        img.setAttribute('height', 'auto');
      }
    });
  }
} 