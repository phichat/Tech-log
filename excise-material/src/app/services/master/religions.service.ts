import { Injectable } from '@angular/core';
import { ReligionModel } from '../../models/master';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';

@Injectable()
export class ReligionsService {

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
    const apiURL = `${this.url}/getReligionbyKeyword`;
    const param = JSON.stringify({ keyword });
    return this.http.post<ReligionModel[]>(apiURL, { keyword }, this.httpOptions);
  }

  getByCon(religionId: number, religionNameTh: string, religionNameEn: string) {
    const apiURL = `${this.url}/getReligionnByKeyCon`;
    return this.http.post<ReligionModel[]>(apiURL, { religionId, religionNameTh, religionNameEn }, this.httpOptions);
  }

  insByCon(race: ReligionModel) {
    const apiURL = `${this.url}/insReligionByKeyCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }

  updByCon(race: ReligionModel) {
    const apiURL = `${this.url}/updReligionByCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }


}
