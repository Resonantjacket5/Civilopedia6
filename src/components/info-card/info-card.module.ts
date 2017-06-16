import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoCardComponent } from './info-card';

@NgModule({
  declarations: [
    InfoCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(InfoCardComponent),
  ],
  exports: [
    InfoCardComponent
  ]
})
export class InfoCardComponentModule {}
