import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInfo, PokemonList } from 'src/models/types/types';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1008')
  }

  getPokemonInfo(number: number): Observable<any> {
    return this.http.get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${number}`)
  }
}
