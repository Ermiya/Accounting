import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicants-registration',
  templateUrl: './applicants-registration.component.html',
  styleUrls: ['./applicants-registration.component.less'],
})
export class ApplicantsRegistrationComponent implements OnInit {
  inputValue: string;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      serialVal: [null, [Validators.required, Validators.minLength(4)]],
      nameVal: [null, Validators.required],
      familyNameVal: [null, Validators.required],
      birthDayVal: [null, Validators.required],
      someVal: [null, Validators.required],
      telephoneVal: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      mobileVal: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
    });
  }
  get serialVal() {
    return this.form.controls.serialVal;
  }
  get nameVal() {
    return this.form.controls.nameVal;
  }
  get birthDayVal() {
    return this.form.controls.birthDayVal;
  }
  get someVal() {
    return this.form.controls.someVal;
  }
  get telephoneVal() {
    return this.form.controls.telephoneVal;
  }
  get mobileVal() {
    return this.form.controls.mobileVal;
  }
  get familyNameVal() {
    return this.form.controls.familyNameVal;
  }
  form: FormGroup;
  error = '';
  type = 0;

  ngOnInit() {}
  submit() {
    this.error = '';
    if (this.type === 0) {
      this.serialVal.markAsDirty();
      this.serialVal.updateValueAndValidity();
      this.nameVal.markAsDirty();
      this.nameVal.updateValueAndValidity();
      this.familyNameVal.markAsDirty();
      this.familyNameVal.updateValueAndValidity();
      this.birthDayVal.markAsDirty();
      this.birthDayVal.updateValueAndValidity();
      this.telephoneVal.markAsDirty();
      this.telephoneVal.updateValueAndValidity();
      this.mobileVal.markAsDirty();
      this.mobileVal.updateValueAndValidity();
      this.someVal.markAsDirty();
      this.someVal.updateValueAndValidity();

      if (
        this.serialVal.invalid ||
        this.nameVal.invalid ||
        this.familyNameVal.invalid ||
        this.birthDayVal.invalid ||
        this.mobileVal.invalid ||
        this.someVal.invalid ||
        this.telephoneVal.invalid
      ) {
        return;
      }
    }
  }
}
