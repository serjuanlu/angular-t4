import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// import { ContadorComponent } from "./components/contador/contador.component";
import { CentroComponent } from "./components/centros/centro/centro.component";
import { ListaCentrosComponent } from './components/lista-centros/lista-centros.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { HeroeModule } from './components/heroe.module';
import { DbzModule } from './dbz/dbz.module';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeroeModule,DbzModule]
})
export class AppComponent {
  public title = 'Mi primera app de angular';
  public contador: number = 10;

  incrementarPor(): void{
    this.contador+=1;
  }
  restarPor(): void{
    this.contador-=1;
  }
  resetear():void{
    this.contador=10;
  }
}
