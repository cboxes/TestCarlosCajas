import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/departments.model';
import { Enterprises } from 'src/app/models/enterprises.model';
import { DepartmentsService } from 'src/app/service/departments.service';
import { EnterprisesService } from 'src/app/service/enterprises.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  selectedOption = 0;
  title="Departments";
  departments: Departments[] = [];

  departments1: Departments = {
    id: '',
    created_by: '',
    created_date: '',
    modified_by: '',
    modified_date: '',
    status: false,
    description: '',
    name: '',
    phone: '',
    id_enterprise: ''
  }

  enterprises: Enterprises[] = [];

  constructor(private departmentsService: DepartmentsService,
              private dropdownservice: EnterprisesService) {  }

  ngOnInit(): void {
    this.getAllDepartments();
    this.dropdownservice.GetAllEnterprises()
    .subscribe(
      enterprise =>{
        this.enterprises = enterprise;
      }
    )
  }


  getAllDepartments() {
    this.departmentsService.GetAllDepartments()
    .subscribe( 
        response => {        
        this.departments = response;
        
        //console.log(response.length);
      }
    );
  }

  onSubmit(){

    if (this.departments1.id === ''){

      this.departmentsService.addDepartment(this.departments1)
      .subscribe(
      response => {
        this.getAllDepartments();
        this.departments1 = {
          id: '',
          created_by: '',
          created_date: '',
          modified_by: '',
          modified_date: '',
          status: false,
          description: '',
          name: '',
          phone: '',
          id_enterprise: ''
        };
        //console.log(response);
      }
    );
    } else {
      this.updateDepartments(this.departments1);


    }
    //console.log(this.enterprise1);
  }

  deleteDepartment(Id: string){
    this.departmentsService.deleteDepartment(Id)
    .subscribe(
      response => {
        this.getAllDepartments();
      }
    )

  }

  populateFormDepartment(department: Departments){
    this.selectedOption = Number(department.id_enterprise); //assign id enterprise to dropdownlist
    this.departments1 = department;
    console.log(this.selectedOption);

  }

  updateDepartments(department:Departments){
    department.id_enterprise =  this.selectedOption.toString();
    this.departmentsService.updateDepartments(department)
    .subscribe(
      response => {
        this.getAllDepartments();
      }
    )

  }
 
}
