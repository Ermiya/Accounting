import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantsRegistrationRoutingModule } from './applicants-registration-routing.module';
import { ApplicantsRegistrationComponent } from './applicants-registration.component';
import { NzFormModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [ApplicantsRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    ApplicantsRegistrationRoutingModule,
  ],
})
export class ApplicantsRegistrationModule {}
