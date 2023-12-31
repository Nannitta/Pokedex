import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbilityInfo, PokemonInfo, PokemonList, PokemonMoreInfo } from 'src/models/types/types';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'public, max-age=31536000'
    })
  }

  getPokemonList(): Observable<any> {
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151', this.httpOptions)
  }

  getPokemonInfo(number: number): Observable<PokemonInfo> {
    return this.http.get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${number}`, this.httpOptions)
  }

  getPokemonDescription(number: number): Observable<PokemonMoreInfo> {
    return this.http.get<PokemonMoreInfo>(`https://pokeapi.co/api/v2/pokemon-species/${number}`, this.httpOptions)
  }

  getAbilityDescription(url: string): Observable<AbilityInfo> {
    return this.http.get<AbilityInfo>(url)
  }
}
