import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./component/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'httpfetch', loadChildren: () => import('./component/http-fetch/http-fetch.module').then(m => m.HttpFetchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
