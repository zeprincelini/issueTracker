import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  sharedData = [{
    name: "alfred",
    desc: "ui is not responsive on screen below 576px",
    assign: "Frontend Engineer",
    priority: "Low"
  },
  {
    name: "john",
    desc: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Lorem
     IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem 
     IpsumIpsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
    assign: "Backend Engineer",
    priority: "medium"
  },
  {
    name: "bob",
    desc: "Server failing",
    assign: "Backend Engineer",
    priority: "Medium"
  },
  {
    name: "cassandra",
    desc: "Nothing is working and no error is thrown",
    assign: "Dev Ops",
    priority: "High"
  },
  {
    name: "Kenny",
    desc: "ui not responsive at all",
    assign: "Frontend Engineer",
    priority: "Low"
  },
  {
    name: "marley",
    desc: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Lorem
     IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem 
     IpsumIpsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
    assign: "Backend Engineer",
    priority: "Medium"
  },
  {
    name: "alfred",
    desc: "ui is not responsive on screen below 576px",
    assign: "Frontend Engineer",
    priority: "Low"
  },
  {
    name: "alfred",
    desc: "database not conecting",
    assign: "Backend Engineer",
    priority: "Medium"
  },
  {
    name: "alfred",
    desc: "ui is not responsive on screen below 576px",
    assign: "Frontend Engineer",
    priority: "Low"
  },
]
}
