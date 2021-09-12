import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepasRoutingModule } from './repas-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RepasRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class RepasModule { }
