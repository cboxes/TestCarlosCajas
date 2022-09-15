import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title="Employees";
  employee: Employees[] = [];

  employee1: Employees = {
    id: '',
    created_by: '',
    created_date: '',
    modified_by: '',
    modified_date: '',
    status: true,
    age: '',
    email: '',
    name: '',
    position: '',
    surname: ''
  }


  constructor(private employeesService: EmployeesService ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeesService.GetAllEmployees()
    .subscribe( 
        response => {        
        this.employee = response;
        
        //console.log(response.length);
      }
    );
  }

  onSubmit(){

    if (this.employee1.id === ''){
      this.employeesService.addEmployee(this.employee1)
      .subscribe(
      response => {
        this.getAllEmployees();
        this.employee1 = {
          id: '',
          created_by: '',
          created_date: '',
          modified_by: '',
          modified_date: '',
          status: true,
          age: '',
          email: '',
          name: '',
          position: '',
          surname: ''
        };
        //console.log(response);
      }
    );
    } else {
      this.updateEmployees(this.employee1);


    }
    //console.log(this.enterprise1);
  }

  deleteEmployee(Id: string){
    this.employeesService.deleteEmployee(Id)
    .subscribe(
      response => {
        this.getAllEmployees();
      }
    )

  }

  populateFormEmployee(employee: Employees){
    this.employee1 = employee;

  }

  updateEmployees(employee:Employees){
    this.employeesService.updateEmployees(employee)
    .subscribe(
      response => {
        this.getAllEmployees();
      }
    )

  }



}
