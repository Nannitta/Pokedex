import { Component, QueryList, ViewChildren, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonInfo } from 'src/models/types/types';
import { PokeApiService } from 'src/services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  @ViewChildren('pokemonContent')
  pokemonCard!: QueryList<any>
  pokemonInfo: Array<any>
  pokemonList: any
  subscription?: Subscription
  @Input() position: any
  
  constructor (private pokeApi: PokeApiService) {
    this.pokemonInfo = []
  }

  ngOnInit() {
    this.subscription = this.pokeApi.getPokemonList().subscribe(      
      data => {                        
        const dataList = data.results
        this.pokemonList = dataList;

        this.pokemonList.forEach((_: any, index: number) => {                         
          this.pokeApi.getPokemonInfo(index + 1).subscribe(
            data => {        
              this.pokemonInfo.push(data)
              this.pokemonInfo.sort((a:PokemonInfo, b:PokemonInfo) => {
                return a.id - b.id 
              })                           
            }
          )          
        })
      }
    )
  }
}


