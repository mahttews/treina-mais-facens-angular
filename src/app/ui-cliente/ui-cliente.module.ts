import { InterfaceComponent } from './interface/interface.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiClienteComponent } from './ui-cliente.component';
import { SharedModule } from '../shared-module/shared.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';

const ROUTES: Routes = [
  { path: '', component: UiClienteComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'item-details/:product', component: InterfaceComponent }
  ]},
]

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    InterfaceComponent,
    ProductItemComponent,
    UiClienteComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class UiClienteModule { }
