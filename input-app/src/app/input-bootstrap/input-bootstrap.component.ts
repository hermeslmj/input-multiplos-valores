import { Component, Input, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'multi-input-bootstrap',
  templateUrl: './input-bootstrap.component.html',
  styleUrls: ['./input-bootstrap.component.css'],
  providers: [ 
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBootstrapComponent),
      multi: true
    }
  ]
})



export class InputBootstrapComponent implements ControlValueAccessor {

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() dica: string;
  @Input() isReadOnly = false;
  @Output() _multipleValue = [];
  

  private _innerValue: any;
  

  get multipleValue(){
    return this._multipleValue;
  }

  get value() {
    return this._innerValue;
  }

  set value(v: any) {
    if(v !== this._innerValue) {
      this._innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onChangeCallback: (_: any) => void = () => {}
  onTouchedCallback: (_: any) => void = () => {}

  appendMultipleValue() : void {
    this._multipleValue.push(this.value)
    this.value = "";
  }

  removeMultipleValue(v: any) : void {
    this._multipleValue = this._multipleValue.filter(item => item !== v);
    this.value = "";
  }

  writeValue(v: any): void {
    this.value = v;
  };
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  };
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  };
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  };

}
