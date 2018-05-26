import { Injectable } from '@angular/core';
import { ReligionModel } from '../../models/master';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';

@Injectable()
export class ReligionsService {

  constructor(private http: HttpClient) { }

  private url = `${appConfig.apiUrl}/religion`;

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
  };

  getByKeyWord(keyword: any) {
    const apiURL = `${this.url}/getReligionbyKeyword`;
    const params = JSON.stringify(keyword);
    return this.http.post<ReligionModel[]>(apiURL, params, this.httpOptions);
  }

  getByCon(con: any) {
    const apiURL = `${this.url}/getReligionnByKeyCon`;
    const params = JSON.stringify(con);
    return this.http.post<ReligionModel>(apiURL, params, this.httpOptions);
  }

  insByCon(religion: ReligionModel) {
    const apiURL = `${this.url}/insReligionByKeyCon`;
    const params = JSON.stringify(religion);
    return this.http.post(apiURL, params, this.httpOptions);
  }

  updByCon(religion: ReligionModel) {
    const apiURL = `${this.url}/updReligionByCon`;
    const params = JSON.stringify(religion);
    return this.http.post(apiURL, params, this.httpOptions);
  }

  delByCon(religion: ReligionModel) {
    const apiURL = `${this.url}/delReligionByCon`;
    const params = JSON.stringify(religion);
    return this.http.post(apiURL, params, this.httpOptions);
  }

}
