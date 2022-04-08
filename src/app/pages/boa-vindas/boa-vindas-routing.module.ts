import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoaVindasPage } from './boa-vindas.page';

const routes: Routes = [
  {
    path: '',
    component: BoaVindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoaVindasPageRoutingModule {}
