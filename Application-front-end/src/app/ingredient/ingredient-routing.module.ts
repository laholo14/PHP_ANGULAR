import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'ingredient', redirectTo: 'ingredient/index', pathMatch: 'full' },
  { path: 'ingredient/index', component: IndexComponent },
  { path: 'ingredient/create', component: CreateComponent },
  { path: 'ingredient/update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule {}
