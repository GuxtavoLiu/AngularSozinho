import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { GustavoComponent } from './gustavo/gustavo.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', component: GustavoComponent}
  ,{path: 'sobre', component: SobreComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
