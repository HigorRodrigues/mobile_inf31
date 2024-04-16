import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  clienteForm: FormGroup | any;
  cliente = new Cliente();
  errorMessage: Array<String> | undefined;
  hasErrors: boolean | undefined;

  constructor(private alert: AlertController, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: new FormControl(this.cliente.nome,
        [Validators.required,  Validators.minLength(4)])
    })
  }

  async submit(){
    this.errorMessage = [];
    if( this.clienteForm.get("nome").hasError('required')){
      this.errorMessage.push("Nome é obrigatório.");
    }
    this.hasErrors = this.errorMessage.length > 0;
    if(!this.hasErrors){
      await this.presentAlert('Sucesso', 'Gravação bem sucedida',
        'Os dados do cliente foram gravados com sucesso', ['OK']
      )
    }
  }

  async presentAlert(header: string, subHeader: string, message: string, buttons: string[]){
    const alert = await this.alert.create({
      header,
      subHeader,
      message,
      buttons
    });
    await alert.present();
  }
}
