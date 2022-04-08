import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boa-vindas',
  templateUrl: './boa-vindas.page.html',
  styleUrls: ['./boa-vindas.page.scss'],
})
export class BoaVindasPage implements OnInit {
  nomeUsuario = 'beto';
  constructor() { }

  ngOnInit() {
  }

}
