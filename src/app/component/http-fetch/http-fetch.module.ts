import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpFetchRoutingModule } from './http-fetch-routing.module';
import { HttpFetchComponent } from './http-fetch.component';
import { KeyPipe } from 'src/app/pipes/key.pipe';


@NgModule({
  declarations: [
    HttpFetchComponent,
    KeyPipe
  ],
  imports: [
    CommonModule,
    HttpFetchRoutingModule
  ]
})
export class HttpFetchModule { }
