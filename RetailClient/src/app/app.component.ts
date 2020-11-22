import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Retail";

constructor(){
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

  //userModel = new User('', '', null, '', '', '', '', '');

  /* topicHasError = false;

  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  } */
  
  //submitted = false;

  /* companyCreated = false;
  companyCreatedError = false;

  onSubmit(userForm){
    //this.submitted = true;
    //console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => {
        this.companyCreated = true;
        this.companyCreatedError = false;
        this.userModel = new User('', '', null, '', '', '', '', '');
        for (const i in userForm.controls) {
          if (userForm.controls[i]) {
            userForm.controls[i].markAsUntouched();}
          }
      },
      error => {
        this.companyCreated = false;
        this.companyCreatedError = true;
      }
      //error => console.error('Error!', error)
    );

  } */
}
