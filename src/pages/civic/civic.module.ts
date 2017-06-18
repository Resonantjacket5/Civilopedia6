import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CivicPage } from './civic';

@NgModule({
  declarations: [
    CivicPage,
  ],
  imports: [
    IonicPageModule.forChild(CivicPage),
  ],
  exports: [
    CivicPage
  ]
})
export class CivicPageModule {}
