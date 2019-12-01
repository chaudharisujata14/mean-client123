import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: any;
  constructor(private service: DataService) { }

  ngOnInit() {
  const observableResult = this.service.selectTeacher();
  observableResult.subscribe(result => {
  this.teachers = result;
  });
  }

}
