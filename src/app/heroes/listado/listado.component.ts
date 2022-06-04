import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  public heroes : string[] = ['Iroman', 'Hulk', 'Thor'];
   public heroeDelete: string ='';
 

  borrar(){

   this.heroeDelete = this.heroes.shift() || '';
   
  }



}
