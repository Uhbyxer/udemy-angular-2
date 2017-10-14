import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = '';

  usernameIsEmpty(): boolean {
    return this.username.length === 0;
  }

  onUserCreated(): void {
    this.username = '';
  }

  constructor() { }

  ngOnInit() {
  }
}
