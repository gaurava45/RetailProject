import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
  <h2> {{"Hello " + name}} </h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

@Input('parentData') public name;
@Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.childEvent.emit('Hey Vishwas');
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }

}
