import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;

  constructor() {
    this.sideMenu();
  }

  sideMenu() {
    this.navigate = [

      {
        title: 'Home',
        url: './home',
        icon: 'home'
      },
      {
        title: 'Formulário',
        url: './formulario',
        icon: 'clipboard'
      },
      {
        title: 'Login',
        url: './login',
        icon: 'log-in'
      },
      {
        title: 'Notifica',
        url: './notifica',
        icon: 'notifications'
      }
    ];
  }
}
