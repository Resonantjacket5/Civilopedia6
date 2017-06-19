import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the GameDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameDataProvider {

  constructor(
    public http: Http,
    public platform: Platform
  ) {
    console.log('Hello GameDataProvider Provider');
  }

  public getTechnology(techId:string):Observable<any>{
    return this.getJSON("technologies2.json").map((techs)=>{
      return techs[techId];
    });
  }

  public getTechnologies(): Observable<Array<any>> {
    return this.getJSON("technologies2.json").map((rawData)=>{
      return Object.keys(rawData).map(key => rawData[key]);
    });
  }

  public getCivic(civicId:string):Observable<any>{
    return this.getJSON("civics.json").map((civics)=>{
      return civics[civicId];
    });
  }

  public getCivics():Observable<Array<any>>{
    return this.getJSON("civics.json").map((rawData)=>{
      return Object.keys(rawData).map(key => rawData[key]);
    });
  }

  public getUnit(unitId:string): Observable<any>{
    return this.getJSON("units2.json").map((units)=>{
      return units[unitId];
    });
  }

  public getUnits(): Observable<Array<any>> {
    return this.getJSON("units2.json").map((rawData)=>{
      //convert to array
       return Object.keys(rawData).map(key=>rawData[key]);
    });
  }

  public getDistrict(districtId:string): Observable<any>{
    return this.getJSON("infrastructure.json").map((rawData)=>{
      console.log(rawData.districts);
      return rawData.districts[districtId];
    });
  }

  public getDistricts(): Observable<Array<any>> {
    return this.getJSON("infrastructure.json").map((rawData)=>{
      return Object.keys(rawData.districts).map(key=>
      {
        return rawData.districts[key];
      });
    });
  }

  public getImprovement(improvementId:string):Observable<any>{
    return this.getJSON("infrastructure.json").map((rawData)=>{
      return rawData.improvements[improvementId];
    })
  }

  public getImprovements(): Observable<any> {
    return this.getJSON("infrastructure.json").map((rawData)=>{
      return rawData.improvements
      // return Object.keys(rawData.improvements).map(key=>
      // {
      //   return rawData.improvements[key];
      // });
    });
  }

  public getJSON(fileName:string): Observable<any> {
    if(this.platform.is('android'))
    {
      console.log("is android");
      return this.http.get("../www/assets/gameplay/"+fileName)
      .map((res:any) => res.json());
    }
    else
    {
      console.log("is not android");
      return this.http.get("../../assets/gameplay/"+fileName)
      .map((res:any) => res.json());
    }

    //.catch((err:any) => Observable.throw(err.json().error));
  }


  static toArray(obj:Object):Array<any>{
    return Object.keys(obj).map(key=>obj[key]);
  }
}
