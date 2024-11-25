// Importamos
import {Component} from '@angular/core';

// creamos el componente

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}}</h1>
<hr>
<h3>Contador: {{ contador }}</h3>
 <button (click)="incrementarPor(1)">+1</button>
<button (click)="resetear()">reset</button>
<button (click)="restarPor(1)">-1</button>
    `,
    standalone: true,
})

export class ContadorComponent{
    public title = 'Contador';
    private initContador: number = 10;

    public contador:number = this.initContador
    incrementarPor(valor:number): void{
      this.contador+=1;
    }
    restarPor(valor:number): void{
      this.contador-=1;
    }
    resetear():void{
      this.contador=this.initContador;
    }
}
