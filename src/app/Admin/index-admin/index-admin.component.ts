import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.scss']
})
export class IndexAdminComponent implements OnInit {
  title = 'pro-dashboard-angular';
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}
