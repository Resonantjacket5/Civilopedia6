import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprovementsPage } from './improvements';

@NgModule({
  declarations: [
    ImprovementsPage,
  ],
  imports: [
    IonicPageModule.forChild(ImprovementsPage),
  ],
  exports: [
    ImprovementsPage
  ]
})
export class ImprovementsPageModule {}
