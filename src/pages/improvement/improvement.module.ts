import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprovementPage } from './improvement';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ImprovementPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ImprovementPage),
  ],
  exports: [
    ImprovementPage
  ]
})
export class ImprovementPageModule {}
