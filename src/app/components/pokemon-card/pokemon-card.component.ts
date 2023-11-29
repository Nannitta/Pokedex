import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  ngOnInit() {    
      if (this.pokemon.id < 10) {
        this.pokemon.id = '00' + this.pokemon.id
      }
      if (this.pokemon.id >= 10 && this.pokemon.id < 100) {
        this.pokemon.id = '0' + this.pokemon.id
      }
  }
}
