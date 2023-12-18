import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { PokemonInfo } from 'src/models/types/types';
import { StylesService } from 'src/services/styles.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  position: string | number
  pokemonLength: number
  allPokemon: PokemonInfo[]
  pokemonSearch: PokemonInfo[]
  pokemonGif: string
  isSearch: boolean
  pressButton: any

  data = {
    searchValue: ''
  }
  
  constructor(private styleService: StylesService, private changeDetectorRef: ChangeDetectorRef) {
    this.position = '001'
    this.pokemonLength = 0
    this.allPokemon = []
    this.pokemonSearch = []
    this.pokemonGif = '../../assets/images/pokeballGif.gif'
    this.isSearch = false
  }

  @HostListener('window:keydown', ['$event'])
  pressKeyDown (event: KeyboardEvent) {
    if(event.key === 'ArrowDown') {
      this.toggleImage('down')
      const soundPressButton: HTMLMediaElement = new Audio()
      soundPressButton.src = '../../assets/sounds/buttonSound.mp3'
      soundPressButton.volume = 0.05
      soundPressButton.play()
    }
    if(event.key === 'ArrowUp') {
      this.toggleImage('up')
      const soundPressButton: HTMLMediaElement = new Audio()
      soundPressButton.src = '../../assets/sounds/buttonSound.mp3'
      soundPressButton.volume = 0.05
      soundPressButton.play()
    }
    this.updatePokemonGift(this.pokemonSearch)
  }
  
  getPokemonListLength(length: number) {
    this.pokemonLength = length
  }
  
  getAllPokemon(allPokemon: PokemonInfo[]) {  
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
        const soundPressButton: HTMLMediaElement = new Audio()
        soundPressButton.src = '../../assets/sounds/buttonSound.mp3'
        soundPressButton.volume = 0.05
        soundPressButton.play()
      }
      if (this.position === 1) {
        this.position = this.position = 1
      }
    } else if (direction === 'down' && this.position < this.pokemonLength) {
      this.position = this.position + 1
      const soundPressButton: HTMLMediaElement = new Audio()
      soundPressButton.src = '../../assets/sounds/buttonSound.mp3'
      soundPressButton.volume = 0.05
      soundPressButton.play() 
    }
    
    if (this.position < 10) {
      this.position = '00' + this.position
    } else if (this.position >= 10 && this.position < 100) {
      this.position = '0' + this.position
    }
  }
  
  onChangeInput(newValue: string) {
    this.data.searchValue = newValue.trim().toLocaleLowerCase()
    this.pokemonSearch = []
    this.position = 1       
    
    this.allPokemon.forEach((pokemon: PokemonInfo) => {
      if (pokemon.name.includes(this.data.searchValue)) {       
        this.pokemonSearch.push(pokemon)
      }
    })

    this.isSearch = true
  }

  updatePokemonGift(pokemonArray: PokemonInfo[]) {
    if (+this.position > 0) {
      const selectedPokemon = pokemonArray[+this.position - 1];
      if (selectedPokemon && selectedPokemon.sprites.versions?.['generation-v']['black-white'].animated) {       
        if (selectedPokemon.sprites.versions?.['generation-v']['black-white'].animated.front_default) {
          this.pokemonGif = selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;        
        } else {
          this.pokemonGif = selectedPokemon.sprites.front_default
        }
      } 
    }    
  }
  
  ngDoCheck() {
    if (this.pokemonSearch.length > 0) {           
      this.updatePokemonGift(this.pokemonSearch);
    }
  }

  ngAfterViewChecked() {        
    if (this.allPokemon.length > 0 && !this.isSearch) {     
      this.updatePokemonGift(this.allPokemon);
      this.changeDetectorRef.detectChanges();
    }
  }
}
