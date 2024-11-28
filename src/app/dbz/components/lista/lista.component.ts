import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'dbz-lista',
  standalone:false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input()
  public listaPersonajes:Personaje[]=[{
    nombre: 'Tenshian',
    fuerza: 1600
  },{
    nombre:"Cojan",
    fuerza:100000
  }]

}
