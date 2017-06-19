import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UnitsPage } from '../pages/units/units';
import { UnitPage } from '../pages/unit/unit';


import { TechnologiesPage } from '../pages/technologies/technologies';
import { TechnologyPage } from '../pages/technology/technology';


import { BuildingPage } from '../pages/building/building';
import { DistrictsPage } from '../pages/districts/districts';
import { DistrictPage } from '../pages/district/district';


import { InfoCardComponent } from '../components/info-card/info-card';

import { GameDataProvider } from '../providers/game-data/game-data';
import { TestComponent } from '../components/test/test';
import { CivIconComponent } from '../components/civ-icon/civ-icon';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    /*
    UnitsPage,
    UnitPage,
    TechnologiesPage,
    TechnologyPage,
    BuildingPage,
    DistrictsPage,
    DistrictPage,*/
    //InfoCardComponent,
    //TestComponent,
    //CivIconComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp
      //, {locationStrategy: 'hash'}
    //, {
    //   links:[
    //
    //     { component: TechnologiesPage, segment: 'technologies' },
    //     { component: TechnologyPage, segment: 'technologies/:techId' },
    //     { component: UnitsPage, segment:'units' },
    //     { component: UnitPage, segment: 'units/:unitId' },
    //     { component: DistrictsPage, segment: 'districts' },
    //     { component: DistrictPage, segment: 'districts/:districtId'}
    //
    //   ]
    // }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    /*UnitsPage,
    UnitPage,
    TechnologiesPage,
    TechnologyPage,
    BuildingPage,
    DistrictsPage,
    DistrictPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Deeplinks,
    //{provide: APP_BASE_HREF, useValue: "/"},
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameDataProvider
  ]
})
export class AppModule {}
