import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nomeUsuario = 'beto';
  senhaUsuario = '123';

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }


  entrar(campoLogin: string, campoSenha: string){
    let nome: string;
    let senha: string;
    let verifica: boolean;

    // eslint-disable-next-line prefer-const
    nome = campoLogin;
    // eslint-disable-next-line prefer-const
    senha = campoSenha;

    // eslint-disable-next-line prefer-const
    verifica = this.verificaSenha(nome, senha);

    if (verifica === true) {
      this.navCtrl.navigateForward('/boa-vindas');
    }
    else {
      this.mostrarAlert();
    }
  }
  verificaSenha(campoLogin: string, campoSenha: string) {
    if (campoLogin === this.nomeUsuario && campoSenha === this.senhaUsuario) {
      return true;
    }
    else {
      return false;
    }
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      message: '<strong>Senha ou Usuário Inválidos</strong>!!!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
      ]
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);

}
}
