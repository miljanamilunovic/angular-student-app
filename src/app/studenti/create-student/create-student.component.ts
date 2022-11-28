import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/studentmodel';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student:Student={
    id: '',
    ime: '',
    prezime:'',
    brojIndeksa:'',
    datumRodjenja:'',
    grad: '',
    ulica: ''
  };

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  dodajStudenta(){
    this.studentService.addStudent(this.student)
    
  }
  izmeniStudenta(){}

}
