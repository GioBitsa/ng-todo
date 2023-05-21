import { Component } from '@angular/core';
import { TodoItemModel } from 'src/app/models';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _snackBar: MatSnackBar,
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
        this.openSuccessSnackBar();
      },
      (error) => {
        console.error('Error posting data:', error);
        this.openErrorSnackBar();
      }
    );

    this.todoInput = '';
  };

  openSuccessSnackBar = () => {
    this._snackBar.open('Todo Item is added!', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: 'successSnackBar',
    });
  };

  openErrorSnackBar = () => {
    this._snackBar.open('Error! Try again later!', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: 'errorSnackBar',
    });
  };
}
