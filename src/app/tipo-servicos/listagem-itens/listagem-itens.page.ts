import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { TipoServico } from 'src/app/model/tipo-servico.model';
import { TipoServicosServiceService } from 'src/app/services/tipo-servicos.service.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-listagem-itens',
  templateUrl: './listagem-itens.page.html',
  styleUrls: ['./listagem-itens.page.scss'],
})
export class ListagemItensPage implements OnInit{

  public tipos_servicos: TipoServico[] | undefined;

  @ViewChild('slidinglist') slidingList : IonList | undefined;

  constructor(private tiposServico: TipoServicosServiceService,
    private toastService: ToastServiceService)
  { }

  ngOnInit(): void {
    this.tipos_servicos = this.tiposServico.getTiposServicos();
  }

async removerServico(tipoServico: TipoServico){
  this.tiposServico.remove(tipoServico);
  this.toastService.presentToast('Tipo de serviço removido com sucesso',
    3000, 'top');
  await this.slidingList?.closeSlidingItems();
}
}
