import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-http-fetch',
  templateUrl: './http-fetch.component.html',
  styleUrls: ['./http-fetch.component.sass']
})
export class HttpFetchComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient) { }

  users!: IUser[];
  subscription!: Subscription;
  error!: Error;

  ngOnInit(): void {
    
  }

  fetch(): void {
    this.subscription =  this.http.get<any>('https://gorest.co.in/public/v1/users', {responseType: 'json'}).subscribe((userData: any) => {
      this.users = userData?.data;
    },
    error => {
      console.log(error);
      this.error = error;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
