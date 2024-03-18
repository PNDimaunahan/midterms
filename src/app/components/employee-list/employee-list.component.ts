import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { Employee } from '../../models/models.component';
import { EmployeeService } from '../../services/services.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  showDetails: boolean = false;
  employee: any; 

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  navigateToDetails(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/detail', id]);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
      this.loadEmployees();
    }
  }
}