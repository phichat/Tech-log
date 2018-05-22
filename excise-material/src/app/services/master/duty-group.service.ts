import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { appConfig } from '../../config/app.config';
import { DutyGroupModel } from '../../models/master';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DutyGroupService {

   constructor(private http: HttpClient) { }

   private url = `${appConfig.apiUrl}/dutyGroup`;

   private httpOptions = {
      headers: new HttpHeaders(
         {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         })
   };

   getByKeyWord(keyword: string) {
      const apiURL = `${this.url}/getDutygroupByKeyword`;
      const param = JSON.stringify({ keyword });
      return this.http.post(apiURL, param, this.httpOptions);
   }

   getByCon(groupCode: string) {
      const apiURL = `${this.url}/getDutygroupByCon`;
      return this.http.post<DutyGroupModel[]>(apiURL, { groupCode });
   }
}
