import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data = [{
    // name: "",
    // desc: "",
    // assign: "",
    // priority: ""
  }]
  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.sharedData;
    //console.log(this.dataService.sharedData);
    console.log(this.data);
  }

  addIssue(){
    this.route.navigate(["/add"]);
  }
}
