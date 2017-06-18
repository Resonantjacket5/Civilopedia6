import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CivicsPage } from './civics';

@NgModule({
  declarations: [
    CivicsPage,
  ],
  imports: [
    IonicPageModule.forChild(CivicsPage),
  ],
  exports: [
    CivicsPage
  ]
})
export class CivicsPageModule {}
