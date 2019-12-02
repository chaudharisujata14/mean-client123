import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   urlStudent = 'http://172.18.5.186:9898/student';
   urlTeacher = 'http://172.18.5.186:9898/teacher';
  constructor(private http: HttpClient) { }
   selectStudent() {
     return this.http.get(this.urlStudent);
   }
   selectTeacher() {
    return this.http.get(this.urlTeacher);
  }

  insertStudent(student) {
    return this.http.post(this.urlStudent, student);
  }
  insertTeacher(teacher) {
   return this.http.post(this.urlTeacher, teacher);
  }

 updateStudent(student) {
  return this.http.put(this.urlStudent + '/' + student.rollno, student);
}
updateTeacher(teacher) {
 return this.http.put(this.urlTeacher + '/' + teacher.id, teacher);
}

deleteStudent(rollno) {
  return this.http.delete(this.urlStudent + '/' + rollno);
}
deleteTeacher(id) {
 return this.http.delete(this.urlTeacher + '/' + id);
}

}
