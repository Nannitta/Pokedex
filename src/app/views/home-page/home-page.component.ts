import { Component } from '@angular/core';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  position: string | number
  pokemonLength: number = 0
  
  constructor(private styleService: StylesService) {
    this.position = '001'
  }

  getPokemonListLength(length: number) {
    this.pokemonLength = length
    console.log(this.pokemonLength);
  }

  stylesApplied() {
    return this.styleService.getStylesApply();
  }

  stylesToggled() {
    return this.styleService.toggleStyles();
  }
  
  toggleImage(direction: string) {
    this.position = +this.position
    if (direction === 'up') {
      if (this.position > 1) {
        this.position = this.position - 1
      }
      if (this.position === 1) {
        this.position = this.position = 1
      }
    } else if (direction === 'down' && this.position < this.pokemonLength) {
      this.position = this.position + 1 
    }
    
    if (this.position < 10) {
      this.position = '00' + this.position
    } else if (this.position >= 10 && this.position < 100) {
      this.position = '0' + this.position
    }    
  }
}
