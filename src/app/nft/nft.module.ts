import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NftPageRoutingModule } from './nft-routing.module';

import { NftPage } from './nft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NftPageRoutingModule
  ],
  declarations: [NftPage]
})
export class NftPageModule {}
