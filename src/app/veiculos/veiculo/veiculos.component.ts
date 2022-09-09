import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VeiculosService } from '../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos$: Observable< Veiculo[] >;


  displayedColumns = ['id','veiculo','marca','ano','descricao','cor','vendido','created','updated','actions'];


  constructor(
    private  veiculosService: VeiculosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.veiculos$ = this.veiculosService.listVeiculos()
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

  onAdd() {
    this.router.navigate([' '], {relativeTo: this.route})
  }


 }
