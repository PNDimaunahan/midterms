import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  editedEmployee: Employee;
  employeeId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    this.editedEmployee = this.employeeService.getEmployeeById(this.employeeId);
  }

  editEmployee(): void {
    this.employeeService.updateEmployee(this.editedEmployee);
  }
}