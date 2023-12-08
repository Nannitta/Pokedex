import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { PokemonInfo } from 'src/models/types/types';
import { StylesService } from 'src/services/styles.service';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonInfo | null
  @Input() position: number | string
  @Input() index: number

  @ViewChild('pokemonOnView') PokemonCardComponent: ElementRef | undefined

  isSelected: boolean
  imageUrl: string

  constructor(private styleService: StylesService, private _router: Router) {
    this.pokemon = null
    this.position = 1
    this.index = 0
    this.isSelected = false
    this.imageUrl = ''
  }

  stylesApplied() {
    return this.styleService.getStylesApply();
  }

  toggleImage() {
    this.styleService.toggleStyles();
    this.styleService.toggleImage();
  }

  onRedirect(position: any) {
    if (this.pokemon && position)
    this._router.navigate(['/pokemon', +this.pokemon.id]);
  }

  ngOnChanges() { 
    if (this.index === +this.position - 1) {
      this.isSelected = true

      if(this.PokemonCardComponent instanceof ElementRef && this.PokemonCardComponent.nativeElement) {
        this.PokemonCardComponent.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest'})
      }
    } else {
      this.isSelected = false
    }

    if(this.pokemon) {
      this.imageUrl = this.pokemon.sprites.front_default
    }
  }
  
  ngOnInit() {
    if (this.pokemon) {     
      if (typeof this.pokemon.id === 'string' && this.pokemon.id[0] === '0') {
        return
      }
      if (+this.pokemon.id < 10) {
        this.pokemon.id = '00' + this.pokemon.id
      }
      if (+this.pokemon.id >= 10 && +this.pokemon.id < 100) {
        this.pokemon.id = '0' + this.pokemon.id
      }
      
      this.pokemon.id = this.pokemon.id.toString();
      
      if (this.pokemon.id === '001') {
        this.isSelected = true
      }      
    }
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isSelected = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    if (this.pokemon) {
      if (this.index !== +this.position - 1) {       
        this.isSelected = false;
      }
    }
  }
}
