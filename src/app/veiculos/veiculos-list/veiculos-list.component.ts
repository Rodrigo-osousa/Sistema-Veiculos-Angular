import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss']
})
export class VeiculosListComponent implements OnInit {

  @Input() veiculos: Veiculo[] = [];

  readonly displayedColumns = ['id','veiculo','marca','ano','descricao','cor','vendido','created','updated','actions'];


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate([' '], {relativeTo: this.route})
  }

}
