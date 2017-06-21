import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitsPage } from './units';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    UnitsPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(UnitsPage),
  ],
  exports: [
    UnitsPage
  ]
})
export class UnitsPageModule {}
