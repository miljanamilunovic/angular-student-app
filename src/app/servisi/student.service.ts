import { Injectable } from '@angular/core';
import { Student } from '../model/studentmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Student[]>(
      'https://6009e7ab778d1a0017793292.mockapi.io/student'
    );
  }
  deleteById( id: string){
    return this.httpClient.delete
    ('https://6009e7ab778d1a0017793292.mockapi.io/student' + id);
  }
  addStudent (student:Student){
    return this.httpClient.post<Student>
    ('https://6009e7ab778d1a0017793292.mockapi.io/student', student);
  }
}
