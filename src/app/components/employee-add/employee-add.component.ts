import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  
  newEmployee: Employee = {
    EmployeeId: 0,
    EmployeeNumber: '',
    FirstName: '',
    LastName: '',
    Birthday: new Date(),
    Gender: '',
    PictureURL: ''
  };
  addedEmployee: Employee | undefined;
  successMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.addedEmployee = { ...this.newEmployee };
    this.successMessage = 'Employee added successfully.';
    this.clearForm();
  }

  clearForm(): void {
    this.newEmployee = {
      EmployeeId: 0,
      EmployeeNumber: '',
      FirstName: '',
      LastName: '',
      Birthday: new Date(),
      Gender: '',
      PictureURL: ''
    };
  }

}