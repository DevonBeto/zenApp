import { Component, OnInit } from '@angular/core';
import { IonItem, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public toastCtrl: ToastController) {}

  ngOnInit(){
  }

  async chips(){
    const toast = await this.toastCtrl.create({

      message: 'Chip Hardware',
      duration: 2000
    });
    toast.present();
  }

  async velocimetro(){
    const toast = await this.toastCtrl.create({
      message: 'Velocimetro',
      duration: 2000
    });
    toast.present();
  }

  async termometro(){
    const toast = await this.toastCtrl.create({
      message: 'Termometro',
      duration: 2000
    });
    toast.present();
  }

  async telescopio() {
    const toast = await this.toastCtrl.create({
      message: 'Telescópio',
      duration: 2000
    });
    toast.present();
  }

  async controle() {
    const toast = await this.toastCtrl.create({
      message: 'Controle de Video Game',
      duration: 2000
    });
    toast.present();
  }
}
