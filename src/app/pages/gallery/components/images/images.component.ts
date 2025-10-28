import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../../../../interfaces/api.interfaces';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent implements OnInit {

  
  images: Post[] = [];
  visibleImages: Post[] = [];
  isModalOpen: boolean = false;
  selectedImage: Post | null = null;
  private imagesBatchSize = 4; 
  private currentBatch = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    if (this.images.length > 0) return; // Evita recargar si ya hay datos
    this._apiService.getImages().subscribe({
      next: (images: Post[]) => {
        console.log('Imágenes recibidas:', images);
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

  openModal(index: number): void {
    this.selectedImage = this.images[index];
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

}
