import { Component, OnInit } from '@angular/core';
import { TodoItemModel } from 'src/app/models';
import { ThemeService, TodoItemService } from 'src/app/services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  darkTheme: boolean = false;
  dataList: TodoItemModel[] = [];
  loading: boolean = true;

  constructor(
    private todoItemService: TodoItemService,
    private themeService: ThemeService
  ) {
    this.themeService.darkTheme$.subscribe((value) => {
      this.darkTheme = value;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.todoItemService.getTodoList().subscribe((items) => {
      this.dataList = items;
      console.log(items);

      this.loading = false;
    });
  };
}
