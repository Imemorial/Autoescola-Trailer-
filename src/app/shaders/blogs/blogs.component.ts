import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { NgFor, NgIf } from '@angular/common';
import { ContentItem } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {

  public blogs: ContentItem[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    if (this.blogs.length > 0) return; // Evita recargar si ya hay datos
    this.contentService.getNewsItems().subscribe({
      next: (data) => {
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
