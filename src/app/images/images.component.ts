import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from './image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images;
  imageView = false;
  test: string = 'test';

  constructor(private service: ImageService, private _router: Router) {
    this.images = service.getImages();
    
  }

  ngOnInit(): void {
  }

  navigateToDash() {
    // setTimeout(()=>{
      this._router.navigate(['']);
    // }, 200);
    
  }

  navigateToDetailView() {
    this._router.navigate(['details']);
  }

}
