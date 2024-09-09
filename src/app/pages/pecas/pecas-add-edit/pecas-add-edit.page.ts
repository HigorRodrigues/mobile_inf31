import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Peca } from 'src/app/model/peca.model';
import { PecasService } from 'src/app/services/peca.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-pecas-add-edit',
  templateUrl: './pecas-add-edit.page.html',
  styleUrls: ['./pecas-add-edit.page.scss'],
})
export class PecasAddEditPage implements OnInit {

  private peca: Peca | any;
  public modoEdicao = false;
  public pecasForm: FormGroup | any;

  constructor(
    private pecaService : PecasService,
    private formBuilder: FormBuilder,
		private	route: ActivatedRoute,
		private	toastService:	ToastServiceService,
  ) { }

  iniciarEdicao()	{
    this.modoEdicao	=	true;
  }

  cancelarEdicao()	{
    this.pecasForm.setValue(this.peca);
    this.modoEdicao	=	false;
  }

  async	submit()	{
    await this.pecaService.update(this.pecasForm.value);
    this.peca = this.pecasForm.value
    this.toastService.presentToast('Gravação	bem	sucedida',	3000,	'top');
    this.modoEdicao	=	false;
  }

  ngOnInit() {
    const	id	=	this.route.snapshot.paramMap.get('id');
    if(id	&& Guid.isGuid(id))	{

    }
    else{
      this.peca	=	{id:	Guid.createEmpty(),	nome:	'',	valor:	0.00	};
      this.modoEdicao	=	true;
    }
    this.pecasForm	=	this.formBuilder.group({
      id:	[this.peca.id],
      nome:	[this.peca.nome,	Validators.required],
      valor:	[this.peca.valor,	Validators.required]
    });
  }

}
