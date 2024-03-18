import { Injectable} from '@angular/core';
import { Employee } from '../models/models.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(employeeId: number): Employee | undefined {
    return this.employees.find(emp => emp.employeeId === employeeId);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(emp => emp.employeeId === employee.employeeId);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(employeeId: number): void {
    this.employees = this.employees.filter(emp => emp.employeeId !== employeeId);
  }
}
