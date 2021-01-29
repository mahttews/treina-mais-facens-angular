import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./ui-cliente/ui-cliente.module').then( m => m.UiClienteModule) },
  { path: 'frete', loadChildren: () => import('./ui-lojista/ui-lojista.module').then( m => m.UiLojistaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
