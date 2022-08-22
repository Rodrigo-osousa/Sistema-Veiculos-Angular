import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students$: Observable< Student[] >;

  displayedColumns = ['name','age'];

//  studentsService: StudentsService;

  constructor(
    private  studentsService: StudentsService,
    public dialog: MatDialog
    ) {

    this.students$ = this.studentsService.listStudents()
    .pipe(
      catchError(error => {
        this.onError('Error wen find data');
        return of([])})
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
