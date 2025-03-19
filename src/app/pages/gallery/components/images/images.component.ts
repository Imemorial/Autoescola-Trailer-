import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {

  images : any [] = [];

  constructor (private _apiService : ApiService) {}

  ngOnInit() {

    this._apiService.getData().subscribe((images : any) => {

      console.log(images);

      if(images)
          this.images = images;

    });
  }

}
