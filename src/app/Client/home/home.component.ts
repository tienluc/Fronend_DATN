import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datePickerConfig : Partial<BsDatepickerConfig>;

  minDate: Date;
  minDate2: Date;
 

  constructor() { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-blue',
        showWeekNumbers:false,
        dateInputFormat: 'DD/MM/YYYY'
    });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.minDate2 = new Date();
    this.minDate2.setDate(this.minDate2.getDate());

  }

  ngOnInit() {
  }

}
