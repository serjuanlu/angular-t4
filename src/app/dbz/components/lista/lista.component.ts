import { Component, EventEmitter, Input, Output } from
'@angular/core';

import { Personaje } from
'../../interfaces/personaje.interface';

@Component({

selector: 'dbz-lista',

standalone:false,

templateUrl: './lista.component.html',

styleUrl: './lista.component.css'

})

export class ListaComponent {

// Recoje la lista

@Input()

public listaPersonajes:Personaje[]=[];

@Output() onEliminar = new EventEmitter<string>();


// Ahora simplemente emitimos el id del personaje a eliminar

public eliminarPersonaje(id: string): void {

this.onEliminar.emit(id);

}

}
