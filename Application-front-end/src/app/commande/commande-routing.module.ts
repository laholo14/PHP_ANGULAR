import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path: 'commande',redirectTo: 'commande/create',pathMatch:'full'},
  { path: 'commande/create/:id_repas', component: CreateComponent},
  { path: 'commande/index', component: IndexComponent},
  { path: 'commmande/validation', component: ValidationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
