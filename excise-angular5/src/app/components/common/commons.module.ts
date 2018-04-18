import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSettingComponent } from './action-setting/action-setting.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SelectizeProvinceComponent } from './selectize-province/selectize-province.component';
import { SelectizeDirective } from '../../directives/selectize.directive';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalStaffComponent } from './modal-staff/modal-staff.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule
  ],
  declarations: [
    ActionSettingComponent,
    HeaderDropdownComponent,
    SelectizeProvinceComponent,

    // Directives
    SelectizeDirective,

    ModalConfirmComponent,

    ModalStaffComponent

  ],
  exports: [
    ActionSettingComponent,
    HeaderDropdownComponent,
    SelectizeProvinceComponent,

    // Directives
    SelectizeDirective
  ]
})
export class CommonsModule { }
