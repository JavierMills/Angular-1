import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dgbz.interface";

@Injectable()
 export class DgbzService {

    private _personajes: Personaje[] = [
        {
    
          nombre: 'goku',
          poder: 11000,
        },
    
        {
          nombre: 'trunks',
          poder: 9000,
        },
      ];

      get personajes(): Personaje[]{
          return [...this._personajes]
      }

      constructor(){
          console.log('Inicializando personajes');
      }

      agregarPersonaje( personaje : Personaje){
    return this._personajes.push(personaje)
      }
 }