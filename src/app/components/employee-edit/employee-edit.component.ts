import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {
  employeeId: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(this.employeeId);
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(['/employees', this.employeeId]);
  }
}