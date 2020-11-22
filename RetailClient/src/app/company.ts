import { Purchase } from './purchase';

export class Company {
    constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: number,
    public address: string,
    public gstn: string,
    public bankName: string,
    public bankAccNo: string,
    public bankIFSC: string,
    public purchases: Purchase[]
    ){
    }
}
