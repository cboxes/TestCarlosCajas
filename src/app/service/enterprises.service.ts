import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enterprises } from '../models/enterprises.model';


@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

baseUrl = 'https://localhost:44373/api/Enterprises'

  constructor(private http: HttpClient) { }

  //get all enterprises
  GetAllEnterprises(): Observable<Enterprises[]> {
    return this.http.get<Enterprises[]>(this.baseUrl+'/get_all_enterprise');
  }

  //get Id enterprises
  GetEnterprises(): Observable<Enterprises[]> {
    return this.http.get<Enterprises[]>(this.baseUrl+'/get enterprise');

  }

  //add enterprise
  addEnterprise(enterprise:Enterprises): Observable<Enterprises>{
    const hoy = new Date(); 
    var randNumber = Math.round(Math.random() * 1000);
    
    enterprise.created_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    enterprise.modified_date = formatDate(hoy, 'yyyy-MM-dd', 'en-US'); 
    enterprise.created_by = "Ccajas";
        
    enterprise.id= Number(randNumber.toString()).toString();
     return this.http.post<Enterprises>(this.baseUrl+'/add enterprise',enterprise);
  }

  deleteEnterprise(Id:string): Observable<Enterprises>{
   return this.http.delete<Enterprises>(this.baseUrl+'/delete enterprise/id?id=' + Id);

  }
updateEnterprises(enterprise:Enterprises): Observable<Enterprises>{
  return this.http.put<Enterprises>(this.baseUrl+'/update enterprise' , enterprise);
}


}
