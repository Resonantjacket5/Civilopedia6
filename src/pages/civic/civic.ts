import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/***
 * Generated class for the CivicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'civic',
  segment:'civics/:civicId'
})
@Component({
  selector: 'page-civic',
  templateUrl: 'civic.html',
})
export class CivicPage {
  civic:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider
  ) {

    let id = this.navParams.get("civicId");
    this.gameData.getCivic(id).subscribe((data)=>{
      this.civic = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CivicPage');
  }

}
