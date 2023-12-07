import { Component, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeApiService } from 'src/services/poke-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonInfo, PokemonMoreInfo } from 'src/models/types/types';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.sass']
})
export class PokemonPageComponent {
  @ViewChild('pokemonInfo')
  subscription?: Subscription
  pokemonIndex: number = 0
  pokemon: PokemonInfo = {} as PokemonInfo;
  capitalLetter: string
  pokemonGif: string
  pokemonPs: number
  pokemonSpAtt: number
  pokemonAtt: number
  pokemonSpDef: number
  pokemonDef: number
  pokemonSpd: number
  pokemonMoreInfo: PokemonMoreInfo = {} as PokemonMoreInfo
  pokemonDescription: string
  pokemonHeight: number
  pokemonWeight: number
  pokemonHabitat: string

  constructor (private pokeApi: PokeApiService, private router: Router, private route: ActivatedRoute) {
    this.route.url.subscribe(segments => {
      const pathname = this.router.url;
      return this.pokemonIndex = +pathname.split('/')[2]
    })
    this.capitalLetter = ''
    this.pokemonGif = ''
    this.pokemonPs = 0
    this.pokemonSpAtt = 0
    this.pokemonAtt = 0
    this.pokemonSpDef = 0
    this.pokemonDef = 0
    this.pokemonSpd = 0
    this.pokemonDescription = ''
    this.pokemonHeight = 0
    this.pokemonWeight = 0
    this.pokemonHabitat = ''
  }

  ngOnInit() {   
    this.subscription = this.pokeApi.getPokemonInfo(this.pokemonIndex).subscribe(
      data => {
        this.pokemon = data        
        if (+this.pokemon.id < 10) {
          this.pokemon.id = '00' + this.pokemon.id
        }
        if (+this.pokemon.id >= 10 && +this.pokemon.id < 100) {
          this.pokemon.id = '0' + this.pokemon.id
        }

        this.capitalLetter = this.pokemon.name[0].toLocaleUpperCase()
        this.pokemon.name = this.capitalLetter + this.pokemon.name.slice(1)
        this.pokemonGif = this.pokemon.sprites.front_default
        this.pokemonPs = this.pokemon.stats[0].base_stat
        this.pokemonSpAtt = this.pokemon.stats[3].base_stat
        this.pokemonAtt = this.pokemon.stats[1].base_stat
        this.pokemonSpDef = this.pokemon.stats[4].base_stat
        this.pokemonDef = this.pokemon.stats[2].base_stat
        this.pokemonSpd = this.pokemon.stats[5].base_stat                      
        this.pokemonHeight = this.pokemon.height
        this.pokemonWeight = this.pokemon.weight
      }
    )

    this.subscription = this.pokeApi.getPokemonDescription(this.pokemonIndex).subscribe(
      data => {
        this.pokemonMoreInfo = data
        this.pokemonDescription = this.pokemonMoreInfo.flavor_text_entries[0].flavor_text.replace('\f', ' ')
        this.pokemonHabitat = this.pokemonMoreInfo.habitat.name[0].toLocaleUpperCase() + this.pokemonMoreInfo.habitat.name.slice(1)        
      }
    )
  }
}
