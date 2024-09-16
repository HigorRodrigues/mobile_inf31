import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { PecasService } from 'src/app/services/peca.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-pecas-listagem',
  templateUrl: './pecas-listagem.page.html',
  styleUrls: ['./pecas-listagem.page.scss'],
})
export class PecasListagemPage implements OnInit {

  public pecas: any;
  @ViewChild('slidingList') slidingList: IonList | any;

  constructor(
    private pecasService: PecasService,
    private toastService: ToastServiceService
  ) { }

  ngOnInit() {
    this.pecasService.getAll().then(pecas => {
      this.pecas = pecas
    });
  }

  idAsString(id: Guid): string {
    const idConvertido = JSON.parse(JSON.stringify(id));
    return idConvertido.value
  }

}
