import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  public news: any[] = [];
  public visibleNews: any[] = [];
  private newsBatchSize = 4;
  private currentBatch = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this._apiService.getNews().subscribe((data) => {
      if (data) {
        this.news = data;
        this.loadMore(); 
      }
    });
  }

  loadMore() {
    const nextBatch = this.news.slice(this.currentBatch, this.currentBatch + this.newsBatchSize);
    this.visibleNews = [...this.visibleNews, ...nextBatch];
    this.currentBatch += this.newsBatchSize;
  }

}
