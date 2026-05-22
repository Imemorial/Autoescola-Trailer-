import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { NgFor, NgIf } from '@angular/common';
import { ContentItem } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  public news: ContentItem[] = [];
  public visibleNews: ContentItem[] = [];
  private newsBatchSize = 4;
  private currentBatch = 0;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    if (this.news.length > 0) return; // Evita recargar si ya hay datos
    this.contentService.getNewsItems().subscribe({
      next: (data) => {
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
