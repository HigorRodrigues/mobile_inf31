import { Injectable } from '@angular/core';
import { TipoServico } from '../model/tipo-servico.model';

@Injectable({
  providedIn: 'root'
})
export class TipoServicosServiceService {

  private tipos_servicos: TipoServico[] = [
    { id: 1, nome: "Alinhamento", valor: 12.34},
    { id: 2, nome: "Alinhamento 2", valor: 12.34},
    { id: 3, nome: "Alinhamento 3", valor: 12.34},
    { id: 4, nome: "Alinhamento 4", valor: 12.34},
  ];

  constructor() { }

  private getIndexOfElement(id: number): number {
    return this.tipos_servicos.indexOf(this.getById(id));
  }

  getTiposServicos(): TipoServico[] {
    return this.tipos_servicos;
  }

  getById(id: number): TipoServico {
    const tipoServicoSelecionado = this.tipos_servicos.filter(
      tipoServico => tipoServico.id === id
    );

    return tipoServicoSelecionado[0];
  }

  remove(tipoServico: TipoServico){
    this.tipos_servicos.splice
      (this.getIndexOfElement(tipoServico.id), 1);
  }

  update(tipoServico: any){
    this.tipos_servicos[this.getIndexOfElement(tipoServico.id)] = tipoServico;
    console.log(this.tipos_servicos)
  }
}
