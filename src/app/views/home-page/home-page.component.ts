import { Component } from '@angular/core';
import { PokemonInfo } from 'src/models/types/types';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  position: string | number
  pokemonLength: number = 0
  allPokemon: any
  pokemonSearch: PokemonInfo[]

  data = {
    searchValue: ''
  }
  
  constructor(private styleService: StylesService) {
    this.position = '001'
    this.pokemonSearch = []
  }

  getPokemonListLength(length: number) {
    this.pokemonLength = length
  }

  getAllPokemon(allPokemon: any[]) {
    this.allPokemon = allPokemon
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
  
  onChangeInput(newValue: string) {
    this.data.searchValue = newValue
    this.pokemonSearch = []       
    
    this.allPokemon.forEach((pokemon: PokemonInfo) => {
      if (pokemon.name.includes(this.data.searchValue)) {       
        this.pokemonSearch.push(pokemon)
        console.log(this.allPokemon);
      }
    })
  }
}
