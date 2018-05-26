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
                'Content-Type': 'application/json'
            })
    };

    getByKeyWord(keyword: any) {
        const apiURL = `${this.url}/getDutygroupByKeyword`;
        const param = JSON.stringify(keyword);
        return this.http.post<DutyGroupModel[]>(apiURL, param, this.httpOptions);
    }

    getByCon(con: any) {
        const apiURL = `${this.url}/getDutygroupByCon`;
        const param = JSON.stringify(con);
        return this.http.post<DutyGroupModel>(apiURL, param, this.httpOptions);
    }

    insByCon(Dutygroup: DutyGroupModel) {
        const apiURL = `${this.url}/insDutygroupByKeyCon`;
        const params = JSON.stringify(Dutygroup);
        return this.http.post(apiURL, Dutygroup, this.httpOptions);
    }

    updByCon(Dutygroup: DutyGroupModel) {
        const apiURL = `${this.url}/updDutygroupByCon`;
        const params = JSON.stringify(Dutygroup);
        return this.http.post(apiURL, Dutygroup, this.httpOptions);
    }

    delByCon(Dutygroup: DutyGroupModel) {
        const apiURL = `${this.url}/delDutygroupByCon`;
        const params = JSON.stringify(Dutygroup);
        return this.http.post(apiURL, params, this.httpOptions);
    }

}
