import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  private applystyles = false;
  private showImage = false;

  getStylesApply() {
    return this.applystyles;
  }

  toggleStyles() {
    this.applystyles = !this.applystyles;
  }
  
  toggleImage() {
    this.showImage = !this.showImage;
  }

  constructor() { }
}
