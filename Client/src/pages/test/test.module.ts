import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, FormsModule, NgZorroAntdModule, TestRoutingModule],
  providers: [],
})
export class TestModule {}
