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

  getByKeyWord(keyword: string) {
    const apiURL = `${this.url}/getRaceByKeyword`;
    const param = JSON.stringify({ keyword });
    return this.http.post<RaceModel[]>(apiURL, { keyword }, this.httpOptions);
  }

  getByCon(raceId: number, raceNameTh: string) {
    const apiURL = `${this.url}/getRaceByKeyCon`;
    return this.http.post<RaceModel[]>(apiURL, { raceId, raceNameTh }, this.httpOptions);
  }

  insByCon(race: RaceModel) {
    const apiURL = `${this.url}/insRaceByKeyCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }

  updByCon(race: RaceModel) {
    const apiURL = `${this.url}/updRaceByCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }
}
