import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/**
 * Generated class for the CivicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"civics"
})
@Component({
  selector: 'page-civics',
  templateUrl: 'civics.html',
})
export class CivicsPage {
  civics:any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {
    this.gameData.getCivics().subscribe((data)=>{
      this.civics = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CivicsPage');
  }

  openPage(id:string):void{
    this.navCtrl.push("civic",{"civicId":id});
  }
}
