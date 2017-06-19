import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnologyPage } from './technology';
//import { InfoCardComponentModule } from '../../components/info-card/info-card.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TechnologyPage,
  ],
  imports: [
    //InfoCardComponentModule,
    ComponentsModule,
    IonicPageModule.forChild(TechnologyPage),
  ],
  exports: [
    TechnologyPage
  ]
})
export class TechnologyPageModule {}
