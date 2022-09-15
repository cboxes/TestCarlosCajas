import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

baseUrl = 'https://localhost:44373/api/Employees'

  constructor(private http: HttpClient) { }

  //get all enterprises
  GetAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.baseUrl+'/get_all_employee');
  }

  //get Id enterprises
  GetEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.baseUrl+'/get employee');

  }

  //add enterprise
  addEmployee(employee:Employees): Observable<Employees>{
    const hoy = new Date(); 
    var randNumber = Math.round(Math.random() * 1000);
    
    employee.created_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    employee.modified_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    employee.created_by = "Ccajas";
        
    employee.id= Number(randNumber.toString()).toString();
     return this.http.post<Employees>(this.baseUrl+'/add employee',employee);
  }

  deleteEmployee(Id:string): Observable<Employees>{
   return this.http.delete<Employees>(this.baseUrl+'/delete employee/id?id=' + Id);

  }
updateEmployees(employee:Employees): Observable<Employees>{
  return this.http.put<Employees>(this.baseUrl+'/update employee' , employee);
}

}
