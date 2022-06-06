import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dgbz.interface'
import { DgbzService } from '../services/dgbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'gohan',
    poder: 100,
  }

  // get personajes(): Personaje []{
  //   return this.dgbzService.personajes
  // }
 
}

