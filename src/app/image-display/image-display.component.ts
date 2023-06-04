import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../images/image.service';
import { ImageObject } from '../images/imageObject';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  images: ImageObject[] = [];

  constructor(service: ImageService, private _router: Router) { 
    this.images = service.getImageObjects();
  }

  ngOnInit(): void {
  }

  navigateToDash() {
    this._router.navigate(['']);
  }

}
