import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    student = [];

    constructor(private hc:HttpClient){
        this.hc.get("http://localhost:8090/Student/getstudent").subscribe((data)=>{
            this.student = <any[]>data;
        })
    }
}
