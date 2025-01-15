import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
constructor() { }
public personajes:Personaje[]=[{
id :uuid(),
nombre:'Kokun',
fuerza:1500
},{
id :uuid(),
nombre: 'Mr Satan',
fuerza: 50
}
];
// Recoge un personaje sin su id
public onNewPersonaje(personaje:Omit<Personaje, 'id'>):void{
// Creamos un personaje nuevo con uuid
let newPersonaje:Personaje={id:uuid(), ...personaje}
this.personajes.push(newPersonaje);
console.log(newPersonaje)};


// Metodo para recibir el personaje y mostrarlo
public mostrarEliminado(personaje:Personaje):void{
console.log(`Personaje eliminado\n Nombre: ${personaje.nombre}, Fuerza:
${personaje.fuerza}`)
};
// METODO PARA BORRAR POR ID
public deletePersonajeById(id: string){
const eliminado = this.personajes.find(personaje => personaje.id ===
id);
if(eliminado){
// Igualamos la lista de personajes a la lista sin el personaje id
this.personajes=this.personajes.filter(personaje=>personaje.id!==id);
this.mostrarEliminado(eliminado);
}
}
}
