import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class IngredientModule { }
