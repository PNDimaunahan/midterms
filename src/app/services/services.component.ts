import { Injectable } from '@angular/core';
import { Employee } from '../models/models.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { EmployeeId: 1, EmployeeNumber: "2243", FirstName: "Leonardo", LastName: "Da Vinci", Birthday: new Date("2002-08-22"), Gender: "Male", PictureURL: "https://miro.medium.com/v2/resize:fit:1400/1*yBMsksuqBKoD3CpUVSkdYg.jpeg" },
    { EmployeeId: 2, EmployeeNumber: "2341", FirstName: "Plat", LastName: "Silv", Birthday: new Date("1999-08-19"), Gender: "Male", PictureURL: "https://www.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg" },
    { EmployeeId: 3, EmployeeNumber: "2832", FirstName: "Raid", LastName: "Red", Birthday: new Date("2001-11-18"), Gender: "Female", PictureURL: "https://i.pinimg.com/736x/dd/e0/fc/dde0fcc5632f23bbe3548cb94941882a.jpg" },
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(employeeId: number): Employee | undefined {
    return this.employees.find(emp => emp.EmployeeId === employeeId);
  }

  addEmployee(employee: Employee): void {
    if (!this.isEmployeeIdUnique(employee.EmployeeId)) {
      throw new Error('Employee ID must be unique.');
    }
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(emp => emp.EmployeeId === employee.EmployeeId);
    if (index === -1) {
      throw new Error('Employee not found.');
    }
    this.employees[index] = employee;
  }

  deleteEmployee(employeeId: number): void {
    const index = this.employees.findIndex(emp => emp.EmployeeId === employeeId);
    if (index === -1) {
      throw new Error('Employee not found.');
    }
    this.employees.splice(index, 1);
  }

  private isEmployeeIdUnique(employeeId: number): boolean {
    return !this.employees.some(emp => emp.EmployeeId === employeeId);
  }
}
