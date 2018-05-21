import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';
import { RelationModel } from '../../models/master';

@Injectable()
export class RelationshipsService {

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
    const apiURL = `${this.url}/getRelationByKeyword`;
    const param = JSON.stringify({ keyword });
    return this.http.post<RelationModel[]>(apiURL, { keyword }, this.httpOptions);
  }

  getByCon(relationId: number, relationName: string) {
    const apiURL = `${this.url}/getRelationByKeyCon`;
    return this.http.post<RelationModel[]>(apiURL, { relationId, relationName }, this.httpOptions);
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
