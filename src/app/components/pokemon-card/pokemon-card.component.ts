import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon: any;
  @Input() position: any;

  @ViewChild('pokemonOnView') PokemonCardComponent: ElementRef | undefined

  isSelected: boolean
  pokemonSelected: any

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

      if(this.PokemonCardComponent instanceof ElementRef && this.PokemonCardComponent.nativeElement) {
        this.PokemonCardComponent.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest'})
      }
    } else {
      this.isSelected = false
    }
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
