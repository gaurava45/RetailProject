import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private _companyService: CompanyService){
    /* if (this.userModel["topic"] == 'default') {
      this.topicHasError = true;
   } else {
      this.topicHasError = false;
    } */
    //alert(this.userModel["topic"]);
    //alert(this.topicHasError);
  }
  
    /* title = 'examples';
    name = "Vishwas";
    message;
  
    topics = ['Angular', 'React', 'Vue']; */
  
    companyModel = new Company(null, '', null, null, null, null, null, null, null, null);
  
    /* topicHasError = false;
  
    validateTopic(value) {
      if (value == 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    } */
    
    //submitted = false;
  
    companyCreated = false;
    companyCreatedError = false;
  
    onSubmit(companyForm){
      //this.submitted = true;
      //console.log(this.userModel);
      this._companyService.create(this.companyModel)
      .subscribe(
        data => {
          this.companyCreated = true;
          this.companyCreatedError = false;
          this.companyModel = new Company(null, '', null, null, null, null, null, null, null, null);
          for (const i in companyForm.controls) {
            if (companyForm.controls[i]) {
              companyForm.controls[i].markAsUntouched();}
            }
        },
        error => {
          this.companyCreated = false;
          this.companyCreatedError = true;
        }
        //error => console.error('Error!', error)
      );
  
    }

}
