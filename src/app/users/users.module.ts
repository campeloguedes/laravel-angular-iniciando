import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: UsersCreateComponent },
  { path: 'users/:id', component: UsersShowComponent },
  { path: 'users/:id/edit', component: UsersEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [UsersComponent, UsersCreateComponent, UsersShowComponent, UsersEditComponent]
})
export class UsersModule { }
