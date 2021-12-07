import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cont:string='';
  name:string = '';
  urlImage:string='';
  urlArea:string='';
  attack:string='';
  specialAttack:string='';
  defense:string='';
  ability1:string='';
  ability2:string='';
  type:string='';
  weight:number=0;
  //evolucion del prokemon
  //evo:string='https://pokeapi.co/api/v2/evolution-chain/'
  id:number=0;
  evolucion:string='';
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {

  }

  searchPokemon(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any)=>{
      console.log(data);
      this.id = data.id;
      this.urlImage = data.sprites.front_default;
      this.urlArea = data.location_area_encounters;
      this.ability1 = data.abilities[0].ability.name;
      this.ability2 = data.abilities[1].ability.name;
      this.type = data.types[0].type.name;
      this.attack = data.stats[1].base_stat;
      this.defense = data.stats[2].base_stat;
      this.specialAttack = data.stats[3].base_stat;
      this.cont = '2';
      this.weight = data.weight;
      //this.evolucion = this.evo+this.id;
      //this.type = data.typestype.name;
      this.pokemonService.getEvolucion(this.id).subscribe((info:any)=>{
        console.log(info);
        //this.evolucion = info.id[this.id].chain.evolves_to.species.name;
      });
    });
  }

  /*evolucionPokemon(){
    this.pokemonService.getEvolucion(this.id).subscribe((data:any)=>{

    });
  }*/

}
