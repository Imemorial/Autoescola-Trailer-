import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImagesComponent } from './components/images/images.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TopComponent, ImagesComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {



}
