import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus ='No server was created';
  serverName = 'Testerver';
  serverCreated = false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  ngOnInit() {
    
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = 'server was created! name is' + this.serverName;

  }


}
