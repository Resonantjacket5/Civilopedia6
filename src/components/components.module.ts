import { NgModule } from '@angular/core';
import { InfoCardComponent } from './info-card/info-card';
import { CivIconComponent } from './civ-icon/civ-icon';

import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations:[InfoCardComponent,CivIconComponent],
  imports:[IonicModule],
  exports:[InfoCardComponent,CivIconComponent]
})
export class ComponentsModule{}
