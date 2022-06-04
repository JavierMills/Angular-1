import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAppComponent } from './counter-app/counter-app.component';



@NgModule({
  declarations: [
    CounterAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CounterAppComponent
  ]
})
export class CounterModule { }
