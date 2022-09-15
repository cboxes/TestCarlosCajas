import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';

//Navigator routes
const routes: Routes = [
  { path: '', redirectTo: 'enterprises', pathMatch: 'full'},
  { path: 'enterprises', component: EnterprisesComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
