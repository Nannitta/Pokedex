import { Component, Input } from '@angular/core';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon: any;
  @Input() position: any;

  isSelected: boolean

  constructor(private styleService: StylesService) {
    this.isSelected = false
  }

  stylesApplied() {
    return this.styleService.getStylesApply();
  }

  toggleImage() {
    this.styleService.toggleStyles();
    this.styleService.toggleImage();
  }

  ngOnChanges() {   
    if (this.pokemon.id === this.position.toString()) {
      this.isSelected = true
    } else {
      this.isSelected = false
    }

    console.log(this.pokemon.id, 'id');
    console.log(this.position, 'position');
  }
  
  ngOnInit() {
    if (this.pokemon.id < 10) {
      this.pokemon.id = '00' + this.pokemon.id
    }
    if (this.pokemon.id >= 10 && this.pokemon.id < 100) {
      this.pokemon.id = '0' + this.pokemon.id
    }
    
    this.pokemon.id = this.pokemon.id.toString();

    if (this.pokemon.id === '001') {
      this.isSelected = true
    }      
    }
}
