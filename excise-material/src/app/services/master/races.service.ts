import { Injectable } from '@angular/core';
import { NationalityModel, RaceModel } from '../../models/master';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { appConfig } from '../../config/app.config';

@Injectable()
export class RacesService {

  constructor(private http: HttpClient) { }

  private url = `${appConfig.apiUrl}/race`;

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
  };

  getByKeyWord(keyword: any) {
    const apiURL = `${this.url}/getRaceByKeyword`;
    const params = JSON.stringify(keyword);
    return this.http.post<RaceModel[]>(apiURL, params, this.httpOptions);
  }

  getByCon(con: any) {
    const apiURL = `${this.url}/getRaceByKeyCon`;
    const params = JSON.stringify(con);
    return this.http.post<RaceModel>(apiURL, params, this.httpOptions);
  }

  insByCon(race: RaceModel) {
    const apiURL = `${this.url}/insRaceByKeyCon`;
    const params = JSON.stringify(race);
    return this.http.post(apiURL, race, this.httpOptions);
  }

  updByCon(race: RaceModel) {
    const apiURL = `${this.url}/updRaceByCon`;
    const params = JSON.stringify(race);
    return this.http.post(apiURL, race, this.httpOptions);
  }

  delByCon(race: RaceModel) {
    const apiURL = `${this.url}/delRaceByCon`;
    const params = JSON.stringify(race);
    return this.http.post(apiURL, params, this.httpOptions);
  }
}
