import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit, ɵɵstylePropInterpolate2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/model/employee';
import { EmployeeStoreService } from 'src/app/service/employee-store.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  constructor(private empService: EmployeeStoreService) { }

  subscription!: Subscription;
  employeeData!: IEmployee;

  ngOnInit(): void {
    this.subscription = this.empService.getEmployeeObs().subscribe(empData => {
      this.employeeData = empData;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
