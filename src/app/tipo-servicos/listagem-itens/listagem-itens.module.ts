import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemItensPageRoutingModule } from './listagem-itens-routing.module';

import { ListagemItensPage } from './listagem-itens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemItensPageRoutingModule
  ],
  declarations: [ListagemItensPage]
})
export class ListagemItensPageModule {}
