import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CreateTodoComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
