import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';
import { NgbDate, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.css']
})
export class EditPurchaseComponent implements OnInit {

  datePipe = new DatePipe('en-US');
  constructor(
    //private ngbDateParserFormatter: NgbDateParserFormatter, 
    private _companyService: CompanyService, private _purchaseService: PurchaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.purchaseId = id;

      this._companyService.getSortedByName().subscribe(
        data => {
          this.companies = data;
        }
      );

      this._purchaseService.getByPurchaseId(this.purchaseId).subscribe(
        data => {
          console.log(data);
          this.purchaseModel = data;
          //console.log(this.purchaseModel.dateOfPurchase.toString());
          //this.purchaseModel.ngbDate = this.ngbDateParserFormatter.parse(this.dateString);
          this.purchaseModel.ngbDate = this.parse(this.purchaseModel.dateOfPurchase.toString());
          //console.log(this.purchaseModel.ngbDate);
        }
      );
    });
  }

  // I add a new item record to the form-model.
  addItem(): void {

    // CAUTION: When we output the form controls, we need to provide a unique name
    // for each input (so that it can be registered with the parent NgForm). For the
    // sake of this demo, we're going to use the current TIMPESTAMP (Date.now()) as a
    // hook into something unique about this model.
    this.purchaseModel.items.push({
      //id: Date.now(), // <--- uniqueness hook.
      id: null,
      description: null,
      codeOfItem: null,
      quantity: null,
      rateNet: null,
      amount: null,
      gstTax: null,
      purchase: null
    });

  }

  // I remove the item at the given index.
  public removeItem(index: number): void {

    this.purchaseModel.items.splice(index, 1);

  }

  parse(value: string): NgbDateStruct {
    let returnVal: NgbDateStruct;
    if (!value) {
      returnVal = null;
    } else {
      try {
        let dateParts = this.datePipe.transform(value, 'yyyy-MM-dd').split('-');
        returnVal = { year: parseInt(dateParts[0]), month: parseInt(dateParts[1]), day: parseInt(dateParts[2]) };
      } catch (e) {
        returnVal = null;
      }
    }
    return returnVal;
  }

  purchaseId;
  companies = [];

  companyHasError = false;

  validateCompany() {
    console.log(this.purchaseModel.company.name);
    if (this.purchaseModel.company.name == "") {
      this.companyHasError = true;
    } else {
      this.companyHasError = false;
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  company = new Company(null, '', null, null, null, null, null, null, null, null);
  purchaseModel = new Purchase(null, this.company, null, null, "", "", null, null);

  purchaseCreated = false;
  purchaseCreatedError = false;
  dateError = false;

  onSubmit(purchaseForm) {
    this._purchaseService.update(this.purchaseModel)
      .subscribe(
        data => {
          this.purchaseCreated = true;
          this.purchaseCreatedError = false;
          this.dateError = false;
          /*          this.purchaseModel = new Purchase(null, this.company, null, null, "", "", "", "", null, null, null, null);
                     for (const i in purchaseForm.controls) {
                      if (purchaseForm.controls[i]) {
                        purchaseForm.controls[i].markAsUntouched();
                      }
                    } */
        },
        error => {
          this.purchaseCreated = false;
          this.purchaseCreatedError = true;
          this.dateError = false;
          console.log('Error!', error);
          if (error.error != null) {
            let message = error.error.message;
            if (message.includes("java.util.Date")) {
              this.dateError = true;
            }
          }
        }
        //error => console.error('Error!', error)
      );
  }

}
