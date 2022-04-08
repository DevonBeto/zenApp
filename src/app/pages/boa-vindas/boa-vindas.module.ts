import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoaVindasPageRoutingModule } from './boa-vindas-routing.module';

import { BoaVindasPage } from './boa-vindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoaVindasPageRoutingModule
  ],
  declarations: [BoaVindasPage]
})
export class BoaVindasPageModule {}
