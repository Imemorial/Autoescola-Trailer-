import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {

  public blogs: Post[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    if (this.blogs.length > 0) return; // Evita recargar si ya hay datos
    this._apiService.getNews().subscribe({
      next: (data: Post[]) => {
        if (data) {
          this.blogs = data;
        }
      },
      error: (err) => {
        console.error('Error al obtener blogs:', err);
      }
    });
  }

}
