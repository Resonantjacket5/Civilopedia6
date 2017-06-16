import { Component } from '@angular/core';

/**
 * Generated class for the InfoCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'info-card',
  templateUrl: 'info-card.html'
})
export class InfoCardComponent {

  text: string;

  constructor() {
    console.log('Hello InfoCardComponent Component');
    this.text = 'Hello World';
  }

}
