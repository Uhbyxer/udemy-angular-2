import { Component, OnInit } from '@angular/core';
import { UserDetailComponent } from "app/user-detail/user-detail.component";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  hidden = false;
  details = [];
 

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.hidden = !this.hidden;
    UserDetailComponent.count++;
    this.details.push(new UserDetailComponent());

  }

}
