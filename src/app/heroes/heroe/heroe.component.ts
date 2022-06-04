import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{
public title : string = 'Heroes Marvel'
 public name :  string = 'Iroman';
 public edad: number = 1;


 getName(): string{
   return `${this.name} - ${this.edad}`
 }

 get nameCapitalizado(): string{
   return `${this.name.toUpperCase()}`
 }

  cambiarNombre(): void{
    this.name = 'Javier'
  }

  cambiarEdad(): void{
    this.edad += 1;
  }

};