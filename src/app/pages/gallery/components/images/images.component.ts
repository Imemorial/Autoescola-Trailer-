import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {

  
  images: any[] = [];
  visibleImages: any[] = [];
  isModalOpen: boolean = false;
  selectedImage: any = null;
  private imagesBatchSize = 4; 
  private currentBatch = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService.getImages().subscribe((images: any) => {
      if (images) {
        this.images = images;
        this.loadMore(); 
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
