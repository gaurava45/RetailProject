import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Company } from './company';
import { Item } from './item';

export class Purchase {
    constructor(
    public id: number,
    public company: Company,
	public dateOfPurchase: Date,
	public ngbDate: NgbDateStruct,
	public ewayBillNo: string,
	public billNo: string,
	public totalAmount: number,
/* 	public description: String,
	public codeOfItem: String,
	public quantity: Number,
	public rateNet: Number,
	public amount: Number,
	public gstTax: Number */
    public items: Item[]
    ){
    }
}