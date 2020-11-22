import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Company } from './company';
import { Purchase } from './purchase';

export class Item {
	constructor(
	public id: number,
	public description: string,
	public codeOfItem: string,
	public quantity: number,
	public rateNet: number,
	public amount: number,
	public gstTax: number,
	public purchase: Purchase 
	){

	}
}
