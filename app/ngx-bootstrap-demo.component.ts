import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {
  BsDatepickerConfig,
  BsDaterangepickerDirective,
} from 'ngx-bootstrap/datepicker';
import { filter, first, skip } from 'rxjs/operators';
import { BsDatePickerUtils } from './bsDatePickerUtil';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-datepicker-datesdisabled',
  templateUrl: './disable-dates.html',
})
export class DemoDatepickerDatesDisabledComponent
  implements OnInit, AfterViewInit
{
  @ViewChildren(BsDatepickerDirective)
  datePicker: QueryList<BsDatepickerDirective>;
  customBsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  bsDate: Date;
  minDate = new Date('2020-02-05');

  // disabledDates = [new Date('2020-02-05'), new Date('2020-02-09')];

  ngOnInit() {
    this.customBsConfig = {
      datesDisabled: [new Date(2022, 8, 19)],
    };
  }

  selectDate() {}

  ngAfterViewInit() {
    this.datePicker
      .get(0)
      .onShown.pipe()
      .subscribe((val) => {
        new BsDatePickerUtils(this.datePicker.get(0)).viewChanged
          .pipe(skip(1))
          .subscribe((date) => {
            console.log(date);
            this.customBsConfig.datesDisabled = [new Date(2022, 9, 20)];
            this.bsDate = date;

            this.datePicker.get(0).setConfig();

            this.datePicker.get(0).toggle();

            setTimeout(() => {
              this.datePicker.get(0).show();
            });
          });
      });
  }
}
