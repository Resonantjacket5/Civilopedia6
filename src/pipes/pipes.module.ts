import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';

import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations:[FilterPipe],
  imports:[IonicModule],
  exports:[FilterPipe]
})
export class PipesModule{}
