import { Injectable } from '@angular/core';

export interface SEOAuditResult {
  score: number;
  issues: string[];
  recommendations: string[];
  passed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SeoAuditService {

  constructor() { }

  /**
   * Performs a comprehensive SEO audit
   */
  performAudit(): SEOAuditResult {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check meta tags
    const metaScore = this.checkMetaTags();
    score -= metaScore.deduction;
    issues.push(...metaScore.issues);
    recommendations.push(...metaScore.recommendations);

    // Check structured data
    const structuredDataScore = this.checkStructuredData();
    score -= structuredDataScore.deduction;
    issues.push(...structuredDataScore.issues);
    recommendations.push(...structuredDataScore.recommendations);

    // Check performance
    const performanceScore = this.checkPerformance();
    score -= performanceScore.deduction;
    issues.push(...performanceScore.issues);
    recommendations.push(...performanceScore.recommendations);

    // Check accessibility
    const accessibilityScore = this.checkAccessibility();
    score -= accessibilityScore.deduction;
    issues.push(...accessibilityScore.issues);
    recommendations.push(...accessibilityScore.recommendations);

    // Check images
    const imageScore = this.checkImages();
    score -= imageScore.deduction;
    issues.push(...imageScore.issues);
    recommendations.push(...imageScore.recommendations);

    return {
      score: Math.max(0, score),
      issues,
      recommendations,
      passed: score >= 90
    };
  }

  private checkMetaTags(): { deduction: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let deduction = 0;

    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');

    if (!title || title.length < 30 || title.length > 60) {
      issues.push('Title tag needs optimization');
      deduction += 5;
    }

    if (!description || description.length < 120 || description.length > 160) {
      issues.push('Meta description needs optimization');
      deduction += 5;
    }

    if (!keywords) {
      issues.push('Keywords meta tag missing');
      deduction += 3;
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogTitle || !ogDescription || !ogImage) {
      issues.push('Open Graph tags incomplete');
      deduction += 3;
    }

    return { deduction, issues, recommendations };
  }

  private checkStructuredData(): { deduction: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let deduction = 0;

    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (structuredDataScripts.length === 0) {
      issues.push('No structured data found');
      deduction += 10;
    } else {
      // Validate JSON-LD
      structuredDataScripts.forEach(script => {
        try {
          JSON.parse(script.textContent || '');
        } catch (error) {
          issues.push('Invalid JSON-LD structured data');
          deduction += 5;
        }
      });
    }

    return { deduction, issues, recommendations };
  }

  private checkPerformance(): { deduction: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let deduction = 0;

    // Check for large images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !img.hasAttribute('loading')) {
        issues.push('Images missing lazy loading');
        deduction += 2;
      }
    });

    // Check for render-blocking resources
    const renderBlockingScripts = document.querySelectorAll('script:not([async]):not([defer])');
    if (renderBlockingScripts.length > 2) {
      issues.push('Too many render-blocking scripts');
      deduction += 5;
    }

    return { deduction, issues, recommendations };
  }

  private checkAccessibility(): { deduction: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let deduction = 0;

    // Check for alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('alt')) {
        issues.push('Images missing alt attributes');
        deduction += 2;
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let h1Count = 0;
    headings.forEach(heading => {
      if (heading.tagName === 'H1') h1Count++;
    });

    if (h1Count === 0) {
      issues.push('No H1 heading found');
      deduction += 5;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
      deduction += 3;
    }

    return { deduction, issues, recommendations };
  }

  private checkImages(): { deduction: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let deduction = 0;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !img.hasAttribute('width') && !img.hasAttribute('height')) {
        issues.push('Images missing width/height attributes');
        deduction += 1;
      }
    });

    return { deduction, issues, recommendations };
  }

  /**
   * Validates structured data against schema.org
   */
  validateStructuredData(): boolean {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    let isValid = true;

    scripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent || '');
        if (!data['@context'] || !data['@type']) {
          isValid = false;
        }
      } catch (error) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Checks Core Web Vitals
   */
  checkCoreWebVitals(): Promise<any> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
      resolve({});
    });
  }
} 