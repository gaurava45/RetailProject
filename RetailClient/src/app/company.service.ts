import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  _url = "http://localhost:8080/company/";
  constructor(private _http: HttpClient) { }

  create(company: Company){
return this._http.post<any>(this._url + "create", company);
  }

  getAll(){
    return this._http.get<any>(this._url + "all");
      }

      getSortedByName(){
        //return this._http.get<any>(this._url + "sorted/name");
        return this._http.get<any>(this._url + "sorted/name");
      }

      getByCompanyId(companyId){
        return this._http.get<any>(this._url + "get/" + companyId);
      }

}
