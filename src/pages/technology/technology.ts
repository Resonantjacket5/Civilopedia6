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
  name: 'Kyle'
})
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  technology:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameData: GameDataProvider
  ) {
    let id = this.navParams.get("technology");
    console.log(id);
    if( id != null )
    {
      this.gameData.getJSON("technologies.json").subscribe( (data) =>{
        this.technology = data[id];
      });
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
