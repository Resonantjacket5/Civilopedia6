import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
import { UnitPage } from '../unit/unit';
/**
 * Generated class for the UnitsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"units"
})
@Component({
  selector: 'page-units',
  templateUrl: 'units.html',
})
export class UnitsPage {
  units:any = [
    { name: "Warrior", description: "Weak ancient era Melee unit"},
    { name: "Slinger", description: "Primitive ranged unit which slings rocks"}
  ];
  units2:any;





  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {
      //https://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array

    //console.log(this.gameData.getJSON('fakeUnits.json'));
    //this.gameData.getUnits().subscribe( data => {console.log(data)});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitsPage');

    this.gameData.getUnits().subscribe((data2)=>{
      console.log(data2);
      this.units = data2;
    });


    // subscribe( (data) =>{
    //   this.units = Object.keys(data.units).map(key=>data.units[key]);
    // });
  }

  openPage(id:string):void
  {
    this.navCtrl.push("unit",{"unitId":id});
  }
}
