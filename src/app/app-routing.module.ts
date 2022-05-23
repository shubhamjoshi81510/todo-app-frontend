import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'addTodo',component:AddtodoComponent},
  {path:'**',component:TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }