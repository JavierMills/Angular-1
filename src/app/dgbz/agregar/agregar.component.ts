import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dgbz.interface';
import { DgbzService } from '../services/dgbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {

  @Input() public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  constructor(private dgbzServide : DgbzService){

  }
 //Emite un valor o una funcion de este componente que para que el padre lo reciba

//  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    //valodamos cuasndo nombre no tenga nada
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }

    //emitimos hacia el componente padre
    // this.onNewCharacter.emit( this.nuevo);
    this.dgbzServide.agregarPersonaje(this.nuevo);

    //empujqmos el nuevom personaje al array de personajes
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
