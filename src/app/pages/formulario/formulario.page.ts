import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  auxEmail = '';
  auxTel = '';

  constructor(public alertCtrl: AlertController) { }

  async dados() {
    const prompt = await this.alertCtrl.create({
      header: 'Login',
      message: '<strong>Entre na sua Conta:</strong>',

      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
        },
        {
          name: 'telefone',
          placeholder: 'Telefone',
        }
      ],

      buttons: [
        {
          text: 'Cancela',
          role: 'cancel',
          handler: () => {
            console.log('Confirma Cancelar:');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.auxEmail = 'Email: ' + data.email;
            this.auxTel = 'Tel: ' + data.telefone;
            console.log('Confirma Envio');
          }
        },
      ]
    });
    await prompt.present();
  }

  ngOnInit() {
  }



}
