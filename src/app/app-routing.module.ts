import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [  {
    path: 'user/create',
    component: AddComponent
  },
  {
    path: 'user/edit/:id',
    component: EditComponent
  },
  {
    path: 'user',
    component: GetComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
