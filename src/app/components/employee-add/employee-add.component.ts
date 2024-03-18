import { Component,OnInit } from '@angular/core';
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee = {
    employeeId: 0,
    employeeNumber: '',
    firstname: '',
    lastname: '',
    birthday: new Date(),
    gender: '',
    pictureURL: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = {
      employeeId: 0,
      employeeNumber: '',
      firstname: '',
      lastname: '',
      birthday: new Date(),
      gender: '',
      pictureURL: ''
    };
  }
}