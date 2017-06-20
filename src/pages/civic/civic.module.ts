import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CivicPage } from './civic';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CivicPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CivicPage),
  ],
  exports: [
    CivicPage
  ]
})
export class CivicPageModule {}
