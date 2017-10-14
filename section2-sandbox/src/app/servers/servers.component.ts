import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serversCreationStatus = 'No server created!';
  serverName = 'test name';
  username = 'test user';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serversCreationStatus = 'Server was created! name is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
