import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/**
 * Generated class for the ImprovementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"improvement",
  segment:"improvements/:improvementId"
})
@Component({
  selector: 'page-improvement',
  templateUrl: 'improvement.html',
})
export class ImprovementPage {

  improvement:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gameData: GameDataProvider,
  ) {

    let id = navParams.get("improvementId");
    this.gameData.getImprovement(id).subscribe((data)=>{
      this.improvement=data;
      console.log(this.improvement);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovementPage');
  }

}
