import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  // imports: [],
  standalone:false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})


export class HeroeComponent implements OnInit{
  public nombre: string ="Goku";
  public edad:number = 35;

  public getnombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  public getDescripcionHeroe():string{
    return`${this.nombre}-${this.edad}`;
  }
  private getNombrePrivado():string {
    return 'kakarot';
  }

  ngOnInit(): void {

  }

}

export interface Heroe {
  nombre: string;
  edad: number;
}
