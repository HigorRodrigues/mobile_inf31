import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServico } from 'src/app/model/tipo-servico.model';
import { TipoServicosServiceService } from 'src/app/services/tipo-servicos.service.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.page.html',
  styleUrls: ['./tipo-servico.page.scss'],
})
export class TipoServicoPage implements OnInit {

  public tiposServicosForm!: FormGroup;

  public tipoServico: TipoServico | any;

  public modoDeEdicao = false;

  constructor(private route: ActivatedRoute,
    private tipoServicoService: TipoServicosServiceService,
    private formBuilder: FormBuilder,
    private toastService: ToastServiceService,
    private router: Router) {

  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoServico = this.tipoServicoService.getById(id);

    this.tiposServicosForm = this.formBuilder?.group({
      id: [this.tipoServico.id],
      nome: [this.tipoServico.nome, Validators.required],
      valor: [this.tipoServico.valor, Validators.required]
    });
  }

  iniciarEdicao(){
    this.modoDeEdicao = true;
  }

  cancelarEdicao(){
    this.tiposServicosForm.setValue(this.tipoServico);
    this.modoDeEdicao = false;
  }

  submit(){
    this.tipoServicoService.update(this.tiposServicosForm.value);
    this.toastService.presentToast("Atualização bem sucedida", 3000, 'top');
    this.router.navigateByUrl('listagem-itens');
    this.modoDeEdicao = false;
  }
}
