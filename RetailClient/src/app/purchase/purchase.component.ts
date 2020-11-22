import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Purchase} from '../purchase';
import { PurchaseService } from '../purchase.service';
import { Item } from '../item';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  company: Company;
  items: Item[];
  purchaseModel: Purchase;

  constructor(private _companyService: CompanyService, private _purchaseService: PurchaseService) { 


    this.company = new Company(null, '', '', null, '', '', '', '', '', null);
    this.items = [];
    this.purchaseModel = new Purchase(null, this.company, null, null, "", "", null, this.items);

    this.addItem();
  }

  ngOnInit(): void {
    this._companyService.getSortedByName().subscribe(
      data => {
        //console.log(data);
        this.companies = data;
        //console.log(this.companies);
      }
    );
  }

  // I add a new item record to the form-model.
	addItem() : void {
 
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
	public removeItem( index: number ) : void {
 
		this.purchaseModel.items.splice( index, 1 );
 
	}

  //companies: Company[] = [];
  //companiesData;
  companies = [];

  companyHasError = true;

  validateCompany() {
    console.log(this.purchaseModel.company.name);
    if (this.purchaseModel.company.name == "") {
      this.companyHasError = true;
    } else {
      this.companyHasError = false;
    }
  }

  purchaseCreated = false;
  purchaseCreatedError = false;
  dateError = false;

  onSubmit(purchaseForm) {
    this._purchaseService.create(this.purchaseModel)
      .subscribe(
        data => {
          this.purchaseCreated = true;
          this.purchaseCreatedError = false;
          this.dateError = false;
          this.purchaseModel = new Purchase(null, this.company, null, null, "", "", null, null);
          purchaseForm.reset();
/*           for (const i in purchaseForm.controls) {
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
