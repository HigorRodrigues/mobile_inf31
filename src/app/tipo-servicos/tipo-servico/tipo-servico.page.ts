import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoServicosServiceService } from 'src/app/services/tipo-servicos.service.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.page.html',
  styleUrls: ['./tipo-servico.page.scss'],
})
export class TipoServicoPage implements OnInit {

  public tipoServico: any;

  constructor(private route: ActivatedRoute,
    private tipoServicoService: TipoServicosServiceService) {

  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoServico = this.tipoServicoService.getById(id);
  }

}
