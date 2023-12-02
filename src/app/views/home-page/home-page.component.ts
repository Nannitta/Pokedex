import { Component, ViewChild } from '@angular/core';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  position: string | number

  constructor(private styleService: StylesService) {
    this.position = '001'
  }

  stylesApplied() {
    return this.styleService.getStylesApply();
  }

  stylesToggled() {
    return this.styleService.toggleStyles();
  }

  toggleImage() {
    this.position = +this.position
    this.position = this.position + 1;
      if (this.position < 10) {
        this.position = '00' + this.position
      }
      else if (this.position >= 10 && this.position < 100) {
        this.position = '0' + this.position
      }
  }
}
