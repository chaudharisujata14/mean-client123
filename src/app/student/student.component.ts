import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any;
  constructor(private service: DataService) { }

  ngOnInit() {
   const observalbeResult = this.service.selectStudent();
   observalbeResult.subscribe(result => {
     this.students = result;
   });
  }

}
