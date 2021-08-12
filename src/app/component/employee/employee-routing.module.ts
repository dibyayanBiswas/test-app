import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCheckGuardGuard } from 'src/app/guards/data-check-guard.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'details', component: EmployeeDetailsComponent, canActivate: [DataCheckGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
