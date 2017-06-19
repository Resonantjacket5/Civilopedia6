import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';
/**
 * Generated class for the TechnologyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'technology',
  segment:'technologies/:techId'
})
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  technology:any;

  techString:string = "technology";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider
  ) {
    let id = this.navParams.get("techId");
    console.log(id);
    if( id != null )
    {
      this.gameData.getTechnology(id).subscribe((data)=>{
        this.technology = data;
      })
    }
    else
    {
      console.error("tech id not found");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologyPage');
  }

}
