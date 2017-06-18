import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistrictsPage } from './districts';

@NgModule({
  declarations: [
    DistrictsPage,
  ],
  imports: [
    IonicPageModule.forChild(DistrictsPage),
  ],
  exports: [
    DistrictsPage
  ]
})
export class DistrictsPageModule {}
