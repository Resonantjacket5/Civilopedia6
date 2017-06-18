import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';
import { UnitsPage } from '../pages/units/units';
import { UnitPage } from '../pages/unit/unit';

import { TechnologiesPage } from '../pages/technologies/technologies';
import { TechnologyPage } from '../pages/technology/technology';

import { DistrictsPage } from '../pages/districts/districts';
import { DistrictPage } from '../pages/district/district';

import { CivicsPage } from '../pages/civics/civics';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{title: string, component?:any}> = [
    { title: 'Home', component: HomePage },
    { title: 'Units', component: UnitsPage },
    { title: 'Technologies', component: TechnologiesPage },
    { title: 'Districts', component: DistrictsPage },
  ];

  @ViewChild(Nav) nav: Nav;


  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
    //deeplinks: Deeplinks
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // deeplinks.routeWithNavController(this.nav,{
      //   '/technologies':TechnologiesPage,
      //   '/technology/:technologyId':TechnologyPage,
      //   '/units':UnitsPage,
      //   '/units/:unitId':UnitPage
      // })
      // .subscribe((match)=>{
      //   console.log('Successfully routed',match);
      // },(nomatch)=>{
      //   console.warn('Unmatched route', nomatch);
      // });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    console.log(page);
  }
}
