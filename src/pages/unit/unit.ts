import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';

/**
 * Generated class for the UnitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {
  unit:any=null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider
  ) {
    let id = this.navParams.get("unitId");
    console.log(id);
    if( id != null )
    {
      this.gameData.getJSON("fakeUnits.json").subscribe( (data) =>{
        this.unit = data.units[id];
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

}
