import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    selector: 'student-insert',
    templateUrl: 'student-insert.component.html'
})

export class StudentInsertComponent{
   student= {eId:'',name:'',email:'',phno:''};

   
}