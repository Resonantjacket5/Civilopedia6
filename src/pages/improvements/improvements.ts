import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/**
 * Generated class for the ImprovementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"improvements"
})
@Component({
  selector: 'page-improvements',
  templateUrl: 'improvements.html',
})
export class ImprovementsPage {

  improvements:Array<any>;
  keys:Array<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gameData: GameDataProvider
  ) {
    this.gameData.getImprovements().subscribe((data)=>{
      this.improvements = data;
      this.keys = Object.keys(data);
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovementsPage');
  }

  openPage(id:string):void {
    this.navCtrl.push("improvement",{"improvementId":id});
  }

}
