import { NgIf } from '@angular/common';
import { Component, input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [BsDatepickerModule,NgIf,ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements ControlValueAccessor{

  label = input<string>('');
  maxDate = input<Date>();
  bsConfig?: Partial< BsDatepickerModule>;
  constructor(@Self() public ngCOntrol: NgControl){
    this.ngCOntrol.valueAccessor = this;
    this.bsConfig ={
      containerClass:'theme-red',
      dateInputFormat:'DD MMMM YYYY'
    }
  }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  get control(): FormControl{
    return this.ngCOntrol.control as FormControl
  }

}
