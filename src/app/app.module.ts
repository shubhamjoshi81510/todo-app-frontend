import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppRoutingModule } from './app-routing.module';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    TodolistComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
