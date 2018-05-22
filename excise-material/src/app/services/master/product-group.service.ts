import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../config/app.config';
import { ProductGroupModel } from '../../models/master/product-group-model';

@Injectable()
export class ProductGroupService {

   constructor(private http: HttpClient) { }

   private url = `${appConfig.apiUrl}/dutyGroup`;

   private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

   getByCon(groupCode: string) {
      const apiURL = `${this.url}/getNoticeProductgroupByCon`;
      const param = JSON.stringify({ 'keyword': '' });
      return this.http.post(apiURL, param, this.httpOptions);
   }
}
