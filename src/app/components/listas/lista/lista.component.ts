/*
    ===== Centro.component.ts =====
    Autor: Juan Luis Serrano Vilchez
    Objetivo: Crear una lista de centros intercambiables
*/

// --------------------------
// IMPORTACIONES
// --------------------------
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

import { HeroeComponent } from '../../heroes/heroe/heroe.component';
import { Heroe } from '../../heroes/heroe/heroe.component';

@Component({
  selector: 'app-lista',
  // imports: [],
  standalone:false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public lista:Heroe[]=[
    { nombre: 'Goku', edad: 35 },
    { nombre: 'Vegeta', edad: 40 },
    { nombre: 'Gohan', edad: 25 },
    { nombre: 'Piccolo', edad: 50 },
    { nombre: 'Frieza', edad: 70 }
  ];
  public pila:Heroe[]=[ { nombre: 'Broly', edad: 35 },
    { nombre: 'Yamcha', edad: 45 }];

  public heroeAPila?: Heroe;
  public heroeALista?: Heroe;
  // Inicializamos el indice a 0
  public indice: number = 0;
  // Inicializacion de la lista
  public heroe?: Heroe = this.lista[this.indice];

  public sacarDeLista(){
    // Sacamos el centro de la lista y lo guardamos en la variable. El 0 se pone para coger la posicion 0 del array resultante del .splice
    this.heroeAPila=this.lista.splice(this.indice,1)[0];
    //Si esto se ha podido hacer, es que habia centros
    if (this.heroeAPila){
      this.pila.push(this.heroeAPila)
    }
    // Se ajusta el indice
    if (this.indice >= this.lista.length) {
      this.indice = this.lista.length - 1;
    }
    // Al cambiar el indice, lo enseñamos
    this.heroe = this.lista[this.indice];
  }

// Metodo para mover un centro de la pila a la lista
  public meterEnLista(){
    this.heroeALista=this.pila.pop();
    if(this.heroeALista){
      this.lista.push(this.heroeALista);
    }
  }

// Metodo para pasar al siguiente centro
  public siguiente(){
    if(this.lista.length>0){
      // Esto hace que cuando llegue al final vuelva al principio, ya que el resto de la division siempre es el mismo
      this.indice = (this.indice + 1)%this.lista.length;
      this.heroe = this.lista[this.indice];
    }
  }

// Metodo para pasar al centro anterior
 public anterior() {
    if (this.lista.length > 0) {
      this.indice = (this.lista.length + this.indice - 1) % this.lista.length;
      this.heroe = this.lista[this.indice];
    }
  }
}
