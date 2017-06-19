import { Input, Component } from '@angular/core';

/**
 * Generated class for the CivIconComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'civ-icon',
  templateUrl: 'civ-icon.html'
})
export class CivIconComponent {
  @Input()
  category:string;
  @Input()
  id:string;


  constructor() {
    console.log('Hello CivIconComponent Component');
  }

}
