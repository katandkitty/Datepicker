import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McDatesComponent } from './mc-dates/mc-dates.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './mat-module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    McDatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	FormsModule, 
	ReactiveFormsModule,
	MaterialModule		
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
