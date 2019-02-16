import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';
import { MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    CreateEmployeeComponent, 
    ListEmployeeComponent
  ],
  imports: [
    EmployeeRoutingModule,
    SharedModule ,
    MatIconModule
  ]
})
export class EmployeeModule { }
