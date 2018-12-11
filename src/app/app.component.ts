import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import * as _moment from 'moment';
const moment = _moment;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public snackBar: MatSnackBar) { }
  title = 'test-date';
  ctrl = {
	date1: "2018-12-07",
   	date2: "2018-12-11" 
  }

  changeDates1(event: string) {
    this.ctrl.date1 = event;
    this.snackBar.open(this.ctrl.date1, this.ctrl.date2, {
      duration: 2000,
  	});
  }
  changeDates2(event: string) {
    this.ctrl.date2 = event;
    this.snackBar.open(this.ctrl.date1, this.ctrl.date2, {
      duration: 2000,
  	});
  }
  onKey(event: any) {
	if (moment(event.target.value) < moment(this.ctrl.date2)) {
		this.ctrl.date1 = moment(event.target.value).format("Y-M-D");
	}
  }
  onKey1(event: any) {
	if (moment(event.target.value) > moment(this.ctrl.date1)) {
		this.ctrl.date2 = moment(event.target.value).format("Y-M-D");
	}
  }
}
