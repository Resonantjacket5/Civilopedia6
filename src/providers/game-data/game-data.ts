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

  public getJSON(fileName:string): Observable<any> {
    return this.http.get("../../assets/gameplay/"+fileName)
    .map((res:any) => res.json());
    //.catch((err:any) => Observable.throw(err.json().error));
  }
}
