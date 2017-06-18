import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistrictPage } from './district';

@NgModule({
  declarations: [
    DistrictPage,
  ],
  imports: [
    IonicPageModule.forChild(DistrictPage),
  ],
  exports: [
    DistrictPage
  ]
})
export class DistrictPageModule {}
