import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainComponent } from './components/main/main.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/todoList', pathMatch: 'full'},
  {
    path: 'todoList',
    component: MainComponent
  },
  {
    path: 'usersList',
    component: UserListComponent
  },
  {
    path: 'categoriesList',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
