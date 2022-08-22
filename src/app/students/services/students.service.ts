
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly API = 'api/listStudents';

  constructor(private httpClient: HttpClient) { }

  listStudents() {
    return this.httpClient.get<Student[]>(this.API)
    .pipe(
      first(),
      delay(150),
      tap(students => console.log(students))
    );
  }
}
