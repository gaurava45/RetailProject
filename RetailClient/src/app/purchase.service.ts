import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  _url = "http://localhost:8080/purchase/";
  constructor(private _http: HttpClient) { }

  create(purchase: Purchase) {
    //console.log(purchase.ngbDate);
    purchase.dateOfPurchase = new Date(purchase.ngbDate.year, purchase.ngbDate.month - 1, purchase.ngbDate.day);
    console.log("create purchase");
    console.log(purchase);
    return this._http.post<any>(this._url + "create", purchase);
  }

  update(purchase: Purchase) {
    //console.log(purchase.ngbDate);
    purchase.dateOfPurchase = new Date(purchase.ngbDate.year, purchase.ngbDate.month - 1, purchase.ngbDate.day);
    /* let purchaseObj = new Purchase(purchase.id, null, null, null, null, null, null, null);
    for (var item of purchase.items) {
      item.purchase = purchaseObj;
    } */
    console.log("update purchase");
    console.log(purchase);
    return this._http.put<any>(this._url, purchase);
  }

  delete(id: Number) {
    //console.log(purchase.ngbDate);
    console.log(this._url + id);
    return this._http.delete<any>(this._url + id);
  }

  getByCompanyId(companyId: Number){
    return this._http.get<any>(this._url + "get/" + companyId);
  }

  getByPurchaseId(purchaseId: Number){
    return this._http.get<any>(this._url + "get/" + purchaseId);
  }
}
