import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
//import { TechnologyPage } from '../technology/technology';
/**
 * Generated class for the TechnologiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'technologies'
})
@Component({
  selector: 'page-technologies',
  templateUrl: 'technologies.html',
})
export class TechnologiesPage {
  technologies:any[];
  eras:Array<any>=["Ancient","Classical","Medieval","Renaissance","Industrial","Modern","Atomic","Information"];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider) {

    this.gameData.getTechnologies().subscribe((data)=>{
      this.technologies = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologiesPage');
  }

  openPage(id:string):void {
    this.navCtrl.push("technology",{"techId":id});
  }
}
