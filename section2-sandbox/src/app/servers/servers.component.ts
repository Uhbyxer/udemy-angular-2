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
  serverCreated = false;
  servers = ['testServ', 'testServ 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serversCreationStatus = 'Server was created! name is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
