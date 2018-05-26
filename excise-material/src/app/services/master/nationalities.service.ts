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
    const params = JSON.stringify(keyword);
    return this.http.post<NationalityModel[]>(apiURL, params, this.httpOptions);
  }

  getByCon(con: any) {
    const apiURL = `${this.url}/getNationalityByKeyCon`;
    const params = JSON.stringify(con);
    return this.http.post<NationalityModel>(apiURL, params, this.httpOptions);
  }

  insByCon(nationality: NationalityModel) {
    const apiURL = `${this.url}/insNationalityByKeyCon`;
    const params = JSON.stringify(nationality);
    return this.http.post(apiURL, params, this.httpOptions);
  }

  updByCon(nationality: NationalityModel) {
    const apiURL = `${this.url}/updNationalityByCon`;
    const params = JSON.stringify(nationality);
    return this.http.post(apiURL, params, this.httpOptions);
  }

  delByCon(nationality: NationalityModel) {
    const apiUrl = `${this.url}/delNationalityByCon`;
    const params = JSON.stringify(nationality);
    return this.http.post(apiUrl, params, this.httpOptions);
  }
}
