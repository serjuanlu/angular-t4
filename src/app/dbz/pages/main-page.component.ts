import { Component, OnInit } from '@angular/core';

import { Personaje } from
'../interfaces/personaje.interface';

import { DbzService } from '../services/dbz.service';

@Component({

selector: 'app-dbz-main-page',

standalone: false,

templateUrl: 'main-page.component.html'

})

export class MainPage {

// Llamamos al servicio

constructor(public dbzService: DbzService){}

// Metodo para pasarle el id recibido al servicio

public eliminarPersonaje(id: string): void {

this.dbzService.deletePersonajeById(id); }}
