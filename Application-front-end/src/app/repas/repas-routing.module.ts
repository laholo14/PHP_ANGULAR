import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'repas', redirectTo: 'repas/index', pathMatch: 'full' },
  { path: 'repas/index', component: IndexComponent },
  { path: 'repas/create', component: CreateComponent },
  { path: 'repas/update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepasRoutingModule {}
