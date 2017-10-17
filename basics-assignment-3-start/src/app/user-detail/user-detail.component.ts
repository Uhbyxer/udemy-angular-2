import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  static count: number = 0;
  index: number;
  createdDate;

   constructor() {
     this.createdDate = new Date();

    //UserDetailComponent.count++;
    this.index = UserDetailComponent.count;
    // console.log('UserDetailComponent.count');
   }

  ngOnInit() {
  }

}
