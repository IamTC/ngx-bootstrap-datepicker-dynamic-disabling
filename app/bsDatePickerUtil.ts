import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { BehaviorSubject } from 'rxjs';

interface BsDatePickerStoreView {
  date: Date;
  mode: keyof { day; month; year };
}

interface BsDatePickerStoreData {
  view: BsDatePickerStoreView;
}

export class BsDatePickerUtils {
  public viewChanged = new BehaviorSubject<Date>(undefined);

  private lastKnownViewDate: Date = undefined;

  constructor(datePicker: BsDatepickerDirective) {
    const store = (datePicker as any)._datepicker.instance._store
      .source as BehaviorSubject<BsDatePickerStoreData>;
    store.subscribe((data) => {
      const date = data.view.date as Date;
      if (
        !this.lastKnownViewDate ||
        this.lastKnownViewDate.toDateString() !== date.toDateString()
      ) {
        if (data.view.mode === 'day') {
          this.lastKnownViewDate = date;
          this.viewChanged.next(data.view.date);
        }
      }
    });
  }
}
