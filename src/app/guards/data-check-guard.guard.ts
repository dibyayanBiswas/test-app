import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeStoreService } from '../service/employee-store.service';

@Injectable({
  providedIn: 'root'
})
export class DataCheckGuardGuard implements CanActivate {

  constructor(private _router: Router, private empService: EmployeeStoreService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    
      if(this.empService.isDataPresent){
        return true;
      }else{
        this._router.navigateByUrl('employee');
        return false;
      }
    
  }
  
}
