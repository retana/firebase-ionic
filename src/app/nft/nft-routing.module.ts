import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NftPage } from './nft.page';

const routes: Routes = [
  {
    path: '',
    component: NftPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftPageRoutingModule {}
