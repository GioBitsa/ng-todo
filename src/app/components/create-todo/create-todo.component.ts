import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  darkTheme: boolean = false;

  constructor(public themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe((value) => {
      this.darkTheme = value;
    });
  }
}
