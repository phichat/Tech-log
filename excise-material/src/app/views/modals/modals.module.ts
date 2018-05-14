import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StaffComponent],
  exports: [StaffComponent]
})
export class ModalsModule { }
