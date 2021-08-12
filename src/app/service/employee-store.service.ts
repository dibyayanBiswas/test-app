import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmployee } from '.././model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStoreService {

  private employeeObs$: BehaviorSubject<IEmployee> = new BehaviorSubject<IEmployee>({} as any);

  isDataPresent = false;

  getEmployeeObs(): Observable<IEmployee> {
      return this.employeeObs$.asObservable();
  }

  setEmployeeObs(emp: IEmployee) {
      this.isDataPresent = true;
      this.employeeObs$.next(emp);
  }
}
