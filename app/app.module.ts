import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



import { DemoDatepickerDatesDisabledComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoDatepickerDatesDisabledComponent],
  imports: [
    BsDatepickerModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoDatepickerDatesDisabledComponent]
})
export class AppModule {
}
