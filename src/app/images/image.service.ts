import { Injectable } from '@angular/core';
import { ImageObject } from './imageObject';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  baseString = './assets/images/';

  image1 = new ImageObject(this.baseString + 'Lorenzito2.jpg', 'The cutest cutie');
  image2 = new ImageObject(this.baseString + 'Lorenzito1.jpg', 'The cutest cutie again');
  image3 = new ImageObject(this.baseString + 'Lorenzito3.jpg', 'The cutest cutie cutie');
  image4 = new ImageObject(this.baseString + 'Lorenzito4.jpg', 'The cutest cutie');

  getImage(imageName: string): string {
    return this.baseString + imageName + '.jpg';
  }

  getImages() {
    return [
      this.image1.source,
      this.image2.source,
      this.image3.source,
      this.image4.source
    ];
  }

  getImageObjects() {
    return [
      this.image1,
      this.image2,
      this.image3,
      this.image4
    ]
  }

  getDescriptions() {
    return [
      'The cutest cutie',
      'cutie from another angle',
      'also cutie',
      'cute cutie'
    ]
  }
}
