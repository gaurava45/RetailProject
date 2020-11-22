import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  public companyId;
  public company: Company;
  public purchases: Purchase[];

  constructor(private _companyservice: CompanyService, 
    private _purchaseService: PurchaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.companyId = id;

      this._companyservice.getByCompanyId(this.companyId).subscribe(
        data => {
          //console.log(data);
          this.company = data;
          this.purchases = this.company.purchases;
/*           for (var val of this.purchases) {
            if (val.dateOfPurchase != null) {
              console.log(val.dateOfPurchase);
              val.ngbDate =
                new NgbDate(val.dateOfPurchase.getFullYear(), val.dateOfPurchase.getMonth() + 1, val.dateOfPurchase.getDay());
            }
          } */
        }
      );
    });
  }

  onDelete(event, purchase) {
    event.preventDefault();
    console.log("delete " + purchase.id);
    this._purchaseService.delete(purchase.id).subscribe(() => console.log("record deleted"));
    this._companyservice.getByCompanyId(this.companyId).subscribe(
        data => {
          this.company = data;
          this.purchases = this.company.purchases;
        }
      );
  }

}
