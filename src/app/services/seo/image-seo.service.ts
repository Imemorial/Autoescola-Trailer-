import { Injectable } from '@angular/core';

export interface ImageSEOData {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

@Injectable({
  providedIn: 'root'
})
export class ImageSeoService {

  constructor() { }

  /**
   * Optimizes image attributes for SEO
   */
  optimizeImageAttributes(imageData: ImageSEOData): string {
    const attributes = [
      `src="${imageData.src}"`,
      `alt="${imageData.alt}"`
    ];

    if (imageData.title) {
      attributes.push(`title="${imageData.title}"`);
    }

    if (imageData.width) {
      attributes.push(`width="${imageData.width}"`);
    }

    if (imageData.height) {
      attributes.push(`height="${imageData.height}"`);
    }

    if (imageData.loading) {
      attributes.push(`loading="${imageData.loading}"`);
    } else {
      attributes.push('loading="lazy"');
    }

    if (imageData.decoding) {
      attributes.push(`decoding="${imageData.decoding}"`);
    } else {
      attributes.push('decoding="async"');
    }

    return attributes.join(' ');
  }

  /**
   * Generates optimized alt text for images
   */
  generateAltText(imageName: string, context: string = ''): string {
    const baseAlt = `AutoescolaTrailer Mollerussa - ${imageName}`;
    return context ? `${baseAlt} - ${context}` : baseAlt;
  }

  /**
   * Creates responsive image markup
   */
  createResponsiveImage(
    src: string,
    alt: string,
    sizes: string = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    srcset?: string
  ): string {
    const attributes = [
      `src="${src}"`,
      `alt="${alt}"`,
      `sizes="${sizes}"`,
      'loading="lazy"',
      'decoding="async"'
    ];

    if (srcset) {
      attributes.push(`srcset="${srcset}"`);
    }

    return attributes.join(' ');
  }

  /**
   * Optimizes background images for CSS
   */
  optimizeBackgroundImage(imagePath: string): string {
    return `url('${imagePath}')`;
  }

  /**
   * Creates picture element for responsive images
   */
  createPictureElement(
    sources: Array<{ srcset: string; media?: string; type?: string }>,
    fallbackSrc: string,
    alt: string
  ): string {
    let picture = '<picture>';
    
    sources.forEach(source => {
      const attributes = [`srcset="${source.srcset}"`];
      if (source.media) {
        attributes.push(`media="${source.media}"`);
      }
      if (source.type) {
        attributes.push(`type="${source.type}"`);
      }
      picture += `<source ${attributes.join(' ')}>`;
    });

    picture += `<img src="${fallbackSrc}" alt="${alt}" loading="lazy" decoding="async">`;
    picture += '</picture>';
    
    return picture;
  }
} 