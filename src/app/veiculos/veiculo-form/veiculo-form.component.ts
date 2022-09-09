import { VeiculosService } from '../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private service: VeiculosService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      veiculo: [null],
      marca: [null],
      descricao: [null],
      cor: [null],
      ano: [null],
      vendido: [null]

    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSucess(), error => this.onError());

  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('New Veiculo add!', '', {duration: 5000});
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Error when save Veiculo!', '', {duration: 5000});
  }

}
