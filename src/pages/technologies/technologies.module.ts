import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnologiesPage } from './technologies';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TechnologiesPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(TechnologiesPage),
  ],
  exports: [
    TechnologiesPage
  ]
})
export class TechnologiesPageModule {}
