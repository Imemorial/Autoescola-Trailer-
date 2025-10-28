import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  public news: Post[] = [];
  public visibleNews: Post[] = [];
  private newsBatchSize = 4;
  private currentBatch = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    if (this.news.length > 0) return; // Evita recargar si ya hay datos
    this._apiService.getNews().subscribe({
      next: (data: Post[]) => {
        if (data) {
          this.news = data;
          this.loadMore(); 
        }
      },
      error: (err) => {
        console.error('Error al obtener noticias:', err);
      }
    });
  }

  loadMore() {
    const nextBatch = this.news.slice(this.currentBatch, this.currentBatch + this.newsBatchSize);
    this.visibleNews = [...this.visibleNews, ...nextBatch];
    this.currentBatch += this.newsBatchSize;
  }

}
