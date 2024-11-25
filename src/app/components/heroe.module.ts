/*
    ===== Centro.component.ts =====
    Autor: Juan Luis Serrano Vilchez
    Objetivo: Crear una lista de heroes intercambiables
*/

// --------------------------
// IMPORTACIONES
// --------------------------
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroes/heroe/heroe.component";
import { ListaComponent } from "./listas/lista/lista.component";

@NgModule({
  imports:[],
  providers:[],
  declarations:[HeroeComponent,ListaComponent],
  exports:[HeroeComponent,ListaComponent]
})

export class HeroeModule{

}
