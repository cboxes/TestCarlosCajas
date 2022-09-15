import { Component, OnInit } from '@angular/core';
import { Enterprises } from 'src/app/models/enterprises.model';
import { EnterprisesService } from 'src/app/service/enterprises.service';



@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  title="Enterprises";
  enterprise: Enterprises[] = [];

  enterprise1: Enterprises = {
    id: '',
    created_by: '',
    created_date: '',
    modified_by: '',
    modified_date: '',
    status: true,
    address: '',
    name: '',
    phone: ''
  }

  constructor(private enterprisesService: EnterprisesService ) {

  }

  ngOnInit(): void {
    this.getAllEnterprises();
  }

  getAllEnterprises() {
    this.enterprisesService.GetAllEnterprises()
    .subscribe( 
        response => {        
        this.enterprise = response;
        
        //console.log(response.length);
      }
    );
  }

  onSubmit(){

    if (this.enterprise1.id === ''){
      this.enterprisesService.addEnterprise(this.enterprise1)
      .subscribe(
      response => {
        this.getAllEnterprises();
        this.enterprise1 = {
          id: '',
          created_by: '',
          created_date: '',
          modified_by: '',
          modified_date: '',
          status: true,
          address: '',
          name: '',
          phone: ''
        };
        //console.log(response);
      }
    );
    } else {
      this.updateEnterprises(this.enterprise1);


    }
    //console.log(this.enterprise1);
  }

  deleteEnterprise(Id: string){
    this.enterprisesService.deleteEnterprise(Id)
    .subscribe(
      response => {
        this.getAllEnterprises();
      }
    )

  }

  populateForm(enterprise: Enterprises){
    this.enterprise1 = enterprise;

  }

  updateEnterprises(enterprise:Enterprises){
    this.enterprisesService.updateEnterprises(enterprise)
    .subscribe(
      response => {
        this.getAllEnterprises();
      }
    )

  }
}
