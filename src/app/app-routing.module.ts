import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
