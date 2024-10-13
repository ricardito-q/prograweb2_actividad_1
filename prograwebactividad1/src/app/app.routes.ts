import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },  
  { path: 'acercade', component: AboutComponent }, 
  { path: '**', component: InicioComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
