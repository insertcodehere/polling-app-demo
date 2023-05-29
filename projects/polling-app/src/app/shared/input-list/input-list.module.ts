import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InputListComponent } from './input-list.component';
import { OptionsEmpty } from './empty-options.pipe';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    InputListComponent,
    OptionsEmpty
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  exports: [
    InputListComponent,
    OptionsEmpty
  ]
})
export class InputListModule { }
