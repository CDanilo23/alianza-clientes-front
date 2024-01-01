import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from '../shared/pipes/filter-user-by-name/filter-user-by-name.pipe';


@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class FeatureModule { }
