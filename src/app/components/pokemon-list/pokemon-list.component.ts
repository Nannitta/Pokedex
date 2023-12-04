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
  pokemonInfo: Array<PokemonInfo>
  pokemonList: any
  subscription?: Subscription
  @Input() position: any
  @Input() pokemonSearch: Array<PokemonInfo>
  @Output() pokemonLength = new EventEmitter<number>();
  @Output() allPokemon = new EventEmitter<any[]>();
  
  constructor (private pokeApi: PokeApiService) {
    this.pokemonInfo = []
    this.pokemonSearch = []
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

              this.pokemonLength.emit(this.pokemonList.length);            
              this.allPokemon.emit(this.pokemonInfo);                      
            }
          )          
        })
      }
      )
      this.pokemonSearch = this.pokemonInfo
    }

    ngOnChanges() {
      this.pokemonLength.emit(this.pokemonSearch.length);            
      this.allPokemon.emit(this.pokemonInfo);   
    }
}


