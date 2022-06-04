import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {

    public title: string = 'counter';
    public number : number = 0;
    public base : number = 5;
  
    add(){
        this.number = this.number + this.base ;
    }
    res(){
      this.number = this.number - this.base ;
  
    }
  }
  
