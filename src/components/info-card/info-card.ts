import { Component, Input } from '@angular/core';
import { GameDataProvider } from '../../providers/game-data/game-data';
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
  @Input()
  id:string="unchanged";
  name:string="not loaded name";
  description:string="not loaded";
  constructor(
    private gameData: GameDataProvider
  ) {
    console.log('Hello InfoCardComponent Component');

  }

  ngOnInit(){
    this.gameData.getJSON("technologies.json").subscribe((data)=>{
      this.name = data[this.id].name;
      this.description = data[this.id].description;
    });
  }

}
