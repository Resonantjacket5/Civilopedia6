import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TechnologyPage } from '../../pages/technology/technology';

import { GameDataProvider } from '../../providers/game-data/game-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
// no idea why below line works but above doesnt?
//import { Observable } from 'rxjs/Rx';




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
  category:string;
  @Input()
  id:string="unchanged";

  name:string="not loaded name";
  description:string="not loaded";
  constructor(
    public navCtrl: NavController,
    private gameData: GameDataProvider
  ) {
    console.log('Hello InfoCardComponent Component');

  }

  ngOnInit(){
    console.log(this.id);;
    console.log(this.category);
    switch(this.category)
    {

      case "technology":
        // this.gameData.getJSON("technologies.json").subscribe((data)=>{
        //   this.name = data[this.id].name;
        //   this.description = data[this.id].description;
        // });
        this.gameData.getTechnology(this.id).subscribe((data)=>{
          this.name = data.name;
          this.description = data.description;
        });
        break;
      case "tecivic":
        let s1 = this.gameData.getCivic(this.id);
        let s2 = this.gameData.getTechnology(this.id);

        // wait on both results
        Observable.forkJoin(
          s1,
          s2
        ).subscribe((arr)=>{
          //console.log(arr[0]);
          //console.log(arr[1]);
          let found:any = {};
          // civics not found
          if(arr[0]===undefined)
          {
            found = arr[1];
            this.category = "technology";
          }
          // tech not found
          else if (arr[1]===undefined)
          {
            found = arr[0];
            this.category = "civic";
          }
          else
          {
            console.error("both found error");
            throw Error("id not found in tech nor civic");
          }

          this.name = found.name;
          this.description = found.description;

        });
        break;
      case "unit":
        this.gameData.getUnit(this.id).subscribe((data)=>{
          this.name = data.name;
          this.description = data.description;
        })
        break;
      default:
        console.error("category not found",this.category);
    }

  }

  openPage()
  {
    switch(this.category)
    {
      case "technology":
        this.navCtrl.push(TechnologyPage,{"techId":this.id});
        break;
      case "civic":
        console.error("civics page not impleented in info card yet");
        break;
      default:
        console.error("category not found for opening page");
    }
  }

}
