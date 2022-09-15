import { Component, OnInit } from '@angular/core';
//import { EnterprisesService } from './service/enterprises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestCarlosCajas';

  constructor() {

  }
  ngOnInit(): void {
    
  }


  //crer un array con las opciones dle menu
  //  datosMenu = [{
  //   'titulo':' Enterprises',
  //   'icon': 'fas fa-university',
  //   'url': '',
  //   'routerLink': 'enterprises'
  // },
  // {
  //   'titulo':' Departments',
  //   'icon': 'fas fa-sitemap',
  //   'url': ''
  // },
  // {
  //   'titulo':' Employees',
  //   'icon': 'far fa-address-book',
  //   'url': ''
  // }] 
}

