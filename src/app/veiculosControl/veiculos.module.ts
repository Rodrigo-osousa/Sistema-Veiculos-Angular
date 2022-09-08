import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculo/veiculos.component';
import { SharedModule } from '../shared/shared.module';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculoFormComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VeiculosModule { }
