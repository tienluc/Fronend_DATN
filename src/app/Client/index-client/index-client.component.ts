import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-client',
  templateUrl: './index-client.component.html',
  styleUrls: ['./index-client.component.scss']
})
export class IndexClientComponent implements OnInit {
  showbutton: boolean;
  showinfor: boolean;
  constructor() { 
    // this.showbutton=false;
    this.showbutton=false;
    this.showinfor =true;
  }

  ngOnInit() {
  }
}
