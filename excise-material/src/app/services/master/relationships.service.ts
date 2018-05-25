import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';
import { RelationModel } from '../../models/master';
import { NgForm } from '@angular/forms';

@Injectable()
export class RelationshipsService {

  constructor(private http: HttpClient) { }

  private url = `${appConfig.apiUrl}/relation`;

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
  };

  getByKeyWord(keyword: any) {
    const apiURL = `${this.url}/getRelationByKeyword`;
    return this.http.post<RelationModel[]>(apiURL, keyword, this.httpOptions);
  }

  getByCon(con: any) {
    const apiURL = `${this.url}/getRelationByKeyCon`;
    return this.http.post<RelationModel[]>(apiURL, con, this.httpOptions);
  }

  insByCon(race: RelationModel) {
    const apiURL = `${this.url}/insRelationByKeyCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }

  updByCon(race: RelationModel) {
    const apiURL = `${this.url}/updRelationByCon`;
    return this.http.post(apiURL, race, this.httpOptions);
  }

}
