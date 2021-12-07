import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl:string = "https://pokeapi.co/api/v2/pokemon"
  urlevo:string= "https://pokeapi.co/api/v2/evolution-chain"
  constructor(private http:HttpClient) { }

  getPokemon(name:string){
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  getEvolucion(id:any){
    return this.http.get(`${this.urlevo}/${id}`);
  }
}
