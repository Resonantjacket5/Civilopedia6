import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/**
 * Generated class for the DistrictPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-district',
  templateUrl: 'district.html',
})
export class DistrictPage {
  private district:any;
  private keyGet:any = Object.keys;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {

    let id = this.navParams.get("districtId");

    this.gameData.getDistrict(id).subscribe((data)=>{
      this.district = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistrictPage');
  }

}
