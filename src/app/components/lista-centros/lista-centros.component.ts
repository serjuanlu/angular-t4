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

// Importacion de la clase centro
import { Centro } from '../centros/centro/centro.component';

@Component({
  selector: 'app-lista-centros',
  standalone:false,
  templateUrl: './lista-centros.component.html',
  styleUrl: './lista-centros.component.css'
})

// --------------------------
// Componente que crea la lista
// --------------------------
export class ListaCentrosComponent {
  // Array de centros para mostrar
  public lista:Centro[]=[new Centro(
    'IES Playamar',
    'Torremolinos',
    ['Informática y Comunicaciones', 'Transporte y Mantenimiento'],
    '../assets/logo-ies-playamar.png'
  ),
  new Centro(
    'IES Jacaranda',
    'Churriana',
    ['Hostelería y Turismo'],
    '../assets/logo_iesjacaranda.png'
  ),new Centro(
    'IES Campanillas',
    'Málaga',
    ['Energías Renovables', 'Electrónica'],
    '../assets/logo-ies-campanillas.png'
  ),
  new Centro(
    'IES La Rosaleda',
    'Málaga',
    ['Mecánica', 'Automoción'],
    '../assets/logo-ies-la-rosaleda.png'
  ),
  new Centro(
    'IES El Palo',
    'Málaga',
    ['Ciencias del Deporte', 'Educación Física'],
    '../assets/logo-ies-el-palo.png'
  )
];
  // Array de centros fuera de la muestra (pila)
  public pila:Centro[]=[  new Centro(
    'IES Cartuja',
    'Granada',
    ['Sanidad', 'Administración'],
    '../assets/logo-ies-cartuja.png'
  ),
  new Centro(
    'IES Politécnico Jesús Marín',
    'Málaga',
    ['Construcción', 'Artes Gráficas'],
    '../assets/logo-ies-jesus-marin.png'
  )];

  // Centros que vamos a mover
  public centroAPila?: Centro;
  public centroALista?: Centro;
  // Inicializamos el indice a 0
  public indice: number = 0;
  // Inicializacion de la lista
  public centro?: Centro = this.lista[this.indice];

  // --------------------------
  // Metodos
  // --------------------------

// Metodo para mover un centro de la lista a la pila
  public sacarDeLista(){
    // Sacamos el centro de la lista y lo guardamos en la variable. El 0 se pone para coger la posicion 0 del array resultante del .splice
    this.centroAPila=this.lista.splice(this.indice,1)[0];
    //Si esto se ha podido hacer, es que habia centros
    if (this.centroAPila){
      this.pila.push(this.centroAPila)
    }
    // Se ajusta el indice
    if (this.indice >= this.lista.length) {
      this.indice = this.lista.length - 1;
    }
    // Al cambiar el indice, lo enseñamos
    this.centro = this.lista[this.indice];
  }

// Metodo para mover un centro de la pila a la lista
  public meterEnLista(){
    this.centroALista=this.pila.pop();
    if(this.centroALista){
      this.lista.push(this.centroALista);
    }
  }

// Metodo para pasar al siguiente centro
  public siguiente(){
    if(this.lista.length>0){
      // Esto hace que cuando llegue al final vuelva al principio, ya que el resto de la division siempre es el mismo
      this.indice = (this.indice + 1)%this.lista.length;
      this.centro = this.lista[this.indice];
    }
  }

// Metodo para pasar al centro anterior
 public anterior() {
    if (this.lista.length > 0) {
      this.indice = (this.lista.length + this.indice - 1) % this.lista.length;
      this.centro = this.lista[this.indice];
    }
  }

}
