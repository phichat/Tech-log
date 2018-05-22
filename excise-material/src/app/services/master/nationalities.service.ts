import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';
import { NationalityModel } from '../../models/master/nationality-model';

@Injectable()
export class NationalitiesService {

  constructor(private http: HttpClient) { }

  private url = `${appConfig.apiUrl}/nationality`;

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
  };

  getByKeyWord(keyword: string) {
    const apiURL = `${this.url}/getNationalityByKeyword`;
    const param = JSON.stringify({ keyword });
    return this.http.post<NationalityModel[]>(apiURL, { keyword }, this.httpOptions);
  }

  getByCon(nationalityCode: string, nationalityTH: string, nationalityEN: string) {
    const apiURL = `${this.url}/getNationalityByKeyCon`;
    return this.http.post<NationalityModel[]>(apiURL, { nationalityCode, nationalityTH, nationalityEN }, this.httpOptions);
  }

  insByCon(nationality: NationalityModel) {
    const apiURL = `${this.url}/insNationalityByKeyCon`;
    return this.http.post(apiURL, nationality, this.httpOptions);
  }

  updByCon(nationality: NationalityModel) {
    const apiURL = `${this.url}/updNationalityByCon`;
    return this.http.post(apiURL, nationality, this.httpOptions);
  }
}
