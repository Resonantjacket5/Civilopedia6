import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingsPage } from './buildings';

@NgModule({
  declarations: [
    BuildingsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingsPage),
  ],
  exports: [
    BuildingsPage
  ]
})
export class BuildingsPageModule {}
