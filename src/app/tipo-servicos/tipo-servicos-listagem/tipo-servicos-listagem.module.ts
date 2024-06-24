import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServicosListagemPageRoutingModule } from './tipo-servicos-listagem-routing.module';

import { TipoServicosListagemPage } from './tipo-servicos-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServicosListagemPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoServicosListagemPage]
})
export class TipoServicosListagemPageModule {}


