import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
@ViewChild('f') regForm: NgForm;
data = {
  name: "",
  desc: "",
  assign: "",
  priority: ""
};
assign = ["Frontend Engineer", "Backend Engineer", "DevOps"];
priority = ["Low", "Medium", "High"];
success: Boolean = false;
  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  viewIssues(){
    this.route.navigate(["/view"]);
  }
  addIssues(){
    console.log(this.data);
    this.dataService.sharedData.push(this.data);
    console.log(this.dataService.sharedData);
    setTimeout(()=>{
      this.success = true;
    }, 1000)
  }
}
