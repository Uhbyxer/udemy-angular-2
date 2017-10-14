import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  serverId: number = 123;

  // tslint:disable-next-line:no-inferrable-types
  private serverStatus: string = 'up';

  public getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
