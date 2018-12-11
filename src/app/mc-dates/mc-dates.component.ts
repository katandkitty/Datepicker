import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';

import * as _moment from 'moment';
//import {default as _rollupMoment} from 'moment';

//const moment = _rollupMoment || _moment;
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'D.M.YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'mc-dates',
  templateUrl: './mc-dates.component.html',
  styleUrls: ['./mc-dates.component.less'],
  providers: [
	{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},  	
  ],
})

export class McDatesComponent implements OnInit {
  constructor(private datePipe: DatePipe, public snackBar: MatSnackBar) { }
  @Input('date-from') dateFrom: string;
  @Input('date-to') dateTo: string;
  @Output() mcchange1: EventEmitter<string> = new EventEmitter<string>();
  @Output() mcchange2: EventEmitter<string> = new EventEmitter<string>();
  date1 = null;
  date2 = null;
  ngOnInit() {}
  ngOnChanges() {
   	this.date1 = new FormControl(moment(this.dateFrom));
    this.date2 = new FormControl(moment(this.dateTo));
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
	this.mcchange1.emit(moment(event.value).format("Y-M-D"));
  }

  addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {	
	this.mcchange2.emit(moment(event.value).format("Y-M-D"));
  }

  setYesterday() {
	this.date1 = new FormControl(moment().subtract(1, "days"));
	this.date2 = new FormControl(moment().subtract(1, "days"));
	this.mcchange1.emit(moment().subtract(1, "days").format("Y-M-D"));
	this.mcchange2.emit(moment().subtract(1, "days").format("Y-M-D"));
  }

  setToday() {
	this.date1 = new FormControl(moment());
	this.date2 = new FormControl(moment());
	this.mcchange1.emit(moment().format("Y-M-D"));
	this.mcchange2.emit(moment().format("Y-M-D"));
  }

  setTwoWeeks() {
	this.date1 = new FormControl(moment().subtract(14, "days"));
	this.date2 = new FormControl(moment());
	this.mcchange1.emit(moment().subtract(14, "days").format("Y-M-D"));
	this.mcchange2.emit(moment().format("Y-M-D"));
  }

  setMonth() {
	this.date1 = new FormControl(moment().subtract(30, "days"));
	this.date2 = new FormControl(moment());
	this.mcchange1.emit(moment().subtract(30, "days").format("Y-M-D"));
	this.mcchange2.emit(moment().format("Y-M-D"));
  }

  setAll() {
	this.date1 = new FormControl(null);
	this.date2 = new FormControl(null);
	this.mcchange1.emit(null);
	this.mcchange2.emit(null);
  }

}
