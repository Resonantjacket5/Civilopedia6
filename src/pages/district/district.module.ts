import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistrictPage } from './district';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DistrictPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DistrictPage),
  ],
  exports: [
    DistrictPage
  ]
})
export class DistrictPageModule {}
