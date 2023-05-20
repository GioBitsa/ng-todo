import { Component } from '@angular/core';
import { TodoItemModel } from 'src/app/models';
import { ThemeService, TodoItemService } from 'src/app/services';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  darkTheme: boolean = false;
  todoInput: string = '';

  constructor(
    public themeService: ThemeService,
    private todoItemService: TodoItemService
  ) {
    this.themeService.darkTheme$.subscribe((value) => {
      this.darkTheme = value;
    });
  }

  handleSubmit = () => {
    const data: TodoItemModel = {
      text: this.todoInput,
      done: false,
    };

    this.todoItemService.createNewTodo(data).subscribe(
      () => {
        console.log('Data posted successfully!');
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );

    this.todoInput = '';
  };
}
