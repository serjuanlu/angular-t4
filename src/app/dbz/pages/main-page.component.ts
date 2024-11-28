import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: 'main-page.component.html'
})

export class MainPage  {
  public personajes:Personaje[]=[{
    nombre:'Kokun',
    fuerza:1500
  },{
    nombre: 'Mr Satan',
    fuerza: 50
  }
];

public onNewPersonaje(personaje:Personaje):void{
  console.log('MainPage')
  console.log(personaje)
}

}
