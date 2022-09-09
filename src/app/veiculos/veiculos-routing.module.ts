import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculosComponent } from './veiculo/veiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: VeiculosComponent},
  { path:' ', component: VeiculoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
