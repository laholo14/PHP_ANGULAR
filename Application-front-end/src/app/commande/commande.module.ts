import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CommandeModule { }
