import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
import { DistrictPage } from '../district/district';



/**
 * Generated class for the DistrictsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"districts"
})
@Component({
  selector: 'page-districts',
  templateUrl: 'districts.html',
})
export class DistrictsPage {

  districts:any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {

    this.gameData.getDistricts().subscribe((data)=>{
      this.districts = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistrictsPage');
  }

  openPage(id:string):void{
    this.navCtrl.push(DistrictPage,{"districtId":id})
  }
}
