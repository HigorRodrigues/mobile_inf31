import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemItensPage } from './listagem-itens.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemItensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemItensPageRoutingModule {}
