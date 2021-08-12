import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeStoreService } from 'src/app/service/employee-store.service';
import { IEmployee } from '../../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeStorage: EmployeeStoreService) { }

  employeeForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    org: ['', Validators.required],
    exp: ['', Validators.required],
  });

  submitted = false;
  formData!: IEmployee;

  get f() { return this.employeeForm.controls; }

  onSubmit() {
    this.submitted = true;
   
    if (this.employeeForm.invalid) {
      return;
    }

    this.formData = this.employeeForm.value;
    console.log(this.formData);
    this.employeeStorage.setEmployeeObs(this.formData);
  }

  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
}

  ngOnInit(): void {
  }

}
