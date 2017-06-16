import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UnitsPage } from '../pages/units/units';
import { UnitPage } from '../pages/unit/unit';
import { TechnologiesPage } from '../pages/technologies/technologies';
import { TechnologyPage } from '../pages/technology/technology';
import { GameDataProvider } from '../providers/game-data/game-data';
import { InfoCardComponent } from '../components/info-card/info-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UnitsPage,
    UnitPage,
    TechnologiesPage,
    TechnologyPage,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {locationStrategy: 'hash'}, {
      links:[
        { component: UnitsPage, segment:'units' },
        { component: UnitPage, segment: 'units/:unitId' },
        { component: TechnologiesPage, name: 'Technologies', segment: 'technologies' },
        { component: TechnologyPage, segment: 'technologies/:techId' }

      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UnitsPage,
    UnitPage,
    TechnologiesPage,
    TechnologyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameDataProvider
  ]
})
export class AppModule {}
