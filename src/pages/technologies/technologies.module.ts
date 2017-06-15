import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnologiesPage } from './technologies';

@NgModule({
  declarations: [
    TechnologiesPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnologiesPage),
  ],
  exports: [
    TechnologiesPage
  ]
})
export class TechnologiesPageModule {}
