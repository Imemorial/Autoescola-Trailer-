import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../services/content/content.service';
import { NgFor, NgIf } from '@angular/common';
import { ContentItem } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent implements OnInit {

  
  images: ContentItem[] = [];
  visibleImages: ContentItem[] = [];
  isModalOpen: boolean = false;
  selectedImage: ContentItem | null = null;
  private imagesBatchSize = 4; 
  private currentBatch = 0;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    if (this.images.length > 0) return; // Evita recargar si ya hay datos
    this.contentService.getGalleryItems().subscribe({
      next: (images) => {
        if (images) {
          this.images = images;
          this.loadMore(); 
        }
      },
      error: (err) => {
        console.error('Error al obtener imágenes:', err);
      }
    });
  }

  loadMore() {
    const nextBatch = this.images.slice(this.currentBatch, this.currentBatch + this.imagesBatchSize);
    this.visibleImages = [...this.visibleImages, ...nextBatch];
    this.currentBatch += this.imagesBatchSize;
  }

  openModal(image: ContentItem): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

}
