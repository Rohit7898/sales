import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList:SalesPerson[]=[
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5000),
    new SalesPerson("Bhumi","Kumawat","seduif@jfsh.com",9000),
    new SalesPerson("Divya","Prajapati","seduif@jfsh.com",10000),
    new SalesPerson("Madhu","Prajapati","seduif@jfsh.com",11000),
    new SalesPerson("Chetan","Kumawat","seduif@jfsh.com",6000),
    new SalesPerson("Vivek","Verma","seduif@jfsh.com",7000),
    new SalesPerson("Akshay","Korekar","seduif@jfsh.com",10000),
    new SalesPerson("test","test","seduif@jfsh.com",5200),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5400),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5600),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5800),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5900),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",5300),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",100),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",2000),
    new SalesPerson("Rohit","Prajapati","seduif@jfsh.com",3000)
  ];


}
