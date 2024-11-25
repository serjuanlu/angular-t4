/*
    ===== Centro.component.ts =====
    Autor: Juan Luis Serrano Vilchez
    Objetivo: Crear dos centros intercambiables
*/


// --------------------------
// IMPORTACIONES
// --------------------------
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// --------------------------
// CODIGO
// --------------------------

// La clase Centro
export class Centro {
  // Declaración de propiedades privadas
  private _nombre: string;
  private _localidad: string;
  private _familias: string[];
  private _logo: string;

  // Constructor para inicializar las propiedades
  constructor(
    nombre: string,
    localidad: string,
    familias: string[],
    logo: string
  ) {
    this._nombre = nombre;
    this._localidad = localidad;
    this._familias = familias;
    this._logo = logo;
  }

  // Getters del centro (acceden a las propiedades privadas)
  public get nombre(): string {
    return this._nombre;
  }
  public get localidad(): string {
    return this._localidad;
  }
  public get familias(): string[] {
    return this._familias;
  }
  public get logo(): string {
    return this._logo;
  }

  // Método para obtener el nombre en mayúsculas
  public getCentroMayus(): string {
    return this._nombre.toUpperCase();
  }
}



// Declaracion del componente
@Component({
  selector: 'app-centro',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './centro.component.html',
  styleUrl: './centro.component.css'
})


// La clase centroComponent
export class CentroComponent implements OnInit{
  // El array de centros directamente con el constructor
  centros: Centro[] = [
    new Centro(
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
    ),
  ]
// Inicializamos el centro actual como la primera posición del array
  centroActual:Centro=this.centros[0];


  //Metodo para intercambiar el centro, tiene que ir aqui
  cambiarCentro():void{
// Dependiendo del centro, cambia al otro
    if (this.centroActual==this.centros[0]){
      this.centroActual=this.centros[1];
    }else{
      this.centroActual=this.centros[0]
    }
  }
  // Metodo para poner el centro actual en mayuscula, como no hemos creado un atributo en la clase centro, tiene que ir dentro del componente
  public getCentroMayus():string{
    return this.centroActual.nombre.toUpperCase();
  }
  public constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
