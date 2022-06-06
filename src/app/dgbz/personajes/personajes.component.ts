import { Component, Input } from '@angular/core';
import {Personaje} from '../interfaces/dgbz.interface'
import { DgbzService } from '../services/dgbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
//input recibe datos de otro componente le debemos de poner la propiedad a  recibir
//  @Input() personajes : Personaje[] = []

get personajes(){
  return this.dgbzService.personajes
}

constructor(private dgbzService: DgbzService){

}
}
