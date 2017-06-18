import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuildingPage } from '../building/building';
/**
 * Generated class for the BuildingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"buildings"
})
@Component({
  selector: 'page-buildings',
  templateUrl: 'buildings.html',
})
export class BuildingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingsPage');
  }

}
