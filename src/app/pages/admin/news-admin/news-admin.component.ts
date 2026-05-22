import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';
import { ContentItem } from '../../../interfaces/content.interfaces';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-news-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './news-admin.component.html',
  styleUrl: './news-admin.component.scss'
})
export class NewsAdminComponent implements OnInit {
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
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.isLoading = true;
    this.contentService.getNewsItems().subscribe({
      next: (items) => {
        this.items = items;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'No s\'han pogut carregar les notícies.';
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
        this.errorMessage = 'Selecciona una imatge abans de publicar.';
      }
      return;
    }

    this.isUploading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { title, description } = this.uploadForm.getRawValue();

    this.contentService.uploadItem('news', {
      title: title || '',
      description: description || '',
      file: this.selectedFile
    }).subscribe({
      next: () => {
        this.uploadForm.reset();
        this.selectedFile = null;
        this.previewUrl = '';
        this.isUploading = false;
        this.successMessage = 'Notícia publicada correctament.';
        this.loadItems();
      },
      error: (error: Error) => {
        this.isUploading = false;
        this.errorMessage = error.message || 'Error en publicar la notícia.';
      }
    });
  }

  deleteItem(item: ContentItem): void {
    if (item.source !== 'firebase') {
      this.errorMessage = 'Només es poden eliminar notícies pujades des d\'aquest panell.';
      return;
    }

    if (!confirm('Vols eliminar aquesta notícia?')) {
      return;
    }

    this.contentService.deleteItem('news', item).subscribe({
      next: () => {
        this.items = this.items.filter((entry) => entry.id !== item.id);
        this.successMessage = 'Notícia eliminada.';
      },
      error: () => {
        this.errorMessage = 'No s\'ha pogut eliminar la notícia.';
      }
    });
  }
}
