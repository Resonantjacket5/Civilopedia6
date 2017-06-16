import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
import { TechnologyPage } from '../technology/technology';
/**
 * Generated class for the TechnologiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-technologies',
  templateUrl: 'technologies.html',
})
export class TechnologiesPage {
  technologies:any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {
    this.gameData.getJSON("technologies.json").subscribe((data)=>{
      this.technologies = Object.keys(data).map(key=>data[key]);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologiesPage');
  }

  openPage(id:string):void {
    this.navCtrl.push(TechnologyPage,{"technology":id});
  }
}
