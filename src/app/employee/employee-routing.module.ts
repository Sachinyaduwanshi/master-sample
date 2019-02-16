import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee.component';
import { CreateEmployeeComponent } from './create-employee.component';

const routes: Routes = [ 
  //{
  //   path: 'employees', children: [
        {path: '', component: ListEmployeeComponent},
        {path: 'create', component: CreateEmployeeComponent},
        {path: 'edit/:id', component: CreateEmployeeComponent},
//      ]
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
