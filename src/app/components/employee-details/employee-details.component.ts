import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(this.employeeId);
  }
}
