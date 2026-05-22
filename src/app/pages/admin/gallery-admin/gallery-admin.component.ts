import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';
import { ContentItem } from '../../../interfaces/content.interfaces';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-gallery-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './gallery-admin.component.html',
  styleUrl: './gallery-admin.component.scss'
})
export class GalleryAdminComponent implements OnInit {
  items: ContentItem[] = [];
  isLoading = true;
  isUploading = false;
  errorMessage = '';
  successMessage = '';
  firebaseConfigured = false;
  selectedFile: File | null = null;
  previewUrl = '';

  uploadForm;

  constructor(
    private formBuilder: FormBuilder,
    private contentService: ContentService,
    private firebaseService: FirebaseService
  ) {
    this.firebaseConfigured = this.firebaseService.isConfigured();
    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.isLoading = true;
    this.contentService.getGalleryItems().subscribe({
      next: (items) => {
        this.items = items;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'No s\'han pogut carregar les imatges.';
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.selectedFile = file;
    this.previewUrl = URL.createObjectURL(file);
  }

  upload(): void {
    if (this.uploadForm.invalid || !this.selectedFile || this.isUploading) {
      this.uploadForm.markAllAsTouched();
      if (!this.selectedFile) {
        this.errorMessage = 'Selecciona una imatge abans de pujar.';
      }
      return;
    }

    this.isUploading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { title, description } = this.uploadForm.getRawValue();

    this.contentService.uploadItem('gallery', {
      title: title || '',
      description: description || '',
      file: this.selectedFile
    }).subscribe({
      next: (item) => {
        this.items = [item, ...this.items.filter((entry) => entry.id !== item.id || entry.image_url)];
        this.uploadForm.reset();
        this.selectedFile = null;
        this.previewUrl = '';
        this.isUploading = false;
        this.successMessage = 'Imatge pujada correctament.';
        this.loadItems();
      },
      error: (error: Error) => {
        this.isUploading = false;
        this.errorMessage = error.message || 'Error en pujar la imatge.';
      }
    });
  }

  deleteItem(item: ContentItem): void {
    if (item.source !== 'firebase') {
      this.errorMessage = 'Només es poden eliminar imatges pujades des d\'aquest panell.';
      return;
    }

    if (!confirm('Vols eliminar aquesta imatge?')) {
      return;
    }

    this.contentService.deleteItem('gallery', item).subscribe({
      next: () => {
        this.items = this.items.filter((entry) => entry.id !== item.id);
        this.successMessage = 'Imatge eliminada.';
      },
      error: () => {
        this.errorMessage = 'No s\'ha pogut eliminar la imatge.';
      }
    });
  }
}
