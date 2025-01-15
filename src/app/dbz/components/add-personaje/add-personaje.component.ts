import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
@Component({
selector: 'dbz-add-personaje',
standalone:false,
templateUrl: './add-personaje.component.html',
styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {
@Output()
public onNewPersonaje: EventEmitter<Omit<Personaje,'id'>>=new
EventEmitter();
public personaje:Omit<Personaje, 'id'>={
nombre: '',
fuerza: 0
};



// Creacion del metodo
public addPersonaje():void{
this.onNewPersonaje.emit(this.personaje)

this.personaje = {
nombre:'',
fuerza:0
};}}
