import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the GameDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameDataProvider {

  constructor(public http: Http) {
    console.log('Hello GameDataProvider Provider');
  }

  public getTechnologies(): void {
    this.getJSON("technologies.json").subscribe( (data) => {
      return Object.keys(data.technologies).map(key => data.technologies[key]);
    });
  }

  // public getUnits(): Observable<any> {
  //   return this.getJSON("fakeUnits.json").subscribe( (data) => {
  //     return Object.keys(data.units).map(key => data.units[key]);
  //   });
  // }

  // public getUnits(): Observable<any>{
  //   return this.getJSON("fakeUnits.json")
  //   .map( data =>
  //   {
  //     Object.keys(data.units).map(key => data.units[key]);
  //   });
  // }

  public getJSON(fileName:string): Observable<any> {
    return this.http.get("../../assets/gameplay/"+fileName)
    .map((res:any) => res.json());
    //.catch((err:any) => Observable.throw(err.json().error));
  }
}
