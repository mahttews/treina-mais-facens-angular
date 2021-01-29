import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLojistaComponent } from './ui-lojista.component';
import { FreteListagemComponent } from './frete-listagem/frete-listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { FreteCadastroComponent } from './frete-cadastro/frete-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

const ROUTES: Routes = [
  { path: '', component: UiLojistaComponent, children: [
    { path: '', component: FreteListagemComponent },
  ]},
]

@NgModule({
  declarations: [
    UiLojistaComponent,
    FreteCadastroComponent,
    FreteListagemComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UiLojistaModule { }
