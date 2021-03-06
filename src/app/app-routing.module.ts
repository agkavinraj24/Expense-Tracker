import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ExpenseComponent} from './expense/expense.component';

const routes: Routes = [
  {path:'sign-in', component: SignInComponent },
  {path:'sign-up', component: SignUpComponent },
  {path:'expense', component: ExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
