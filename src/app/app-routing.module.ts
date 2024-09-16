import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tipo-servicos-listagem',
    loadChildren: () => import('./tipo-servicos/tipo-servicos-listagem/tipo-servicos-listagem.module').then( m => m.TipoServicosListagemPageModule)
  },
  {
    path: 'listagem-itens',
    loadChildren: () => import('./tipo-servicos/listagem-itens/listagem-itens.module').then( m => m.ListagemItensPageModule)
  },

  {
    path: 'tipo-servico/:id',
    loadChildren: () => import('./tipo-servicos/tipo-servico/tipo-servico.module').then( m => m.TipoServicoPageModule)
  },
  {
    path: 'pecas-add-edit/:id',
    loadChildren: () => import('./pages/pecas/pecas-add-edit/pecas-add-edit.module').then( m => m.PecasAddEditPageModule)
  },
  {
    path: 'pecas-listagem',
    loadChildren: () => import('./pages/pecas/pecas-listagem/pecas-listagem.module').then( m => m.PecasListagemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    FormBuilder, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class AppRoutingModule { }
