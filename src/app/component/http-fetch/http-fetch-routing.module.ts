import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpFetchComponent } from './http-fetch.component';

const routes: Routes = [{ path: '', component: HttpFetchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpFetchRoutingModule { }
