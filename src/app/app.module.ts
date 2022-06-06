import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DgbzModule } from './dgbz/dgbz.module';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
    
  ],
  
  imports: [
    BrowserModule,
    DgbzModule
    
    
  ],
  exports:[],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
