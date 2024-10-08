import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoServicoPageRoutingModule } from './tipo-servico-routing.module';
import { TipoServicoPage } from './tipo-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoServicoPage]
})
export class TipoServicoPageModule {}
