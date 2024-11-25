import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPage } from './pages/main-page.component';

@NgModule({
  declarations: [MainPage],
  exports:[MainPage],
  imports: [CommonModule]
})
export class DbzModule { }
