import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriasComponent } from './materias/materias.component';
import { MateriasFormComponent } from './materias-form/materias-form.component';
import { MateriasResolver } from './guards/materias.resolver';

const routes: Routes = [
  {path: '', component: MateriasComponent},
  {path: 'new', component: MateriasFormComponent, resolve: {materia: MateriasResolver}},
  {path: 'edit/:id', component: MateriasFormComponent, resolve: {materia: MateriasResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
