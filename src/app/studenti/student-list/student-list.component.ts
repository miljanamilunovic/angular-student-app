import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/studentmodel';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students:Student[] =[]
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe((studentiSaAPIja) => {
      this.students = studentiSaAPIja;
      console.log(this.students);
      });
  }
  deleteStudentById( id: string, index:number){
    if (confirm('Are you sure?')){
      this.studentService.deleteById(id);
      this.students.splice(index,1)
    }

  }
  

}
