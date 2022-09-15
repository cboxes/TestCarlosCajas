import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departments } from '../models/departments.model';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

baseUrl = 'https://localhost:44373/api/Departments'

  constructor(private http: HttpClient) { }

  //get all departments
  GetAllDepartments(): Observable<Departments[]> {
    return this.http.get<Departments[]>(this.baseUrl+'/get_all_department');
  }

  //get Id Departments
  GetDepartments(): Observable<Departments[]> {
    return this.http.get<Departments[]>(this.baseUrl+'/get department');

  }

  //add Departments
  addDepartment(department:Departments): Observable<Departments>{
    const hoy = new Date(); 
    var randNumber = Math.round(Math.random() * 1000);
    
    department.created_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    department.modified_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    department.created_by = "Ccajas";
        
    department.id= Number(randNumber.toString()).toString();
     return this.http.post<Departments>(this.baseUrl+'/add department',department);
  }

  deleteDepartment(Id:string): Observable<Departments>{
   return this.http.delete<Departments>(this.baseUrl+'/delete department/id?id=' + Id);

  }
updateDepartments(department:Departments): Observable<Departments>{
  //department.id_enterprise= Number(department.id_enterprise).toString();
  return this.http.put<Departments>(this.baseUrl+'/update department' , department);
}


}
