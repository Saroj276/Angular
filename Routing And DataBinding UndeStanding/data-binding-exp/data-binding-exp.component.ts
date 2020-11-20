import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-exp',
  templateUrl: './data-binding-exp.component.html',
  styleUrls: ['./data-binding-exp.component.css']
})
export class DataBindingExpComponent implements OnInit {

  //4-way data binding possible in angular
  //#1
  title = '1-Data binding example using String Interpolation';
  otpt:any;
  //#2 property Data binding
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png"; 

  //#3 Event Binding
  onSave($event:any){    
    console.log("Save button is clicked!", $event);   
    this.otpt="Save button is clicked!"; 
  }   
  
  //#4 Two way data binding [(ngModel)]

  fullName: string = "Two way data binding"; 

  constructor() { }
  ngOnInit() {
  }

}
